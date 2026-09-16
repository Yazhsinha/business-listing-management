/** Bare production host — the only indexable marketing host. */
export const PRODUCTION_HOST = "businesslistingmanagement.com";
export const PRODUCTION_ORIGIN = `https://${PRODUCTION_HOST}`;

export function normalizeHost(host: string | null | undefined): string {
  return (
    String(host || "")
      .split(",")[0]
      ?.trim()
      .split(":")[0]
      ?.toLowerCase() || ""
  );
}

/** Vercel deployment / preview hosts must not be indexed. */
export function isVercelAppHost(host: string | null | undefined): boolean {
  return normalizeHost(host).endsWith(".vercel.app");
}

/** True when this Host should emit Allow + sitemap (production bare domain). */
export function isIndexableMarketingHost(host: string | null | undefined): boolean {
  const h = normalizeHost(host);
  if (!h) return true;
  if (isVercelAppHost(h)) return false;
  if (h === `www.${PRODUCTION_HOST}`) return false;
  return h === PRODUCTION_HOST || h === "localhost" || h === "127.0.0.1";
}

export function robotsTxtForHost(host: string | null | undefined): string {
  if (!isIndexableMarketingHost(host)) {
    return ["User-agent: *", "Disallow: /", ""].join("\n");
  }
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`,
    "",
  ].join("\n");
}

/**
 * Robots meta for non-production Vercel deployments (branch previews).
 * Production custom domains stay indexable; .vercel.app production alias is
 * redirected at the domain layer.
 */
export function deploymentRobotsMeta(): string | undefined {
  if (typeof process === "undefined") return undefined;
  const env = process.env.VERCEL_ENV;
  if (env === "preview" || env === "development") return "noindex, nofollow";
  return undefined;
}
