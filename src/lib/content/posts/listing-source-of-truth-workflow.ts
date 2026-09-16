const markdown = `Listing drift often starts with a good intention: someone edits Google from a phone while the spreadsheet, the CRM, and the website location page still disagree. A source-of-truth workflow decides which system wins before publishers are touched. This page defines change control for business listing management so edits are requested, approved, published, and verified in order.

Pair this with the [BLM homepage](/) definition, the [RACI for listing ownership](/blog/listing-management-raci), and the [QA evidence standard](/blog/listing-change-qa-evidence). For vendor cutovers use the [vendor switch checklist](/blog/listing-vendor-migration-checklist).

Google's [representation guidelines](https://support.google.com/business/answer/3038177) describe what accurate looks like; this workflow describes how your team gets there without parallel writers.

## What should be the system of record?

Pick one system of record for canonical location fields: usually a listing workspace or a governed location database—not a slide deck, not a shared inbox, and not "whatever Google shows today."

The system of record stores:

- Internal location ID
- Approved name, address, phone
- Regular and special hours
- Categories and key attributes
- Website URL pattern
- Open / temp closed / closed status

Publisher consoles are distribution targets. They can inform detection (what is live) but they should not silently become the master when a store manager edits one field.

## How does a change-control ticket move?

| Stage | Owner | Output |
| --- | --- | --- |
| Request | Store, real estate, marketing, or agency | Structured field values + reason |
| Validate | Listing desk | Normalized NAP; conflict check |
| Approve | Accountable owner (per RACI) | Signed canonical row |
| Publish | Listing desk / platform | Submission log per publisher |
| Verify | Listing desk | Live evidence pack |
| Close or exception | Accountable + desk | Done, or dated exception |

No stage skipping. "Urgent" hours changes still get a short ticket; they do not get an undocumented Google-only edit that Apple never sees.

## How do you prevent double-writes?

- One writer per profile during a change window.
- Freeze rules during migrations and rebrands.
- Agency seats instead of personal logins.
- Tracking numbers stay in ads unless explicitly approved for listings.
- Website location pages update from the same approved row, not from memory.

If two tools can push the same publisher, disable one. Parallel automation is a common cause of flapping NAP.

## What belongs in the weekly change digest?

Send Accountable and Informed roles a digest with: changes requested, changes verified live, mismatches open, duplicates open, and lifecycle events in flight ([open / move / close](/blog/location-open-move-close-playbook)). Keep it boring and factual—no invented accuracy scores.

## FAQ

### Can Google Business Profile be the source of truth?

It can be a detection surface, but it is a poor master for multi-location brands because it is one publisher among many and easy to edit without governance. Prefer a workspace that diffs GBP against the canonical row.

### Who can break the glass in an emergency?

Name a break-glass role (usually the Accountable owner or desk lead) that may publish hours/status immediately, then file the ticket the same day. Emergency without documentation becomes permanent drift.

### How does this relate to NAP accuracy?

Change control is how you keep NAP accurate after the first cleanup. The cleanup playbook alone does not survive the next holiday hours pass. See [how NAP accuracy shapes Google local results](/blog/local-search-listings-management-nap-accuracy-google).

### Does software enforce change control automatically?

Only if you configure roles, approvals, and verification. Buying a logo wall without workflow leaves you with faster undocumented edits. Evaluate process fit in [how to evaluate listing software before you buy](/blog/best-business-listing-management-software-2026).
`;

export default markdown;
