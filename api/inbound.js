/**
 * Vercel Serverless Function — inbound email forwarder (Resend Receiving).
 *
 * Resend posts `email.received` webhooks here. The payload carries metadata
 * only, so after verifying the Svix signature we fetch the full message from
 * the Receiving API, forward a copy to the owner's inbox with Reply-To set to
 * the original sender (so a normal Gmail reply reaches them), and archive the
 * message in Supabase.
 *
 * Required environment variables (Vercel dashboard → Settings):
 *   RESEND_WEBHOOK_SECRET    — whsec_… from the webhook's details page
 *   RESEND_API_KEY           — fetches the email body and re-sends the copy
 *   RESEND_FROM              — verified sender, e.g. "Name <hello@kuraisler.xyz>"
 *   RESEND_TO                — inbox that receives forwarded mail
 *   SUPABASE_URL             — archive target (optional but recommended)
 *   SUPABASE_SERVICE_ROLE_KEY — server-only key; anon cannot write this table
 */

import crypto from 'node:crypto';

const SIGNATURE_TOLERANCE_S = 5 * 60;
const STREAM_TIMEOUT_MS = 3000;
const MAX_SUBJECT = 300;
const MAX_TEXT = 100000;
const MAX_HTML = 200000;
const MAX_ATTACHMENT_FILES = 5;
const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const MAX_ATTACHMENT_TOTAL = 8 * 1024 * 1024;

function sanitizeHeaderValue(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function collectStream(req) {
  return new Promise((resolve) => {
    const chunks = [];
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(Buffer.concat(chunks).toString('utf8'));
    };
    const timer = setTimeout(finish, STREAM_TIMEOUT_MS);
    req.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    req.on('end', finish);
    req.on('error', finish);
    req.on('close', finish);
  });
}

/**
 * Svix signs the exact bytes on the wire. Prefer the raw stream; if the runtime
 * already consumed it, fall back to the parsed body re-serialized (Resend emits
 * compact ASCII JSON, so this round-trips byte-identically in practice).
 */
async function readRawBody(req) {
  if (req.readable && !req.readableEnded) {
    const raw = await collectStream(req);
    if (raw.length > 0) return raw;
  }
  const body = req.body;
  if (typeof body === 'string') return body;
  if (Buffer.isBuffer(body)) return body.toString('utf8');
  if (body && typeof body === 'object') return JSON.stringify(body);
  return '';
}

function verifySignature(rawBody, headers, secret) {
  const svixId = headers['svix-id'];
  const svixTimestamp = headers['svix-timestamp'];
  const svixSignature = headers['svix-signature'];
  if (!svixId || !svixTimestamp || !svixSignature) {
    throw new Error('missing svix headers');
  }

  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(svixTimestamp));
  if (!Number.isFinite(age) || age > SIGNATURE_TOLERANCE_S) {
    throw new Error('timestamp outside tolerance');
  }

  const secretBytes = Buffer.from(
    String(secret).startsWith('whsec_') ? String(secret).slice(6) : String(secret),
    'base64'
  );
  const expected = crypto
    .createHmac('sha256', secretBytes)
    .update(`${svixId}.${svixTimestamp}.${rawBody}`, 'utf8')
    .digest('base64');

  const valid = String(svixSignature)
    .split(' ')
    .some((candidate) => {
      const [version, value] = candidate.split(',');
      if (version !== 'v1' || !value) return false;
      const a = Buffer.from(value);
      const b = Buffer.from(expected);
      return a.length === b.length && crypto.timingSafeEqual(a, b);
    });

  if (!valid) throw new Error('signature mismatch');
}

