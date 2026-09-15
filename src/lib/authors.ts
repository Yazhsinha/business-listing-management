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

/** Canonical author bios for BLM article footers — tuned for business listing management. */
export const AUTHORS = {
  asmit: {
    name: "Asmit Choudhary",
    slug: "asmit-choudhary",
    bio:
      "Asmit Choudhary holds a B.Tech in Mechanical Engineering from IIT Roorkee and built Business Listing Management. He previously interned at Ninjacart (Product Analytics & Operations) and at Deloitte. He writes practical guidance on NAP accuracy, directory coverage, duplicate cleanup, and multi-location operations for teams that need every storefront accurate across Google, Apple, Bing, MapQuest, and the directory network.",
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
      "Sandeep Kumar previously worked as an SEO Intern at Tosh Innovations and as an Internship Trainee at Hyper Adam. He writes practical guides on business listing management, local SEO, and keeping multi-location NAP and directory data accurate.",
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
