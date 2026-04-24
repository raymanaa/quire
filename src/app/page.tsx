/**
 * Quire landing — formal professional document-centric
 * (grammar inspired by Stripe Atlas / Ironclad-style landings).
 *
 * Centered formal serif H1. Below, a side-by-side "before / after" of a
 * real contract clause with a redline applied. Green trust accent.
 * Bordered document panels throughout. Small clause-number typography.
 */
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { CONTRACTS, severityConfig } from "@/lib/contracts";

export default function Landing() {
  const contract = CONTRACTS[0];
  const flag = contract.flags.find((f) => f.id === "f-indem")!;
  const sev = severityConfig(flag.severity);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <MarketingNav />

      {/* Centered formal hero */}
      <section className="mx-auto max-w-[980px] px-6 md:px-10 pt-24 pb-12 md:pt-32 text-center">
        <div className="smallcaps text-[11px] tracking-[0.28em] text-ink-3">
          Contract review — for founders
        </div>

        <h1 className="display mt-6 text-[56px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[88px] max-w-[18ch] mx-auto">
          Contracts that read like{" "}
          <span className="display-italic" style={{ color: "var(--accent, #2e5c3a)" }}>
            you wrote them.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[56ch] text-[16px] leading-[1.6] text-ink-2">
          Paste an MSA. Quire parses every clause, compares against your playbook, and drafts a counter in the paper&apos;s own numbering.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/app/new"
            className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
          >
            Upload a contract
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/playbook"
            className="text-[14px] text-ink-2 hover:text-ink transition-colors"
          >
            Read the playbook →
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-baseline justify-center gap-x-10 gap-y-2 text-[11px] smallcaps tracking-[0.18em] text-ink-3">
          <span>MSA</span>
          <span>SOW</span>
          <span>Order Forms</span>
          <span>NDAs</span>
          <span>Employment</span>
        </div>
      </section>

      {/* Side-by-side document panels: original vs. redlined */}
      <section className="mx-auto max-w-[1120px] px-6 md:px-10 py-16">
        <div className="flex items-baseline justify-between border-b border-ink pb-3 mb-6">
          <div className="smallcaps text-[11px] tracking-[0.2em] text-ink-3">
            Specimen · §{contract.sections[2]?.number ?? "7"} · indemnification
          </div>
          <div className="mono text-[10.5px] text-ink-3">{contract.id.toUpperCase()}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The paper, as drafted */}
          <div className="border border-line bg-card rounded-[3px]">
            <div className="border-b border-line px-5 py-3 flex items-baseline justify-between">
              <span className="smallcaps text-[10.5px] tracking-[0.2em] text-ink-3">
                Draft — as received
              </span>
              <span
                className="mono text-[9.5px] font-semibold tracking-[0.16em]"
                style={{ color: sev.ink }}
              >
                {sev.label} FLAG
              </span>
            </div>
            <div className="p-6 text-[13.5px] leading-[1.75] text-ink doc">
              Supplier shall defend, indemnify, and hold harmless Customer
              and its Affiliates from any and all third-party claims arising
              out of or relating to the Services,{" "}
              <span
                className="underline decoration-2 underline-offset-[3px]"
                style={{ color: sev.ink, textDecorationColor: sev.ink }}
              >
                {flag.text ?? "without limitation as to amount or scope"}
              </span>
              , provided that Customer promptly notifies Supplier of any such
              claim and cooperates in the defense thereof.
            </div>
          </div>

          {/* The counter */}
          <div
            className="border rounded-[3px]"
            style={{ borderColor: "var(--accent, #2e5c3a)" }}
          >
            <div
              className="border-b px-5 py-3 flex items-baseline justify-between"
              style={{
                borderColor: "var(--accent, #2e5c3a)",
                background: "var(--accent-soft, #e1eed4)",
              }}
            >
              <span
                className="smallcaps text-[10.5px] tracking-[0.2em]"
                style={{ color: "var(--accent-2, #1d3f25)" }}
              >
                Counter — drafted by Quire
              </span>
              <span
                className="mono text-[9.5px] font-semibold tracking-[0.16em]"
                style={{ color: "var(--accent, #2e5c3a)" }}
              >
                PLAYBOOK · ART. II
              </span>
            </div>
            <div
              className="p-6 text-[13.5px] leading-[1.75] doc bg-card"
              style={{ color: "var(--ink)" }}
            >
              {flag.redline}
            </div>
          </div>
        </div>

        {/* Why block */}
        <div
          className="mt-8 rounded-[3px] border px-6 py-5"
          style={{ borderColor: "var(--line)", background: "var(--paper-2, #f2ecdf)" }}
        >
          <div className="smallcaps text-[11px] tracking-[0.18em] text-ink-3">
            Why the counter
          </div>
          <p className="mt-2 text-[14px] leading-[1.7] text-ink-2 max-w-[62ch]">
            {flag.summary}
          </p>
        </div>
      </section>

      {/* Three trust notes, minimal */}
      <section className="mx-auto max-w-[1120px] px-6 md:px-10 py-16 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <TrustNote
            label="Playbook-first"
            body="Every flag cites a specific playbook provision. Your playbook, once forked, decides what&apos;s material next time."
          />
          <TrustNote
            label="Counters, not summaries"
            body="Each material flag carries drafted counter-language in the paper&apos;s own numbering — ready to paste."
          />
          <TrustNote
            label="Not a CLM"
            body="Paste the PDF. Get the redline. Send the counter. No procurement review, no installer."
          />
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-[980px] px-6 md:px-10 py-16 text-center">
        <div className="display text-[32px] leading-[1.15] tracking-[-0.012em] text-ink md:text-[44px] max-w-[20ch] mx-auto">
          The PDF arrived.{" "}
          <span className="display-italic" style={{ color: "var(--accent, #2e5c3a)" }}>
            The counter is waiting.
          </span>
        </div>
        <Link
          href="/app/new"
          className="mt-8 inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
        >
          Upload a contract
          <span aria-hidden>→</span>
        </Link>
      </section>

      <MarketingFooter />
    </div>
  );
}

function TrustNote({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div
        className="smallcaps text-[11px] tracking-[0.2em]"
        style={{ color: "var(--accent, #2e5c3a)" }}
      >
        {label}
      </div>
      <p className="mt-3 text-[14px] leading-[1.65] text-ink-2 max-w-[32ch] mx-auto">{body}</p>
    </div>
  );
}
