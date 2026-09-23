const markdown = `Switching listing vendors is a data and access project, not a logo swap. This checklist covers how to leave one business listing management platform (or a spreadsheet) and land on another without losing claims, review history, or the canonical NAP.

Use the [BLM homepage](/) for the product definition of business listing management, [what to check before adopting BLM](/blog/blm-before-you-adopt) for the buying scorecard, and [BLM pricing: Starter $49 and Growth $149](/blog/business-listing-management-pricing-2026) for listed rates. This page is only the migration sequence.

Google's [Business Profile guidelines](https://support.google.com/business/answer/3038177) still govern what you publish during the cutover.

## What should you export before you cancel the old vendor?

Export before you send the cancellation email. At minimum:

- Location master: internal ID, name, address, phone, hours, categories, website, status (open / temp closed / closed).
- Publisher coverage map: which locations exist on Google, Apple, Bing, and priority directories.
- Claim / access inventory: which accounts hold ownership, managers, and agency seats.
- Open tickets: pending verifications, rejected edits, duplicate queues.
- Evidence pack: last successful publish dates and any screenshots the old vendor treats as proof.

If the vendor cannot export publisher IDs or claim state, write them down from the live consoles. Do not trust a CSV of NAP alone.

## What is the vendor-switch sequence?

| Phase | Goal | Exit criteria |
| --- | --- | --- |
| 1. Freeze | Stop non-critical edits on the old tool | Change window agreed; owners named |
| 2. Canonicalize | One NAP + hours + category source | Brand signs off the master file |
| 3. Inventory | Live vs master diffs on priority publishers | Gap list and duplicate list exist |
| 4. Connect | New workspace linked; access transferred | Desk can edit without personal logins |
| 5. Push | Submit canonical record on priority publishers | Submitted ≠ live; queue tracked |
| 6. Verify | Re-scan public results | Mismatches ticketed with evidence |
| 7. Parallel run | Old tool read-only for one cycle | No silent double-writes |
| 8. Cutover | Cancel or downgrade old vendor | Access revoked; playbooks updated |

Parallel run matters. Two tools writing the same Google profile will fight. One writer at a time after freeze.

## How do you protect reviews and claims during migration?

Do not delete listings to "start clean." Deletion risk is why [duplicate suppression](/blog/how-to-find-and-fix-duplicate-business-listings) prefers merge/suppress over delete. Keep the surviving Google Business Profile, Apple place, and Bing place. Transfer managers and owners deliberately; document every seat.

If the old vendor managed API connections (for example directory partners), disconnect only after the new workspace can publish—or after you confirm those publishers will be handled manually. Orphaned aggregator feeds are a common source of suite-line resurrection weeks later.

## What are the go-live acceptance checks?

A location is migrated when:

- Canonical NAP matches the live Google, Apple, and Bing profiles (formatting rules aside).
- Hours and special hours match the signed master, including holidays in flight.
- No unexpected duplicate pins remain on priority publishers.
- Account access sits on brand or agency seats you control.
- The new workspace shows health and open exceptions, not just "submitted."

Until those checks pass, keep the old tool in read-only mode. For open/move/close events that coincide with a vendor switch, use the [open, move, and close location listing playbook](/blog/location-open-move-close-playbook) instead of improvising.

## FAQ

### Should we rebuild every listing in the new tool?

No. Rebuild means new place IDs and review risk. Connect and correct surviving profiles whenever you can claim them.

### How long should the parallel run last?

Long enough to complete one full re-scan cycle after the first bulk push—often one to two weeks for mid-size US footprints, longer if Apple or directory partners lag. Do not cancel on the day of first submit.

### What if the old vendor owns the Google location group?

Transfer ownership before cancellation. If transfer is blocked, escalate with the brand's Google account admin. Tool cancellation does not automatically return GBP managers.

### Does a migration improve rankings by itself?

No. Migration restores operational control and accuracy. Ranking eligibility still depends on real-world consistency and competition. Treat accuracy as a prerequisite, not a promised lift.
`;

export default markdown;
