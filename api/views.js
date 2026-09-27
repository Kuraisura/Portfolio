/**
 * Vercel Serverless Function — portfolio views counter.
 *
 * GET  → returns total view count
 * POST → increments view count (stores IP + user-agent)
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON;

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({ error: 'Supabase not configured' });
  }

  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
  };

  if (req.method === 'POST') {
    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown';
    const ua = req.headers['user-agent'] || '';

    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/portfolio_views`, {
      method: 'POST',
      headers: { ...headers, Prefer: 'return=minimal' },
      body: JSON.stringify({ viewer_ip: ip, user_agent: ua })
    });
    if (!insertRes.ok) return res.status(502).json({ error: 'Could not record view' });
  }

  // Return total count
  const countRes = await fetch(
    `${SUPABASE_URL}/rest/v1/portfolio_views?select=id`,
    { headers: { ...headers, Range: '0-0', Prefer: 'count=exact' } }
  );
  if (!countRes.ok) {
    const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_portfolio_view_count`, {
      method: 'POST', headers, body: '{}'
    });
    if (!rpcRes.ok) return res.status(502).json({ error: 'Could not read view count' });
    const rpcTotal = Number(await rpcRes.json());
    return res.status(200).json({ views: Number.isFinite(rpcTotal) ? rpcTotal : 0 });
  }
  const total = parseInt(countRes.headers.get('content-range')?.split('/')[1] || '0', 10);

  return res.status(200).json({ views: total });
}
