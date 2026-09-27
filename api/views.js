/**
 * Vercel Serverless Function — portfolio views counter.
 *
 * GET  → returns total view count
 * POST → increments view count (stores IP + user-agent)
 *
 * WHY THE COUNT IS READ THROUGH THE RPC:
 * `portfolio_views` enables Row Level Security with an INSERT policy only —
 * the anon key deliberately cannot SELECT rows, because that would expose every
 * visitor's IP and user agent. A direct `?select=id&count=exact` query with the
 * anon key therefore returns a content-range of "star/0" — a valid 200 that reads
 * as ZERO views. The public counter must go through
 * `get_portfolio_view_count()` (SECURITY DEFINER), which is granted to anon and
 * returns only the aggregate.
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const PUBLIC_KEY = process.env.SUPABASE_ANON;

// Insert: service role when available, otherwise anon (RLS allows anon inserts).
const WRITE_KEY = SERVICE_KEY || PUBLIC_KEY;
// Read: must be the anon key for the RPC (service_role is not in its GRANT list).
const READ_KEY = PUBLIC_KEY || SERVICE_KEY;

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

async function readViewCount() {
  if (SUPABASE_URL && READ_KEY) {
    const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_portfolio_view_count`, {
      method: 'POST',
      headers: {
        apikey: READ_KEY,
        Authorization: `Bearer ${READ_KEY}`,
        'Content-Type': 'application/json'
      },
      body: '{}'
    });
    if (rpcRes.ok) {
      const total = Number(await rpcRes.json());
      if (Number.isFinite(total)) return total;
    }
  }

  // Fallback for a service-role-only setup: RLS is bypassed, so a plain count works.
  if (SUPABASE_URL && SERVICE_KEY) {
    const countRes = await fetch(`${SUPABASE_URL}/rest/v1/portfolio_views?select=id`, {
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        Range: '0-0',
        Prefer: 'count=exact'
      }
    });
    if (countRes.ok) {
      const total = parseInt(countRes.headers.get('content-range')?.split('/')[1] || '', 10);
      if (Number.isFinite(total)) return total;
    }
  }

  return null;
}

export default async function handler(req, res) {
  cors(res);
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!SUPABASE_URL || !WRITE_KEY) {
    return res.status(500).json({ error: 'Supabase not configured' });
  }

  const headers = {
    apikey: WRITE_KEY,
    Authorization: `Bearer ${WRITE_KEY}`,
    'Content-Type': 'application/json'
  };

  if (req.method === 'POST') {
    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown';
    const ua = (req.headers['user-agent'] || '').slice(0, 512);

    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/portfolio_views`, {
      method: 'POST',
      headers: { ...headers, Prefer: 'return=minimal' },
      body: JSON.stringify({ viewer_ip: String(ip).slice(0, 64), user_agent: ua })
    });
    if (!insertRes.ok) return res.status(502).json({ error: 'Could not record view' });
  } else if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const views = await readViewCount();
  if (views === null) return res.status(502).json({ error: 'Could not read view count' });
  return res.status(200).json({ views });
}
