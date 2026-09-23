import { BLOG_POSTS } from "@/lib/content/blog";
import what from "./what-is-business-listing-management";
import pricing from "./business-listing-management-pricing-2026";
import software from "./best-business-listing-management-software-2026";
import gbp from "./google-business-profile-vs-business-listings";
import duplicates from "./how-to-find-and-fix-duplicate-business-listings";
import agencies from "./business-listing-management-for-agencies";
import raci from "./listing-management-raci";
import migration from "./listing-vendor-migration-checklist";
import qa from "./listing-change-qa-evidence";
import lifecycle from "./location-open-move-close-playbook";
import sot from "./listing-source-of-truth-workflow";

export const POST_BODY: Record<string, string> = {
  "what-is-business-listing-management": what,
  "business-listing-management-pricing-2026": pricing,
  "blm-before-you-adopt": software,
  "google-business-profile-vs-business-listings": gbp,
  "how-to-find-and-fix-duplicate-business-listings": duplicates,
  "business-listing-management-for-agencies": agencies,
  "listing-management-raci": raci,
  "listing-vendor-migration-checklist": migration,
  "listing-change-qa-evidence": qa,
  "location-open-move-close-playbook": lifecycle,
  "listing-source-of-truth-workflow": sot,
};

export { BLOG_POSTS };
