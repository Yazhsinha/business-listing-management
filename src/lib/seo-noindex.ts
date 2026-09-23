/**
 * Conservative noindex denylist for BLM (businesslistingmanagement.com).
 *
 * Restore pass (2026-09-24 room stamp): the five editorial /blog orphans were
 * re-indexed (self-canonical + sitemap). Compare doorways stay noindex.
 */
export const NOINDEX_FOLLOW = "noindex, follow";

/** Blog slugs that should emit noindex,follow and stay out of the sitemap. */
export const NOINDEX_BLOG_SLUGS = new Set<string>([
  // Empty after 2026-09-24 restore. Product-doc blm-* pages stay product-canonicaled
  // (not listed here). Query aliases stay 301s.
]);

/** Pathnames (no origin) that should emit noindex,follow. */
export const NOINDEX_PATHS = new Set<string>([
  "/compare/yext-alternative",
  "/compare/brightlocal-alternative",
  "/compare/moz-local-alternative",
  "/compare/uberall-alternative",
  "/compare/birdeye-alternative",
  ...[...NOINDEX_BLOG_SLUGS].map((s) => `/blog/${s}`),
]);

export function robotsForPath(path: string | undefined | null): string | undefined {
  if (!path) return undefined;
  const normalized = path.startsWith("/") ? path.replace(/\/+$/, "") || "/" : `/${path}`;
  return NOINDEX_PATHS.has(normalized) ? NOINDEX_FOLLOW : undefined;
}

export function robotsForBlogSlug(slug: string | undefined | null): string | undefined {
  if (!slug) return undefined;
  return NOINDEX_BLOG_SLUGS.has(slug) ? NOINDEX_FOLLOW : undefined;
}

export function reasonForNoindex(pathOrSlug: string): string {
  const p = pathOrSlug.startsWith("/") ? pathOrSlug : `/blog/${pathOrSlug}`;
  if (p.startsWith("/compare/")) {
    return "Thin compare doorway template; Sep 17 surgical audit doorway cluster.";
  }
  return "Listed in NOINDEX_PATHS / NOINDEX_BLOG_SLUGS.";
}
