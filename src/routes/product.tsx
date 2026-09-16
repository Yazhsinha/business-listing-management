import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { InnerPage } from "@/components/layout/inner-page";
import { NapToggle } from "@/components/home/nap-toggle";
import { ProductProof } from "@/components/home/product-proof";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo";
import { pageHead, breadcrumbJsonLd, softwareJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product")({
  head: () =>
    pageHead({
      title: "Business listing management software",
      description:
        "Business listing management software from BLM: NAP consistency, directory coverage, duplicate detection, hours and category monitoring for multi-location brands.",
      path: "/product",
    }),
  component: ProductPage,
});

const METRICS = [
  {
    l: "NAP",
    v: 92,
    note: "Canonical string holds on Google and Apple. Bing still carries the LLC suffix.",
    pubs: [
      { name: "Google", state: "Name matches", ok: true },
      { name: "Apple Maps", state: "Suite aligned", ok: true },
      { name: "Bing", state: "LLC suffix leftover", ok: false },
      { name: "MapQuest", state: "Legal name, not DBA", ok: false },
    ],
  },
  {
    l: "Coverage",
    v: 81,
    note: "MapQuest is missing the city. Apple has the suite line. Google does not.",
    pubs: [
      { name: "Google", state: "Live", ok: true },
      { name: "Apple Maps", state: "Missing city", ok: false },
      { name: "Bing", state: "Phone mismatch", ok: false },
      { name: "MapQuest", state: "City blank", ok: false },
    ],
  },
  {
    l: "Duplicates",
    v: 18,
    note: "Northline Cafe on MapQuest is the leftover risk, not a second storefront.",
    pubs: [
      { name: "Google", state: "Surviving pin", ok: true },
      { name: "Apple Maps", state: "Same place id", ok: true },
      { name: "Bing", state: "Near-match", ok: false },
      { name: "MapQuest", state: "Northline Cafe leftover", ok: false },
    ],
  },
  {
    l: "Hours",
    v: 74,
    note: "Sunday is closed on the desk. Google still publishes 9-5.",
    pubs: [
      { name: "Google", state: "Sunday 9-5", ok: false },
      { name: "Apple Maps", state: "Sunday closed", ok: true },
      { name: "Bing", state: "Sunday closed", ok: true },
      { name: "MapQuest", state: "Holiday hours stale", ok: false },
    ],
  },
] as const;

const FEATURES = [
  {
    title: "Canonical NAP",
    copy: "One approved name, address, and phone per location. BLM diffs every publisher against that string, suite lines, tracking numbers, DBA vs legal included.",
    body: "nap" as const,
  },
  {
    title: "Duplicate radar",
    copy: "Near-matches on phone, place id, and name surface as risk, not a quarterly spreadsheet. Agencies attach the same radar to every client brand.",
    body: "dupes" as const,
  },
  {
    title: "Hours & categories",
    copy: "Holiday hours that never left Google, and a primary category that is Restaurant on one publisher and Ramen Shop on another, both change the health score.",
    body: null,
  },
  {
    title: "Workspace, not a ticket queue",
    copy: "Marketing, franchise ops, and agencies share the same location list. Early access includes digest emails when a storefront drifts.",
    body: null,
  },
];

