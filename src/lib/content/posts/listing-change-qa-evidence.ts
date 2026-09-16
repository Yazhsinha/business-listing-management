const markdown = `"We updated it" is not evidence. Listing changes need a QA standard that separates requested, submitted, and live—especially across Google, Apple, Bing, and directories that do not share a clock. This page defines an evidence pack for business listing management changes so audits and QBRs stop arguing from screenshots of the wrong publisher.

Start from the [BLM homepage](/) for the product loop. Pair this standard with [who owns listing management?](/blog/listing-management-raci) for roles and [how NAP accuracy shapes Google local results](/blog/local-search-listings-management-nap-accuracy-google) for why the fields matter.

For Google field rules, use the [hours help article](https://support.google.com/business/answer/15300403) and [category guidance](https://support.google.com/business/answer/7249669) when the change touches those attributes.

## What counts as evidence for a listing change?

A complete evidence pack for one change includes:

- **Request:** who asked, when, and the approved field values (ticket or signed master row).
- **Source-of-truth row:** the canonical record after approval.
- **Submission record:** publisher, method (console, API, vendor), timestamp, and operator.
- **Live check:** public URL or publisher UI capture after expected lag, with timestamp and location ID.
- **Diff result:** match, mismatch, or pending—never "done" without one of those three.

Screenshots without a URL, timestamp, and location ID are anecdotes. Spreadsheet cells that say "updated" without a live check are hopes.

## How should teams run QA on listing edits?

| Step | Question | Pass rule |
| --- | --- | --- |
| 1. Intake | Is the request in the master format? | Reject free-text NAP variants |
| 2. Conflict check | Does another open ticket touch the same field? | Serialize writes |
| 3. Submit | Was the edit sent to the right profile ID? | Log publisher ID |
| 4. Wait window | Has publisher-specific lag elapsed? | No early "live" claims |
| 5. Re-scan | Does the public profile match the master? | Exact facts, allow format differences |
| 6. Exception | If mismatch, is it queued with owner + due date? | No silent closes |
| 7. Close | Is evidence attached to the ticket? | Pack complete |

Allow formatting differences that publishers force (Ste vs Suite) when the facts match. Fail on different phones, wrong suite numbers, wrong pin, or stale holiday hours.

## What is a practical sample size for multi-location QA?

You cannot manually eyeball 250 profiles every night. Use layers:

- **Automated health** across the footprint for NAP, hours, coverage, and duplicates.
- **Priority sample** every cycle: new opens, recent moves, locations with open tickets, and a rotating random sample.
- **Full manual deep dive** when a rebrand, acquisition, or vendor migration is in flight.

The listing auditor inside \`/app\` is the signed-in surface for workspace audits—do not imply public live scans from marketing pages. External stakeholders get exports and ticket evidence, not a claim that the marketing site scanned their graph.

## How do you report QA without inventing lift?

Report counts and exceptions: locations checked, mismatches by field, duplicates open, publishers pending, median time from submit to verified live. Do not report invented accuracy percentages or ranking gains. Tie mismatches to owners using the [RACI](/blog/listing-management-raci).

When QA finds forks, hand off to the [duplicate suppression playbook](/blog/how-to-find-and-fix-duplicate-business-listings). When QA finds hours drift on Google only, remember [why GBP alone is not enough](/blog/google-business-profile-vs-business-listings).

## FAQ

### Is a vendor "success" webhook enough evidence?

No. Success means the vendor accepted the payload. Live means the public profile matches. Always re-scan.

### How long should we wait before failing a check?

Follow the publisher's typical lag and your SLA. Same-day for many Google edits; longer for some Apple and directory paths. Document the wait window in the ticket so QA does not fail early or close late.

### Who signs off the evidence pack?

The Responsible operator attaches it; the Accountable owner (or client AM for agencies) accepts exceptions. See the [agency playbook](/blog/business-listing-management-for-agencies) when multiple brands share a desk.

### Can we skip evidence for "small" hour changes?

No. Hour mismatches are among the most customer-visible failures. Small edits still need submit + live checks.
`;

export default markdown;
