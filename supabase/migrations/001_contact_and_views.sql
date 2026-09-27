-- =============================================================
-- Supabase Migration — Portfolio Contact Form + Views Counter
-- =============================================================
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new

-- 1. Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Portfolio views counter
CREATE TABLE IF NOT EXISTS portfolio_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  viewer_ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable Row Level Security (RLS) — required for Supabase API access
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_views ENABLE ROW LEVEL SECURITY;

-- 4. Policies: allow anon (frontend) inserts only
CREATE POLICY "Allow anonymous inserts on contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on portfolio_views"
  ON portfolio_views FOR INSERT
  TO anon
  WITH CHECK (true);

-- 5. Policy: allow service_role (serverless functions) full read access
CREATE POLICY "Service role can read contact_submissions"
  ON contact_submissions FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can read portfolio_views"
  ON portfolio_views FOR SELECT
  TO service_role
  USING (true);

-- 6. Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_portfolio_views_created_at
  ON portfolio_views (created_at DESC);
