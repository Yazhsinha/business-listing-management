import { SITE } from "@/lib/site";
import { deploymentRobotsMeta } from "@/lib/public-host";

export const OG_IMAGE_PATH = "/og.png";
export const OG_IMAGE_WIDTH = "1280";
export const OG_IMAGE_HEIGHT = "640";

export function publicOrigin() {
  const explicit = process.env.SITE_URL || process.env.VITE_SITE_URL;
  if (explicit) return String(explicit).replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${String(vercel).replace(/^https?:\/\//, "")}`;
  return SITE.domain;
}

export function defaultShareImage(origin = publicOrigin()) {
  return `${origin}${OG_IMAGE_PATH}`;
}

export function pageTitle(title: string) {
  return title === SITE.name ? SITE.legalName : title;
}

export function shareMeta(opts: {
  title: string;
  description: string;
  path?: string;
  /** Absolute share URL. When set, og:url uses this instead of path. */
  url?: string;
  image?: string;
  /** Defaults to website; blog posts should pass "article". */
  type?: string;
  imageAlt?: string;
}) {
  const origin = publicOrigin();
  const url = (opts.url || "").trim() || (opts.path ? `${origin}${opts.path}` : origin);
  const image = opts.image ?? defaultShareImage(origin);
  const title = pageTitle(opts.title);
  const imageAlt = (opts.imageAlt || "").trim() || `${SITE.name}: ${SITE.tagline}`;
  return [
    { property: "og:type", content: opts.type || "website" },
    { property: "og:site_name", content: SITE.legalName },
    { property: "og:title", content: title },
    { property: "og:description", content: opts.description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: OG_IMAGE_WIDTH },
    { property: "og:image:height", content: OG_IMAGE_HEIGHT },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
  ];
}

/** CMS updated/modified value, when the article model has one. */
export function articleModifiedAt(
  article:
    | {
        updated_at?: string | null;
        updated?: string | null;
        modified?: string | null;
      }
    | null
    | undefined,
): string | undefined {
  const value = article?.updated_at || article?.updated || article?.modified || "";
  const trimmed = value.trim();
  return trimmed || undefined;
}

function articleDateMs(value: string): number | null {
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    const [year, month, day] = trimmed.split("-").map(Number);
    const ms = Date.UTC(year, month - 1, day);
    return Number.isNaN(ms) ? null : ms;
  }
  const ms = Date.parse(trimmed);
  return Number.isNaN(ms) ? null : ms;
}

/**
 * dateModified falls back to datePublished and is never earlier than it.
 * An unparseable modified value is treated as absent.
 */
export function articleDates(
  published: string,
  modified?: string | null,
): { datePublished: string; dateModified: string } {
  const datePublished = published.trim();
  const candidate = (modified ?? "").trim();
  if (!candidate || candidate === datePublished) {
    return { datePublished, dateModified: datePublished };
  }
  const publishedMs = articleDateMs(datePublished);
  const modifiedMs = articleDateMs(candidate);
  if (publishedMs == null || modifiedMs == null || modifiedMs < publishedMs) {
    return { datePublished, dateModified: datePublished };
  }
  return { datePublished, dateModified: candidate };
}

export function pageHead(opts: {
  title: string;
  description: string;
  path?: string;
  /** Absolute canonical override when an article sets canonical_url. */
  canonical?: string;
  /** Optional robots directive, e.g. "noindex, follow" for auth/conversion shells. */
  robots?: string;
  /** Absolute HTTPS share image; defaults to site OG banner. */
  image?: string;
  type?: string;
  imageAlt?: string;
  /** Article publish date. Emits article:published_time when set. */
  published?: string;
  /** Article updated/modified date. Clamped so it is not earlier than published. */
  modified?: string;
}) {
  const description = (opts.description || "").trim();
  const canonicalOverride = (opts.canonical || "").trim();
  const canonical =
    canonicalOverride ||
    (opts.path ? `${SITE.domain}${opts.path}` : "");
  const image = opts.image || defaultShareImage();
  const robots = opts.robots || deploymentRobotsMeta();
  const published = (opts.published || "").trim();
  const articleTimes = published ? articleDates(published, opts.modified) : null;
  return {
    meta: [
      { title: pageTitle(opts.title) },
      { name: "description", content: description },
      ...(robots ? [{ name: "robots", content: robots }] : []),
      ...shareMeta({ ...opts, image, url: canonicalOverride || undefined }),
      ...(articleTimes
        ? [
            { property: "article:published_time", content: articleTimes.datePublished },
            { property: "article:modified_time", content: articleTimes.dateModified },
          ]
        : []),
    ],
    links: [
      { rel: "image_src", href: image },
      ...(canonical ? [{ rel: "canonical", href: canonical }] : []),
    ],
  };
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.domain,
    email: SITE.email,
    description: SITE.description,
    founder: { "@type": "Person", name: SITE.author },
    logo: `${SITE.domain}/icon-512.png`,
    image: defaultShareImage(),
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.legalName,
    alternateName: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE.domain,
    description: SITE.description,
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "USD",
      description: "Growth plan for up to 25 locations. Start a free trial or book a call.",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.legalName,
    url: SITE.domain,
    description: SITE.oneLiner,
  };
}

export function faqJsonLd(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  /** CMS updated/modified value. Omitted values copy datePublished. */
  modified?: string | null;
  author?: string;
  image?: string;
}) {
  const dates = articleDates(opts.date, opts.modified);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: dates.datePublished,
    dateModified: dates.dateModified,
    author: { "@type": "Person", name: opts.author ?? SITE.editorial },
    publisher: { "@type": "Organization", name: SITE.legalName, url: SITE.domain },
    url: `${SITE.domain}${opts.path}`,
    image: opts.image || defaultShareImage(),
  };
}

/** CollectionPage whose ItemList is the blog hub's visible cards, in render order. */
export function blogCollectionJsonLd(posts: ReadonlyArray<{ slug: string; title: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Listing operations, written in complete sentences.",
    url: `${SITE.domain}/blog`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${SITE.domain}/blog/${post.slug}`,
      })),
    },
  };
}

export function breadcrumbJsonLd(items: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  };
}

export function definedTermJsonLd(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inDefinedTermSet: `${SITE.domain}/glossary`,
  };
}

export function definedTermSetJsonLd(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: opts.name,
    description: opts.description,
    url: opts.url,
  };
}
