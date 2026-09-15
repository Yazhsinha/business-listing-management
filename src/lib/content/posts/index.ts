import { BLOG_POSTS } from "@/lib/content/blog";
import what from "./what-is-business-listing-management";
import pricing from "./business-listing-management-pricing-2026";
import software from "./best-business-listing-management-software-2026";
import gbp from "./google-business-profile-vs-business-listings";
import duplicates from "./how-to-find-and-fix-duplicate-business-listings";
import agencies from "./business-listing-management-for-agencies";

export const POST_BODY: Record<string, string> = {
  "what-is-business-listing-management": what,
  "business-listing-management-pricing-2026": pricing,
  "best-business-listing-management-software-2026": software,
  "google-business-profile-vs-business-listings": gbp,
  "how-to-find-and-fix-duplicate-business-listings": duplicates,
  "business-listing-management-for-agencies": agencies,
};

export { BLOG_POSTS };
