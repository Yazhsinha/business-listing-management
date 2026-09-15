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
      "Asmit Choudhary built Business Listing Management. An IIT Roorkee B.Tech with stints at Ninjacart and Deloitte, he writes for multi-location operators who need NAP, coverage, and duplicates handled without the spreadsheet.",
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
      "Sandeep Kumar writes about business listing management and local SEO. With prior SEO work at Tosh Innovations and Hyper Adam, he focuses on practical guidance for teams that need clean NAP, directory coverage, and multi-location data they can trust.",
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
