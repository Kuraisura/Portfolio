-- =============================================================
-- Supabase Migration — Contact Form Rate Limit (1 per IP per window)
-- =============================================================
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new

-- 1. Remember which IP sent each message. Serverless instances are ephemeral,
--    so the in-memory limiter in api/contact.js alone cannot be trusted.
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS ip TEXT;

CREATE INDEX IF NOT EXISTS idx_contact_submissions_ip
  ON contact_submissions (ip, created_at DESC);

-- 2. RPC: how many messages has this IP sent inside the window?
--    SECURITY DEFINER so the public anon key can ask the count without ever
--    being able to SELECT the messages themselves (RLS still applies).
CREATE OR REPLACE FUNCTION public.contact_recent_count(client_ip TEXT, window_seconds INTEGER)
RETURNS INTEGER
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT count(*)::INTEGER
  FROM public.contact_submissions
  WHERE ip = client_ip
    AND created_at > now() - make_interval(secs => GREATEST(window_seconds, 1));
$$;

REVOKE ALL ON FUNCTION public.contact_recent_count(TEXT, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.contact_recent_count(TEXT, INTEGER) TO anon, authenticated, service_role;
