-- Server-side limits for public portfolio input tables.
-- Client-side validation is only usability. These checks are the authority.

ALTER TABLE contact_submissions
  ADD CONSTRAINT contact_name_length_check
    CHECK (char_length(trim(name)) BETWEEN 1 AND 30),
  ADD CONSTRAINT contact_name_format_check
    CHECK (name ~ '^[A-Za-z ]+$'),
  ADD CONSTRAINT contact_email_length_check
    CHECK (char_length(trim(email)) BETWEEN 3 AND 40),
  ADD CONSTRAINT contact_message_length_check
    CHECK (char_length(trim(message)) BETWEEN 10 AND 2000);

ALTER TABLE portfolio_views
  ADD CONSTRAINT portfolio_view_user_agent_length_check
    CHECK (user_agent IS NULL OR char_length(user_agent) <= 512),
  ADD CONSTRAINT portfolio_view_ip_length_check
    CHECK (viewer_ip IS NULL OR char_length(viewer_ip) <= 64);
