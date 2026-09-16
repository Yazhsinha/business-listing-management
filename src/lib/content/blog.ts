export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  minutes: number;
  tags: string[];
  excerpt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-business-listing-management",
    title: "What multi-location listing ops actually cover",
    description:
      "Multi-location listing ops cover canonical NAP, hours, categories, and sync across Google, Apple, Bing, and directories so every US location stays accurate.",
    date: "2026-03-12",
    author: "Asmit Choudhary",
    minutes: 9,
    tags: ["Fundamentals"],
    excerpt:
      "Multi-location listing ops are the ongoing work of creating, verifying, and synchronizing a company's name, address, phone (NAP), hours, and categories across search engines, maps, and directories. BLM runs that loop for Google, Apple, Bing, and the directory network from one workspace.",
  },
  {
    slug: "business-listing-management-pricing-2026",
    title: "BLM pricing: Starter $49 and Growth $149",
    description:
      "BLM pricing is public: Starter $49/month for one location after a 7-day trial, Growth $149/month for up to 25 locations, Enterprise custom.",
    date: "2026-04-02",
    author: "Asmit Choudhary",
    minutes: 8,
    tags: ["Pricing"],
    excerpt:
      "Starter is $49/month for one location after a 7-day trial; Growth is $149/month for up to 25 locations; Enterprise is custom. Software is only half the story - NAP drift on Apple, Bing, and the directory network is the hidden line item.",
  },
  {
    slug: "best-business-listing-management-software-2026",
    title: "How to evaluate listing software before you buy",
    description:
      "Evaluate listing software on canonical NAP, Google/Apple/Bing coverage, duplicate workflow, shared workspace, and pricing for your location count.",
    date: "2026-05-18",
    author: "Asmit Choudhary",
    minutes: 11,
    tags: ["Comparisons"],
    excerpt:
      "Before you buy, score listing software on whether it catches NAP drift, duplicates, and coverage gaps - not on how many publisher logos fit on a slide. Demand live status across Google, Apple, Bing, and the directory network, a duplicate workflow that protects reviews, a shared workspace, and public pricing.",
  },
  {
    slug: "google-business-profile-vs-business-listings",
    title: "Why Google Business Profile alone is not enough",
    description:
      "GBP is one listing; Apple Maps, Bing Places, directories, and in-car navigation still matter when platforms Google does not control handle the session.",
    date: "2026-02-20",
    author: "Asmit Choudhary",
    minutes: 8,
    tags: ["Google"],
    excerpt:
      "GBP alone is not a full listings program. Apple Maps, Bing Places, directories, aggregators, and in-car navigation still carry US customers when Google does not control the session. Treat the citation graph as the product surface.",
  },
  {
    slug: "how-to-find-and-fix-duplicate-business-listings",
    title: "How to find and suppress duplicate listings",
    description:
      "Find, match, suppress, and protect reviews when duplicate listings appear across Google, Apple, Bing, and the directory network - do not delete first.",
    date: "2026-06-09",
    author: "Asmit Choudhary",
    minutes: 10,
    tags: ["Duplicates"],
    excerpt:
      "Duplicate listings split reviews and confuse hours. Find near-matches, pick a survivor, suppress or merge the rest, and protect reviews across Google, Apple, Bing, and the directory network. Re-scan until aggregators catch up.",
  },
  {
    slug: "business-listing-management-for-agencies",
    title: "Agency playbook for multi-client listing ops",
    description:
      "Agency listing ops need defined onboarding, NAP and duplicate SLAs, CMO-ready reporting, and a multi-account workspace for US client books.",
    date: "2026-07-21",
    author: "Asmit Choudhary",
    minutes: 9,
    tags: ["Agencies"],
    excerpt:
      "Agencies that treat listing work as a monthly screenshot burn out past ~20 brands. Run it as ops: onboarding, SLAs on duplicates and NAP drift, reporting a CMO can read, and a multi-account workspace across Google, Apple, Bing, and the directory network.",
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
