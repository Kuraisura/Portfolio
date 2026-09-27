-- =============================================================
-- Supabase Migration — Inbound Email Archive (Resend Receiving)
-- =============================================================
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new

-- Archive of emails received at hello@kuraisler.xyz (api/inbound.js).
CREATE TABLE IF NOT EXISTS inbound_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email_id TEXT UNIQUE NOT NULL,
  message_id TEXT,
  from_addr TEXT,
  to_addrs JSONB DEFAULT '[]'::jsonb,
  cc JSONB DEFAULT '[]'::jsonb,
  bcc JSONB DEFAULT '[]'::jsonb,
  reply_to JSONB DEFAULT '[]'::jsonb,
  subject TEXT,
  text_body TEXT,
  html_body TEXT,
  headers JSONB DEFAULT '{}'::jsonb,
  attachments JSONB DEFAULT '[]'::jsonb,
  forwarded BOOLEAN DEFAULT false,
  received_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE inbound_messages ENABLE ROW LEVEL SECURITY;

-- 3. Server-only table: the anon key is public (it ships in the browser bundle),
--    so it must never be able to read or write inbound mail.
CREATE POLICY "Service role can insert inbound_messages"
  ON inbound_messages FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read inbound_messages"
  ON inbound_messages FOR SELECT
  TO service_role
  USING (true);

-- 4. Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_inbound_messages_created_at
  ON inbound_messages (created_at DESC);
