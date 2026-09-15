-- Persist slug renames from the desk so public /blog/{old} can 301 to /blog/{new}.
create table if not exists cms_redirects (
  from_slug text primary key,
  to_slug text not null,
  article_id text,
  updated_at timestamptz not null default now()
);
create index if not exists cms_redirects_to_slug_idx on cms_redirects (to_slug);

-- Known legacy URLs for the pricing / cost article.
insert into cms_redirects (from_slug, to_slug, updated_at)
values
  ('business-listing-management-cost-2026', 'business-listing-management-pricing-2026', now()),
  ('business-listing-management-cost', 'business-listing-management-pricing-2026', now())
on conflict (from_slug) do update
  set to_slug = excluded.to_slug,
      updated_at = now();