function ProductPage() {
  return (
    <SiteShell>
      <JsonLd data={softwareJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
        ])}
      />
      <InnerPage
        compact
        eyebrow="Product"
        title="The listing desk your maps already wish you had."
        lede="BLM is business listing management software for teams who cannot afford a different address on Google, Apple, Bing, and the directory network."
      />
      <section className="page-wrap py-10 sm:py-16">
        <div className="mb-10 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
          <p>
            Business listing management here means one governed NAP, duplicate radar, and publisher coverage
            you can inspect. Start on the{" "}
            <Link to="/" className="font-medium text-ink underline-offset-2 hover:underline">
              BLM homepage
            </Link>{" "}
            or read{" "}
            <Link
              to="/blog/$slug"
              params={{ slug: "what-is-business-listing-management" }}
              className="font-medium text-ink underline-offset-2 hover:underline"
            >
              what is business listing management
            </Link>{" "}
            for the category definition. The sections below explain what the product ships, who it is for,
            honest limits, and how onboarding usually starts.
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">What you get</h2>
          <p>
            BLM keeps a canonical name, address, and phone per location, then diffs Google, Apple, Bing,
            MapQuest, and the directory network against that string — suite lines, tracking numbers, and DBA
            versus legal name included. Duplicate radar flags near-matches on phone, place id, and name with
            a suggested surviving listing so reviews and photos are not orphaned. Hours and categories are
            scored as health: holiday windows that never left Google, or a primary category that says
            Restaurant on one publisher and Ramen Shop on another, both move the desk. Marketing, franchise
            ops, and agencies share the same location list; early access includes digest emails when a
            storefront drifts.
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Who it is for</h2>
          <p>
            Multi-location brands that cannot afford a different address on maps. Franchises that lock brand
            NAP while franchisees keep local hours. Agencies that need one workspace per client brand instead
            of screenshot theatre. Local SEO teams that want citations, duplicates, and category hygiene on
            the same score they show a CMO. If you only edit one Google Business Profile, you may not need
            this desk yet.
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Limits</h2>
          <p>
            BLM is listing management software — not a review response inbox, rank tracker, or paid-media
            suite. Compare pages explain fits and weaknesses against other tools; we do not publish
            independent “best listings software” listicles as if BLM were a neutral blog. Listed pricing is
            Starter at $49/month (one location) and Growth at $149/month (up to 25 locations), with Enterprise
            custom. Billing is not live yet. Start a{" "}
            <Link to="/trial" className="font-medium text-ink underline-offset-2 hover:underline">
              free trial
            </Link>{" "}
            or{" "}
            <Link to="/book" className="font-medium text-ink underline-offset-2 hover:underline">
              book a call
            </Link>
            .
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">How onboarding works</h2>
          <p>
            Create a workspace, import locations, approve canonical NAP, run the first publisher audit, then
            work duplicates and hours. The interactive desk below is a product sample of how scores and
            publisher rows move together. Full step-by-step lives on{" "}
            <Link to="/how-it-works" className="font-medium text-ink underline-offset-2 hover:underline">
              how it works
            </Link>
            ; plan ceilings live on{" "}
            <Link to="/pricing" className="font-medium text-ink underline-offset-2 hover:underline">
              pricing
            </Link>
            .
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            How the desk is organized
          </h2>
          <p>
            Each location carries four scores operators actually use: NAP consistency, publisher coverage,
            duplicate risk, and hours / category hygiene. Clicking a score filters the publisher list so you
            see Google, Apple, Bing, and MapQuest in the same frame — not four separate admin UIs. Feature
            cards below cover canonical NAP diffs, duplicate radar, hours and categories, and the shared
            workspace model. None of that is a ranked “best software” list; it is the product surface BLM
            ships for teams who already decided they need listing management.
          </p>
          <p>
            Early access is intentionally narrow: govern the footprint first, then expand coverage and
            automation. If you need a compare page for a specific incumbent, use the Compare hub. If you need
            definitions for citations or NAP, use the glossary and blog. This page stays on what the software
            does when you open it on a Monday.
          </p>
        </div>
        <ProductDesk />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {FEATURES.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <article className="industry-card relative h-full overflow-hidden rounded-2xl bg-cream p-6 pb-10 hairline">
                <LogoMark className="industry-seal size-8" />
                <h2 className="pr-10 font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.copy}</p>
                {item.body === "nap" ? (
                  <div className="mt-5 rounded-2xl bg-paper p-4 hairline">
                    <NapToggle />
                  </div>
                ) : null}
                {item.body === "dupes" ? (
                  <div className="mt-5 space-y-2">
                    {["Northline · Wicker Park · 92% match", "Northline Coffee LLC · Google · 81%", "Northline Cafe · MapQuest"].map((r) => (
                      <p key={r} className="rounded-xl bg-paper px-3 py-2 text-sm hairline">
                        {r}
                      </p>
                    ))}
                  </div>
                ) : null}
                <div className="industry-tiles" aria-hidden="true">
                  <span className="flex-1 bg-[var(--tile-a)]" />
                  <span className="flex-1 bg-[var(--tile-b)]" />
                  <span className="flex-1 bg-[var(--tile-c)]" />
                  <span className="flex-1 bg-[var(--tile-d)]" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-ink-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">What the product actually does</h2>
          <p>
            Business listing management software is not a rankings dashboard. It is the system that keeps every public
            location record aligned with the address, phone, hours, and categories your customers should trust. BLM
            centers that job: canonical NAP per location, publisher coverage checks, duplicate radar, and hours or
            category drift that changes a health score before a customer hits the wrong pin.
          </p>
          <p>
            The desk view above is the operating surface. Scores are not vanity metrics — they point at a concrete
            publisher state (LLC suffix leftover on Bing, Sunday hours still open on Google, a near-match cafe name on
            Yelp). Marketing, franchise ops, and agencies share one location list so the person who can fix a field is
            the person who sees the alert. Digest email is for drift after the first cleanup, not a replacement for
            human approval on NAP.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink">Who should buy it — and who should not</h2>
          <p>
            Buy BLM when the hard part is keeping dozens or hundreds of storefronts consistent across Google, Apple,
            Bing, and directories with a small ops team. Skip it if you need a full enterprise knowledge graph, custom
            publisher contracts in dozens of countries, or a managed agency to file every correction for you. Compare
            pages on this site state those tradeoffs plainly; independent software shortlists belong on
            locallistingsmanagement.co, not here.
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink">Onboarding without theater</h2>
          <p>
            Create a workspace, import locations, and review the first publisher diffs. Assign who can approve NAP
            changes. Turn on digests once the backlog is owned. Starter and Growth rates are listed on pricing when
            billing goes live; Enterprise is a conversation for larger footprints and SSO. We do not invent win-rate
            charts or claim BLM replaces every local SEO tool in your stack.
          </p>
        </div>
        <div className="cta-band mt-12 rounded-3xl border border-line px-6 py-10 sm:px-10">
          <h2 className="font-display text-3xl font-semibold">See it on your own locations</h2>
          <p className="mt-2 max-w-xl text-ink-soft">Start a free trial. Book a call if you already run a national footprint.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/trial">Start free trial</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/book">Book a call</Link>
            </Button>
          </div>
        </div>
      </section>
      <ProductProof explore={false} />
    </SiteShell>
  );
}