async function fetchReceivedEmail(apiKey, emailId) {
  const res = await fetch(
    `https://api.resend.com/emails/receiving/${encodeURIComponent(emailId)}`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );
  if (!res.ok) {
    throw new Error(`Receiving API ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  return res.json();
}

async function downloadAttachments(apiKey, emailId) {
  const listRes = await fetch(
    `https://api.resend.com/emails/receiving/${encodeURIComponent(emailId)}/attachments`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );
  if (!listRes.ok) return [];
  const payload = await listRes.json();
  const items = Array.isArray(payload.data) ? payload.data : [];

  const files = [];
  let total = 0;
  for (const item of items) {
    if (files.length >= MAX_ATTACHMENT_FILES) break;
    if (!item.download_url || !item.size) continue;
    if (item.size > MAX_ATTACHMENT_BYTES || total + item.size > MAX_ATTACHMENT_TOTAL) continue;
    try {
      const dl = await fetch(item.download_url);
      if (!dl.ok) continue;
      const buffer = Buffer.from(await dl.arrayBuffer());
      total += buffer.length;
      files.push({ filename: item.filename || 'attachment', content: buffer.toString('base64') });
    } catch (err) {
      console.error('Inbound attachment download failed', item.filename, err.message);
    }
  }
  return files;
}

async function archiveMessage(row) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON;
  if (!url || !key) {
    console.error('Inbound archive skipped: Supabase env not set');
    return false;
  }
  const res = await fetch(
    `${url}/rest/v1/inbound_messages?on_conflict=email_id&resolution=ignore-duplicates`,
    {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(row)
    }
  );
  if (!res.ok) {
    console.error('Inbound archive failed', res.status, (await res.text()).slice(0, 300));
    return false;
  }
  return true;
}

function buildForward(email, attachmentNames) {
  const replyTo =
    (Array.isArray(email.reply_to) && email.reply_to[0]) || email.from || '';
  const subject = sanitizeHeaderValue(`Inbound: ${email.subject || '(no subject)'}`).slice(
    0,
    MAX_SUBJECT
  );
  const bodyText = String(email.text || '').slice(0, MAX_TEXT);
  const bodyHtml = String(email.html || '').slice(0, MAX_HTML);

  const meta = [
    ['From', email.from],
    ['To', (email.to || []).join(', ')],
    ['Subject', email.subject || '(no subject)'],
    ['Received', email.created_at]
  ];

  const metaRows = meta
    .map(
      ([label, value]) =>
        `<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:2px">${label}</div><div style="font-size:14px;color:#3f3f46;font-weight:500;word-break:break-word">${escapeHtml(
          value || '—'
        )}</div></div>`
    )
    .join('');

  const bodyBlock = bodyHtml
    ? `<div style="border:1px solid #f0f0f0;border-radius:8px;padding:16px;overflow:hidden">${bodyHtml}</div>`
    : `<pre style="font-family:inherit;font-size:14px;color:#3f3f46;line-height:1.6;white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:8px;border:1px solid #f0f0f0;margin:0">${escapeHtml(
        bodyText || '(empty body)'
      )}</pre>`;

  const attachBlock =
    attachmentNames.length > 0
      ? `<div style="margin-top:16px"><div style="font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">Attachments</div><div style="font-size:14px;color:#3f3f46">${escapeHtml(
          attachmentNames.join(', ')
        )}</div></div>`
      : '';

  const html = `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;padding:32px;background:#f4f5f7"><div style="max-width:640px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06)"><div style="padding:16px 24px;background:#111"><div style="color:#fff;font-size:15px;font-weight:700">Inbound email → kuraisler.xyz</div><div style="color:#a1a1aa;font-size:12px;font-weight:500">Forwarded automatically · reply directly to answer the sender</div></div><div style="padding:24px">${metaRows}<hr style="border:none;border-top:1px solid #f0f0f0;margin:16px 0"/>${bodyBlock}${attachBlock}</div></div></body></html>`;

  const text = [
    'Inbound email received by kuraisler.xyz',
    `From: ${email.from || '—'}`,
    `To: ${(email.to || []).join(', ')}`,
    `Subject: ${email.subject || '(no subject)'}`,
    `Received: ${email.created_at || '—'}`,
    attachmentNames.length ? `Attachments: ${attachmentNames.join(', ')}` : '',
    '',
    bodyText || bodyHtml || '(empty body)'
  ]
    .filter((line) => line !== '')
    .join('\n');

  return { subject, text, html, replyTo: /@/.test(replyTo) ? replyTo : undefined };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { RESEND_WEBHOOK_SECRET, RESEND_API_KEY, RESEND_FROM, RESEND_TO } = process.env;
  if (!RESEND_WEBHOOK_SECRET || !RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
    console.error(
      'Inbound misconfigured: missing RESEND_WEBHOOK_SECRET, RESEND_API_KEY, RESEND_FROM, or RESEND_TO'
    );
    return res.status(500).json({ error: 'Inbound email is not configured yet.' });
  }

  const rawBody = await readRawBody(req);
  try {
    verifySignature(rawBody, req.headers, RESEND_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Inbound webhook rejected:', err.message);
    return res.status(400).json({ error: 'Invalid webhook signature' });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  if (!event || event.type !== 'email.received' || !event.data?.email_id) {
    return res.status(200).json({ ok: true, ignored: true });
  }

  try {
    const email = await fetchReceivedEmail(RESEND_API_KEY, event.data.email_id);
    const emailId = email.id || event.data.email_id;
    const attachmentNames = Array.isArray(email.attachments)
      ? email.attachments.map((a) => a.filename).filter(Boolean)
      : [];
    const files = attachmentNames.length
      ? await downloadAttachments(RESEND_API_KEY, emailId)
      : [];

    const { subject, text, html, replyTo } = buildForward(email, attachmentNames);
    const payload = { from: RESEND_FROM, to: [RESEND_TO], subject, text, html };
    if (replyTo) payload.reply_to = replyTo;
    if (files.length) payload.attachments = files;

    const sendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!sendRes.ok) {
      const detail = await sendRes.text();
      console.error('Inbound forward failed', sendRes.status, detail.slice(0, 300));
      return res.status(502).json({ error: 'Could not forward inbound email' });
    }

    await archiveMessage({
      email_id: emailId,
      message_id: email.message_id || null,
      from_addr: email.from || null,
      to_addrs: email.to || [],
      cc: email.cc || [],
      bcc: email.bcc || [],
      reply_to: email.reply_to || [],
      subject: email.subject || null,
      text_body: String(email.text || '').slice(0, MAX_TEXT),
      html_body: String(email.html || '').slice(0, MAX_HTML),
      headers: email.headers || {},
      attachments: email.attachments || [],
      forwarded: true,
      received_at: email.created_at || null
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Inbound processing failed', error);
    return res.status(500).json({ error: 'Could not process inbound email' });
  }
}
