/**
 * Vercel Serverless Function — contact form handler.
 *
 * Runs on the server, so RESEND_API_KEY is never exposed to the browser.
 * Uses fetch against the Resend REST API directly rather than the `resend`
 * npm package, which keeps the dependency list unchanged.
 *
 * Required environment variables (set in the Vercel dashboard):
 *   RESEND_API_KEY  — from https://resend.com/api-keys
 *   CONTACT_TO      — inbox that receives the messages
 *   CONTACT_FROM    — verified sender, e.g. "Portfolio <contact@yourdomain.com>"
 *
 * NOTE ON ABUSE: this endpoint is intentionally public — a contact form has to
 * be. Protection here is a honeypot field, strict length caps, and a per-IP
 * limit of RATE_LIMIT_MAX messages per window. The limit is enforced twice:
 * in memory (fast, but per-instance and lost on cold starts) and against
 * Supabase through the contact_recent_count RPC (durable). Only successfully
 * sent emails consume quota. If you start seeing real spam, add Cloudflare
 * Turnstile or hCaptcha and verify the token here.
 */

const MAX_LENGTHS = { name: 30, email: 40, note: 100 };
const RATE_LIMIT_MAX = 1; // messages per IP per window
const RATE_LIMIT_WINDOW_MS = (Number(process.env.CONTACT_RATE_WINDOW) || 3600) * 1000;

// Module scope survives between invocations on a warm instance.
const rateLimitStore = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (rateLimitStore.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  return hits.length >= RATE_LIMIT_MAX;
}

/** Called only after an email actually went out — a failed send never burns quota. */
function recordRequest(ip) {
  const now = Date.now();
  const hits = (rateLimitStore.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitStore.set(ip, hits);

  // Opportunistic cleanup so the map can't grow without bound.
  if (rateLimitStore.size > 500) {
    for (const [key, timestamps] of rateLimitStore) {
      if (timestamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) rateLimitStore.delete(key);
    }
  }
}

/** Durable per-IP check backed by Supabase; survives cold starts and instances. */
async function isRateLimitedInDb(ip) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON;
  if (!url || !key) return false;
  try {
    const res = await fetch(`${url}/rest/v1/rpc/contact_recent_count`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_ip: ip,
        window_seconds: Math.max(1, Math.round(RATE_LIMIT_WINDOW_MS / 1000))
      })
    });
    if (!res.ok) {
      console.error('Rate limit RPC failed (in-memory limit still applies)', res.status);
      return false;
    }
    const count = Number(await res.json());
    return Number.isFinite(count) && count >= RATE_LIMIT_MAX;
  } catch (err) {
    console.error('Rate limit RPC error (in-memory limit still applies)', err);
    return false;
  }
}

/** Strip characters that could be used for header injection in the subject. */
function sanitizeHeaderValue(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

/** Escape for safe interpolation into the HTML email body. */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validate({ name, email, note }) {
  const errors = {};

  if (typeof name !== 'string' || !name.trim()) errors.name = 'Name is required';
  else if (name.length > MAX_LENGTHS.name) errors.name = 'Name is too long';
  else if (!/^[a-zA-Z ]+$/.test(name)) errors.name = 'Name can only contain letters and spaces';

  if (typeof email !== 'string' || !email.trim()) errors.email = 'Email is required';
  else if (email.length > MAX_LENGTHS.email) errors.email = 'Email is too long';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address';

  if (typeof note !== 'string' || !note.trim()) errors.note = 'Message is required';
  else if (note.trim().length < 10) errors.note = 'Message must be at least 10 characters';
  else if (note.length > MAX_LENGTHS.note) errors.note = 'Message is too long';

  return errors;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!String(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) {
    return res.status(415).json({ error: 'Content-Type must be application/json' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO || process.env.CONTACT_TO;
  const from = process.env.RESEND_FROM || process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    // Log server-side; never leak which variable is missing to the client.
    console.error('Contact form misconfigured: missing RESEND_API_KEY, CONTACT_TO, or CONTACT_FROM');
    return res.status(500).json({ error: 'Email service is not configured yet.' });
  }

  const ip = String(
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown'
  ).slice(0, 64);

  if (isRateLimited(ip) || (await isRateLimitedInDb(ip))) {
    return res.status(429).json({
      error: 'You already sent a message from this address. Please wait a while before sending another.'
    });
  }

  // Vercel parses JSON bodies automatically, but guard against a string body.
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid request body' });
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  // Honeypot: a hidden field real users never fill in. Return 200 so bots don't
  // learn they were caught.
  if (body.company) return res.status(200).json({ ok: true });

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Validation failed', errors });
  }

  const name = sanitizeHeaderValue(body.name);
  const email = sanitizeHeaderValue(body.email);
  const note = String(body.note).trim();

  const selfWarnings = {
    'kuraisler@gmail.com': "That's my email too, can you stop already"
  };
  if (to) selfWarnings[String(to).trim().toLowerCase()] = 'What do you think your doing buckaroo?';
  const selfWarning = selfWarnings[email.toLowerCase()];
  if (selfWarning) {
    return res.status(400).json({ error: selfWarning });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio contact — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${note}`,
        html: `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;padding:32px;background:#f4f5f7"><div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06)"><div style="display:flex;align-items:center;gap:12px;padding:20px 24px;background:#111"><div style="width:40px;height:40px;border-radius:50%;overflow:hidden;border:2px solid rgba(255,255,255,0.15)"><img src="https://kuraisler.xyz/Portfolio/profile.jpg" alt="" width="40" height="40" style="display:block"/></div><div><div style="color:#fff;font-size:16px;font-weight:700">Mark Crysler Baddo</div><div style="color:#a1a1aa;font-size:12px;font-weight:500">Full-Stack Developer</div></div></div><hr style="border:none;border-top:1px solid #e5e7eb;margin:0"/><div style="padding:24px"><h2 style="font-size:18px;font-weight:700;color:#111;margin:0 0 20px">New Portfolio Message</h2><div style="margin-bottom:12px"><div style="font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">FROM</div><div style="font-size:14px;color:#3f3f46;font-weight:500">${escapeHtml(name)}</div></div><div style="margin-bottom:12px"><div style="font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">EMAIL</div><a href="mailto:${escapeHtml(email)}" style="font-size:14px;color:#2563eb;text-decoration:none;font-weight:500">${escapeHtml(email)}</a></div><hr style="border:none;border-top:1px solid #f0f0f0;margin:16px 0"/><div style="margin-bottom:12px"><div style="font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">MESSAGE</div><div style="font-size:14px;color:#3f3f46;line-height:1.6;white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:8px;border:1px solid #f0f0f0">${escapeHtml(note)}</div></div></div></div></body></html>`
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend API error', response.status, detail);
      return res.status(502).json({ error: 'Could not send your message. Please email me directly.' });
    }

    // Archive only after a successful send, so a Resend failure never burns
    // the sender's quota. The ip column powers the durable rate limit.
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON;
    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({ name, email, message: note, ip })
      }).catch(e => console.error('Supabase insert failed (non-blocking)', e));
    }

    recordRequest(ip);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form send failed', error);
    return res.status(500).json({ error: 'Something went wrong. Please email me directly.' });
  }
}
