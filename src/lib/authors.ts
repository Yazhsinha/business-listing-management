export type AuthorProfile = {
  name: string;
  slug: string;
  bio: string;
  linkedinUrl: string;
  imageSrc?: string;
  imageWebpSrc?: string;
  imageAlt: string;
  initials: string;
};

/** Canonical author bios for BLM article footers. Asmit matches LLM author page verbatim. */
export const AUTHORS = {
  asmit: {
    name: "Asmit Choudhary",
    slug: "asmit-choudhary",
    bio:
      "Asmit Choudhary holds a B.Tech in Mechanical Engineering from IIT Roorkee and is the editor of Local Listings Management, an independent editorial publication covering local listings, Google Business Profile, reputation, multi-location operations, and AI-driven discovery. He previously interned at Ninjacart (Product Analytics & Operations) and at Deloitte. On this site he owns editorial standards and corrections and writes practical guidance for teams responsible for how physical locations appear and earn trust online.",
    linkedinUrl: "https://www.linkedin.com/in/asmit-c/",
    imageSrc: "/team/asmit-choudhary.jpg",
    imageWebpSrc: "/team/asmit-choudhary.webp",
    imageAlt: "Asmit Choudhary",
    initials: "AC",
  },
  sandeep: {
    name: "Sandeep Kumar",
    slug: "sandeep-kumar",
    bio:
      "Sandeep Kumar previously worked as an SEO Intern at Tosh Innovations and as an Internship Trainee at Hyper Adam. He writes and supports practical content across Nakama’s independent listing and local SEO publications.",
    linkedinUrl: "https://www.linkedin.com/in/marketingbysandeep",
    imageSrc: "/team/sandeep-kumar.jpg",
    imageWebpSrc: "/team/sandeep-kumar.webp",
    imageAlt: "Sandeep Kumar",
    initials: "SK",
  },
} as const satisfies Record<string, AuthorProfile>;

const ALIASES: Record<string, keyof typeof AUTHORS> = {
  "asmit choudhary": "asmit",
  asmit: "asmit",
  "blm editorial": "asmit",
  editorial: "asmit",
  "sandeep kumar": "sandeep",
  sandeep: "sandeep",
};

export function resolveAuthor(authorName: string | null | undefined): AuthorProfile {
  const key = ALIASES[(authorName ?? "").trim().toLowerCase()] ?? "asmit";
  return AUTHORS[key];
}
