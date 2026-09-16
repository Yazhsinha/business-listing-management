import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { InnerPage } from "@/components/layout/inner-page";
import { Workflow } from "@/components/home/workflow";
import { Button } from "@/components/ui/button";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { COVERAGE } from "@/lib/site";

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
      >
        <div className="prose-blm max-w-3xl space-y-5 text-[15px] leading-relaxed text-ink-soft">
          <p>
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
            . This page is the product workflow: what you get after you sign in, who it is for, where the
            ceilings are, and how onboarding usually runs.
          </p>

          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">What you get</h2>
          <p>
            BLM is a workspace for multi-location listing operations. You load storefronts, approve one
            canonical name / address / phone (NAP) per location, then score how {COVERAGE} match that
            string. The desk surfaces duplicates, stale hours, category drift, and missing coverage so
            marketing, franchise ops, and agencies share one queue instead of five publisher logins and a
            spreadsheet.
          </p>
          <p>
            Humans keep the keys that matter: which NAP is canonical, which near-match is the surviving
            listing, and when a temporary closure or holiday window should publish. Automation fingerprints
            publishers, refreshes coverage, and sends a weekly health digest so drift does not wait for the
            next quarterly cleanup.
          </p>

          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Who it is for</h2>
          <p>
            BLM fits multi-location brands, franchises, agencies, and local SEO teams that already know
            wrong NAP and ghost pins cost discovery. If you run one storefront and only touch Google
            Business Profile, a free publisher login may be enough. If you run five to thousands of
            locations — or client brands — and need Apple, Bing, MapQuest, and the directory network in the
            same conversation as Google, this workflow is built for that desk.
          </p>

          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Limits (honest)</h2>
          <p>
            BLM is business listing management software, not a full local SEO suite, review inbox, or paid
            media platform. Early access focuses on NAP consistency, coverage, duplicates, hours, and
            categories. Billing is not live yet: listed rates are Starter at $49/month for one location and
            Growth at $149/month for up to 25 locations when charging begins. Enterprise is custom. Start a{" "}
            <Link to="/trial" className="font-medium text-ink underline-offset-2 hover:underline">
              free trial
            </Link>{" "}
            for Starter product access, or{" "}
            <Link to="/book" className="font-medium text-ink underline-offset-2 hover:underline">
              book a call
            </Link>{" "}
            to scope Growth or a national footprint. See{" "}
            <Link to="/pricing" className="font-medium text-ink underline-offset-2 hover:underline">
              pricing
            </Link>{" "}
            for plan ceilings.
          </p>

          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">How onboarding works</h2>
          <p>
            Typical path: create a workspace, import locations from a sheet or add them one by one, approve
            canonical NAP, run the first publisher audit, then work the duplicate and hours queues. Agencies
            usually attach one workspace per client brand. Franchises lock brand NAP while franchisees keep
            local hours and phone truth. The scrollable steps below mirror that path — human control where
            judgment matters, automation everywhere else.
          </p>
          <p>
            Prefer a walkthrough before you import?{" "}
            <Link to="/book" className="font-medium text-ink underline-offset-2 hover:underline">
              Book a call
            </Link>
            . Want the feature surface first? Open{" "}
            <Link to="/product" className="font-medium text-ink underline-offset-2 hover:underline">
              product
            </Link>
            .
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            What “governed” means day to day
          </h2>
          <p>
            After the first audit, the desk is not a one-time cleanup report. When hours change, a suite line
            is corrected, or a franchisee updates a phone, you update the canonical record once. BLM shows
            which publishers still carry the old string, which pins look like duplicates, and which
            directories never received the location. That is the difference between business listing
            management and a quarterly spreadsheet export: the source of truth stays in the workspace, and
            publisher drift stays visible until someone closes it.
          </p>
          <p>
            Teams usually split work like this: marketing owns brand NAP and categories, ops owns hours and
            temporary closures, agencies own client workspaces and the weekly digest. The seven steps below
            are the same sequence every workspace follows — load locations, fingerprint NAP, audit
            directories, unify the source of truth, close duplicates, track coverage and risk, then keep the
            presence governed with alerts. Scroll the steps; the mock on the right follows the active beat.
          </p>
        </div>
      </InnerPage>
      <Workflow showHeader={false} />
      <div className="page-wrap pb-20">
        <div className="cta-band rounded-3xl border border-line px-6 py-10 sm:px-10">
          <h2 className="font-display text-3xl font-semibold">Run it on your own footprint</h2>
          <p className="mt-2 max-w-xl text-ink-soft">
            Start a free trial, or book a call if you already run a national set of pins.
          </p>
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