function ProductDesk() {
  const [metric, setMetric] = useState(0);
  const [pub, setPub] = useState(0);
  const active = METRICS[metric];
  const selectedPub = active.pubs[pub] ?? active.pubs[0];

  return (
    <div className="proof-stage overflow-hidden rounded-3xl border border-line p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Northline desk</p>
          <h2 className="mt-1 font-display text-2xl font-semibold">Wicker Park · 1420 N Milwaukee Ave</h2>
        </div>
        <p className="text-sm text-ink-soft">Click a score. Publishers follow.</p>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="grid grid-cols-2 gap-2">
          {METRICS.map((item, i) => (
            <button
              key={item.l}
              type="button"
              className={cn("desk-metric rounded-2xl bg-cream px-3 py-3 text-left hairline", metric === i && "is-on")}
              onClick={() => {
                setMetric(i);
                setPub(0);
              }}
            >
              <p className="text-xs text-muted">{item.l}</p>
              <p className="font-display text-3xl font-semibold tabular-nums">{item.v}</p>
              <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-sand">
                <span
                  className="score-fill block h-full rounded-full bg-brand"
                  style={{ width: `${item.v}%` }}
                />
              </span>
            </button>
          ))}
        </div>
        <div className="rounded-2xl bg-cream p-4 hairline">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Publisher coverage</p>
          <ul className="mt-3 space-y-2 text-sm">
            {active.pubs.map((row, i) => (
              <li key={row.name}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl bg-paper px-3 py-2 text-left hairline transition-[box-shadow,transform] duration-200",
                    pub === i && "shadow-[0_0_0_1px_color-mix(in_oklab,var(--brand)_45%,var(--line))]",
                  )}
                  onClick={() => setPub(i)}
                >
                  <span>{row.name}</span>
                  <span className={row.ok ? "text-brand" : "text-coral"}>{row.state}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {active.note} {selectedPub.name}: {selectedPub.state}.
          </p>
        </div>
      </div>
    </div>
  );
}
