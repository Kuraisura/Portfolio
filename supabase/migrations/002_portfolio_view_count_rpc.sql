-- Return only the aggregate view count. This keeps visitor IP and user-agent
-- fields protected by RLS while allowing the public counter to be displayed.
CREATE OR REPLACE FUNCTION public.get_portfolio_view_count()
RETURNS BIGINT
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT count(*) FROM public.portfolio_views;
$$;

REVOKE ALL ON FUNCTION public.get_portfolio_view_count() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_portfolio_view_count() TO anon, authenticated;
