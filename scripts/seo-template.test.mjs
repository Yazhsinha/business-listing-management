import assert from "node:assert/strict";
import test from "node:test";
import { BLOG_POSTS } from "../src/lib/content/blog.ts";
import { visibleBlogHubCards } from "../src/lib/blog-hub.ts";
import { robotsTxtForHost } from "../src/lib/public-host.ts";
import { articleJsonLd, blogCollectionJsonLd, pageHead } from "../src/lib/seo.ts";
import { FALLBACK_EDITORIAL_SLUGS } from "../src/lib/sitemap.ts";

const AI_RETRIEVAL_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

const PRIVATE_PATHS = ["/app", "/login", "/signup", "/demo", "/trial", "/unsubscribe", "/admin"];

test("dateModified is never earlier than datePublished", () => {
  const unchanged = articleJsonLd({
    title: "Who owns listing management?",
    description: "Editorial.",
    path: "/blog/listing-management-raci",
    date: "2026-09-16",
  });
  assert.equal(unchanged.datePublished, "2026-09-16");
  assert.equal(unchanged.dateModified, "2026-09-16");

  const updated = articleJsonLd({
    title: "Who owns listing management?",
    description: "Editorial.",
    path: "/blog/listing-management-raci",
    date: "2026-09-16",
    modified: "2026-09-20T15:04:00.000Z",
  });
  assert.equal(updated.datePublished, "2026-09-16");
  assert.equal(updated.dateModified, "2026-09-20T15:04:00.000Z");
  assert.ok(Date.parse(updated.dateModified) >= Date.parse(updated.datePublished));

  const inverted = articleJsonLd({
    title: "Who owns listing management?",
    description: "Editorial.",
    path: "/blog/listing-management-raci",
    date: "2026-09-16",
    modified: "2026-09-01T00:00:00.000Z",
  });
  assert.equal(inverted.datePublished, "2026-09-16");
  assert.equal(inverted.dateModified, "2026-09-16");

  const head = pageHead({
    title: "Who owns listing management?",
    description: "Editorial.",
    path: "/blog/listing-management-raci",
    type: "article",
    published: "2026-09-16",
    modified: "2026-09-01",
  });
  const published = head.meta.find((meta) => meta.property === "article:published_time");
  const modified = head.meta.find((meta) => meta.property === "article:modified_time");
  assert.equal(published?.content, "2026-09-16");
  assert.equal(modified?.content, "2026-09-16");
});

test("blog hub ItemList matches the filtered cards", () => {
  const editorial = new Set(FALLBACK_EDITORIAL_SLUGS);
  const articles = [
    ...FALLBACK_EDITORIAL_SLUGS.map((slug, index) => ({
      slug,
      title: `Editorial ${index + 1}`,
      answer: "Operator guide.",
      description: "Operator guide.",
      status: "published",
      kind: "article",
      canonical_url: "",
      date: `2026-09-${String(10 + index).padStart(2, "0")}`,
      author: "Asmit Choudhary",
      minutes: 8,
      tags: ["Ops"],
    })),
    {
      slug: "blm-before-you-adopt",
      title: "How to evaluate listing software before you buy",
      answer: "Product doc.",
      description: "Product doc.",
      status: "published",
      kind: "article",
      canonical_url: "https://businesslistingmanagement.com/product",
      date: "2026-05-18",
      author: "Asmit Choudhary",
      minutes: 11,
      tags: ["Comparisons"],
    },
    {
      slug: "what-is-business-listing-management",
      title: "What multi-location listing ops actually cover",
      answer: "Ranking article.",
      description: "Ranking article.",
      status: "published",
      kind: "article",
      canonical_url:
        "https://businesslistingmanagement.com/blog/what-is-business-listing-management-alias",
      date: "2026-03-12",
      author: "Asmit Choudhary",
      minutes: 9,
      tags: ["Fundamentals"],
    },
    {
      slug: "business-listing-management-pricing-2026",
      title: "BLM pricing: Starter $49 and Growth $149",
      answer: "Ranking article.",
      description: "Ranking article.",
      status: "published",
      kind: "article",
      canonical_url: "https://businesslistingmanagement.com/pricing",
      date: "2026-04-02",
      author: "Asmit Choudhary",
      minutes: 8,
      tags: ["Pricing"],
    },
  ];

  const cards = visibleBlogHubCards(articles, BLOG_POSTS, editorial);
  const schema = blogCollectionJsonLd(cards);
  const items = schema.mainEntity.itemListElement;

  assert.equal(schema["@type"], "CollectionPage");
  assert.equal(schema.mainEntity["@type"], "ItemList");
  assert.equal(schema.mainEntity.numberOfItems, cards.length);
  assert.equal(items.length, cards.length);
  assert.equal(cards.length, FALLBACK_EDITORIAL_SLUGS.length);
  assert.deepEqual(
    cards.map((card) => card.slug),
    [...FALLBACK_EDITORIAL_SLUGS].reverse(),
  );

  items.forEach((item, index) => {
    assert.equal(item.position, index + 1);
    assert.equal(item.name, cards[index].title);
    assert.equal(item.url, `https://businesslistingmanagement.com/blog/${cards[index].slug}`);
  });

  const slugs = cards.map((card) => card.slug);
  assert.equal(
    slugs.some((slug) => slug.startsWith("blm-")),
    false,
  );
  assert.equal(slugs.includes("what-is-business-listing-management"), false);
  assert.equal(slugs.includes("business-listing-management-pricing-2026"), false);
});

test("production robots names retrieval bots and still disallows /app", () => {
  const robots = robotsTxtForHost("businesslistingmanagement.com");
  assert.ok(robots.startsWith("User-agent: *\nAllow: /\n"));
  assert.ok(robots.indexOf("User-agent: *") < robots.indexOf("User-agent: GPTBot"));

  for (const agent of AI_RETRIEVAL_AGENTS) {
    const block = [
      `User-agent: ${agent}`,
      "Allow: /",
      ...PRIVATE_PATHS.map((path) => `Disallow: ${path}`),
      "",
    ].join("\n");
    assert.ok(robots.includes(block), `missing Allow group for ${agent}`);
  }

  assert.match(robots, /Disallow: \/app/);
  assert.match(robots, /Sitemap: https:\/\/businesslistingmanagement.com\/sitemap.xml/);

  const preview = robotsTxtForHost("blm-git-abc.vercel.app");
  assert.equal(preview, "User-agent: *\nDisallow: /\n");
  assert.equal(preview.includes("GPTBot"), false);
  assert.equal(preview.includes("Allow: /"), false);

  const local = robotsTxtForHost("localhost");
  assert.equal(local.includes("User-agent: GPTBot"), false);
  assert.match(local, /User-agent: \*\nAllow: \//);
});
