import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { InnerPage } from "@/components/layout/inner-page";
import { Workflow } from "@/components/home/workflow";
import { Button } from "@/components/ui/button";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead({
      title: "How business listing management works",
      description:
        "How business listing management works on BLM: unify NAP, audit publishers, close duplicates, and govern coverage across Google, Apple, Bing, and the directory network.",
      path: "/how-it-works",
    }),
  component: HowPage,
});

function HowPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />
      <InnerPage
        compact
        eyebrow="Workflow"
        title="From messy listings to a governed presence."
        lede="Business listing management on BLM is seven steps from messy citations to a governed presence. Humans stay in control of NAP and duplicates. Automation handles fingerprinting, coverage, and the weekly digest."
      />
      <div className="page-wrap pt-8">
        <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
          New to the category? Read{" "}
          <Link
            to="/blog/$slug"
            params={{ slug: "what-is-business-listing-management" }}
            className="font-medium text-ink underline-offset-2 hover:underline"
          >
            what is business listing management
          </Link>{" "}
          or start on the{" "}
          <Link to="/" className="font-medium text-ink underline-offset-2 hover:underline">
            BLM homepage
          </Link>
          .
        </p>
      </div>
      <Workflow showHeader={false} />
      <section className="page-wrap pb-12">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-ink-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">What you get in practice</h2>
          <p>
            BLM is built for multi-location operators who already know the pain: a Google pin that still shows last
            year&apos;s hours, an Apple Maps suite line that never matched the lease, a Yelp leftover after a rebrand,
            and a franchisee who changed the phone number without telling headquarters. The workflow on this page is the
            operating model we expect you to run every week, not a one-time cleanup project.
          </p>
          <p>
            You start by importing the locations you actually operate — CSV, spreadsheet, or a short list typed into the
            workspace. BLM treats one canonical name, address, and phone as the source of truth for each storefront.
            From there the desk fingerprints publishers, surfaces coverage gaps, and queues duplicate and hours risks for
            a human decision. Automation does the scanning and the digest. Your team keeps ownership of NAP approvals and
            duplicate merges so a wrong auto-push never becomes the new source of truth.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink">Who it is for</h2>
          <p>
            Franchise ops, multi-unit retail, agencies managing client portfolios, and regional brands with enough pins
            that spreadsheet diffs stop scaling. If you only have one or two locations and can edit Google Business
            Profile by hand every month, you may not need software yet. If you already bought an enterprise knowledge
            graph and need global publisher orchestration beyond listings, BLM is intentionally narrower than that class
            of platform.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink">Limits and onboarding</h2>
          <p>
            Early access focuses on Google, Apple, Bing, and the core directory network. Publisher coverage expands as
            integrations mature; we do not claim every niche directory on day one. Billing is not live yet — create a
            workspace without a card, then book a walkthrough if you already run a national set of pins. Onboarding is
            workspace-first: import locations, review the first health scores, assign who approves NAP changes, and turn
            on the weekly digest before you chase every amber status at once.
          </p>
        </div>
      </section>
      <div className="page-wrap pb-20">
        <div className="cta-band rounded-3xl border border-line px-6 py-10 sm:px-10">
          <h2 className="font-display text-3xl font-semibold">Run it on your own footprint</h2>
          <p className="mt-2 max-w-xl text-ink-soft">Start a free trial, or book a call if you already run a national set of pins.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/trial">Start free trial</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/book">Book a call</Link>
            </Button>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
