/**
 * Conservative noindex denylist for BLM (businesslistingmanagement.com).
 *
 * GSC (asmit@nakama.in) was not reachable this run (Google session expired;
 * Sep 17 audits also blocked). Semrush MCP errored. Plausible has no API key.
 *
 * Only paths with strong non-GSC evidence of being useless / doorway / orphan
 * are listed. Head-term + money URLs stay indexable for the USA skyrocket push.
 */
export const NOINDEX_FOLLOW = "noindex, follow";

/** Blog slugs that should emit noindex,follow and stay out of the sitemap. */
export const NOINDEX_BLOG_SLUGS = new Set<string>([
  // Orphan quarantine (published CMS, not in sitemap)
  "how-to-do-google-business-listing-management-at-scale",
  // Thin ops stubs / commercial twins (not head-term money cluster)
  "listing-management-raci",
  "listing-change-qa-evidence",
  "location-open-move-close-playbook",
  "listing-vendor-migration-checklist",
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
  if (p.includes("at-scale")) {
    return "Orphan: live 200 + self-canonical but absent from sitemap; Sep 17 audit quarantine. GSC metrics unavailable this run.";
  }
  if (p.startsWith("/compare/")) {
    return "Thin compare doorway template; Sep 17 surgical audit doorway cluster. GSC metrics unavailable this run.";
  }
  return "Thin ops stub / cross-host twin intent (Sep 17 matrix). Not part of head-term money cluster. GSC metrics unavailable this run.";
}
