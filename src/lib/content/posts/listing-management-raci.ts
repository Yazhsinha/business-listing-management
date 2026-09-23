const markdown = `Brand marketing often "owns listings" on a slide while a franchisee edits hours from a phone and an agency holds the Google login. That gap is why NAP drifts. This page assigns a practical RACI for business listing management so name, address, phone, hours, categories, and location status have a named accountable owner before anyone opens a publisher console.

Return to the [BLM homepage](/) for the product definition of business listing management, then use this RACI when you brief ops, agencies, or franchise partners. For day-to-day sync mechanics see [online listing sync for multi-location brands](/blog/online-business-listing-management). For the agency operating model see the [agency playbook for multi-client listing ops](/blog/business-listing-management-for-agencies).

Google's [guidelines for representing your business](https://support.google.com/business/answer/3038177) still apply regardless of who clicks Save. Ownership does not replace accuracy.

## Who should be accountable for listing data?

**Accountable** means one role that can say yes or no to the canonical NAP and category rules. For most US multi-location brands that is brand or corporate marketing (sometimes a local SEO lead). They own the approved name string, address format, public phone policy, primary category map, and website URL pattern.

**Responsible** roles execute the work: a listing desk, agency, or ops analyst who claims profiles, submits edits, and re-checks what published. Store managers are responsible for hours and temporary closures only when the playbook says so—not for inventing a DBA on Google.

**Consulted** roles review exceptions: legal for regulated names, IT for tracking-number policy, franchise ops for local exceptions. **Informed** roles get the weekly health digest: CMOs, regional managers, and client stakeholders.

If two people can silently overwrite the same field, you do not have an owner. You have a queue of conflicts.

## What does a listing RACI look like in practice?

Use this table as a starting point, then adjust for franchise agreements and agency scopes of work.

| Decision or field | Accountable | Responsible | Consulted | Informed |
| --- | --- | --- | --- | --- |
| Legal / brand name string | Brand marketing | Listing desk | Legal | Agency AM |
| Address + suite format | Brand / real estate | Listing desk | Store ops | Franchisee |
| Public phone (no ad tracking) | Brand marketing | Listing desk | Paid media | Call center |
| Regular + holiday hours | Ops / franchise | Store or desk | Regional manager | Support |
| Primary category | Brand SEO | Listing desk | Local SEO | Agency |
| Temporary / permanent close | Ops leadership | Listing desk | Real estate | All channel owners |
| Duplicate survivor choice | Brand SEO | Listing desk | Agency | Franchisee |
| Publisher account access | Brand IT / marketing | Listing desk | Security | Agency |

The pattern is intentional: brand owns the strings that identify the place; local teams own time-bound facts; the desk owns execution and evidence.

## How do agencies and franchisees fit without forking NAP?

Agencies execute against an SLA; they should not invent the source of truth. Put the canonical record in a shared workspace, give the agency Responsible seats, and keep Accountable with the brand. When the retainer ends, access must be returnable—personal Google logins are a governance failure.

Franchisees usually get Responsible rights on hours and temporary closures, Consulted rights on address exceptions, and no rights to create new Google profiles. Recurring amateur listings are an operating manual problem, not a courtesy. Detect forks with a duplicate SLA ([how to find and suppress duplicate listings](/blog/how-to-find-and-fix-duplicate-business-listings)).

Service-area businesses still need the same RACI for name, phone, and service area even when the street address is hidden on Google.

## What breaks when ownership is unclear?

Unclear ownership shows up as familiar tickets: Apple still shows last quarter's hours, Bing has a tracking number, Google has a rename the website never got, and two pins share reviews. Internally it looks like "SEO is down" when the real issue is competing editors.

Fix the org chart before you buy more publisher seats. Software amplifies whoever already has write access. Evaluate tools on whether they support roles and evidence ([what to check before adopting BLM](/blog/blm-before-you-adopt)), not on logo count.

## FAQ

### Is the store manager the listing owner?

Usually no. Store managers are excellent Responsible owners for hours and closures. They are a weak Accountable owner for brand name, category, and phone policy because each store will invent a variant.

### Can legal and marketing both be Accountable?

No. Consult legal; keep a single Accountable owner. Dual accountability is how rename projects stall while publishers diverge.

### Who owns duplicates?

Brand SEO (or the listing Accountable owner) decides the survivor. The desk executes merge/suppress and protects reviews. Franchisees and agencies escalate; they do not pick survivors unilaterally.

### Does BLM replace a RACI?

No. BLM is the workspace and health score. The RACI is the operating agreement. Start from the [homepage](/) when you want the product loop, then keep this page as the ownership contract.
`;

export default markdown;
