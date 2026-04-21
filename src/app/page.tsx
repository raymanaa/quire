import Link from "next/link";
import { ContractViewer } from "@/components/contract-viewer";
import { HeroRedline } from "@/components/hero-redline";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { CONTRACTS } from "@/lib/contracts";

export default function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      <section className="mx-auto w-full max-w-[1240px] px-6 pt-14 md:px-8 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-14">
          <div>
            <div className="label mb-4">CONTRACT REVIEW · BETA</div>
            <h1 className="display text-[60px] leading-[0.98] tracking-[-0.018em] text-ink md:text-[102px]">
              Three clauses.
              <br />
              <span className="display-italic text-ink-2">Three hours.</span>
              <br />
              <span className="display">Three hundred dollars.</span>
            </h1>
            <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.75] text-ink-2">
              Eighty percent of a founder&apos;s contract review is the same
              three clauses. Quire reads the contract, compares against a
              playbook, flags the material deviations in plain English, and
              drafts the counter. Skip the &ldquo;quick look&rdquo; email
              to your outside counsel.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/app/new"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
              >
                <span>Upload a contract</span>
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/app/c-msa-acme"
                className="inline-flex items-center gap-2 border border-line bg-card px-5 py-3 text-[14px] text-ink-2 rounded-[3px] hover:border-line-2 hover:text-ink transition-colors"
              >
                Read a sample MSA
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3 text-[11.5px] text-ink-3">
              <Stat value="3" unit="clauses" label="Material ones, every time" />
              <Stat value="47s" unit="first flag" label="From upload to first redline" />
              <Stat value="1/20" unit="the fee" label="vs. billable-hour review" />
            </div>
          </div>

          <figure className="relative">
            <div className="relative border border-line bg-card rounded-[3px] px-5 py-5 max-w-[460px] ml-auto">
              <div className="flex items-baseline justify-between">
                <span className="label" style={{ color: "var(--redline)" }}>
                  3 MATERIAL FLAGS
                </span>
                <span className="mono text-[10.5px] text-ink-3">ACME · MSA</span>
              </div>
              <div className="rule my-3" />
              <p className="display-italic text-[18px] leading-[1.45] text-ink md:text-[20px]">
                &ldquo;The playbook diff was the fastest $6K I&apos;ve ever
                saved. We counter-signed Acme the same day.&rdquo;
              </p>
              <div className="rule my-3" />
              <div className="flex items-baseline justify-between text-[11px] text-ink-3">
                <span className="mono uppercase tracking-[0.1em] text-ink">
                  J. CHEN
                </span>
                <span>Founder &amp; CEO · Velocity Labs</span>
              </div>
            </div>
          </figure>
        </div>

        <div className="mt-20">
          <HeroRedline />
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 md:px-8 pt-24 pb-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <div className="label">The method</div>
            <h2 className="display mt-3 text-[36px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[52px]">
              Playbook-first,{" "}
              <span className="display-italic">not LLM-first.</span>
            </h2>
          </div>
          <div className="text-[15.5px] leading-[1.8] text-ink-2 max-w-[60ch]">
            Quire doesn&apos;t guess what a bad clause looks like. It runs
            every contract against a named playbook — yours, or the
            founder-friendly default — and flags exactly where the
            incoming paper deviates. The model writes the summary and the
            counter. The playbook decides what counts as material. You can
            open the playbook, redline it, and know your next contract
            will be checked against exactly that text.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 md:px-8 pt-14 pb-10">
        <div className="mb-5 flex items-baseline justify-between">
          <div className="label">Specimen · Contract viewer</div>
          <div className="label !tracking-[0.14em]">
            RENDERED FROM <span className="mono text-ink-2">/app</span> · NOT A SCREENSHOT
          </div>
        </div>
        <ContractViewer contracts={CONTRACTS} />
        <p className="mt-5 text-[12.5px] leading-[1.65] text-ink-3 max-w-[62ch]">
          Same component as the in-app reader — tab between three contracts,
          click a clause dot or a flagged phrase to open its drawer.
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 md:px-8 pt-20 pb-4">
        <div className="max-w-[900px]">
          <div className="label">Quire is not a CLM.</div>
          <h2 className="display mt-3 text-[36px] leading-[1.08] tracking-[-0.018em] text-ink md:text-[52px]">
            For the founder with the <span className="display-italic">PDF open.</span>
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.75] text-ink-2">
            Ironclad and Icertis are enterprise contract lifecycle
            management platforms. They require procurement, legal, and six
            weeks of rollout. Quire is for the founder with a PDF attached
            to their next email — the MSA is in your hand, you need to
            sign something back by Friday.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Pillar num="01" title="No CLM rollout." body="Paste the PDF. Get the flags. Ship the counter. No admin, no legal IT ticket." />
            <Pillar num="02" title="Your playbook, not ours." body="Start from the founder-friendly default, then redline it. Your playbook is your contract strategy." />
            <Pillar num="03" title="Not legal advice." body="Quire is a review tool. For the remaining 20%, call your outside counsel. For the first 80%, save them the hour." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 md:px-8 pt-24 pb-4">
        <div className="mx-auto max-w-[740px] text-center">
          <div className="label">Friday · 4:30 PM</div>
          <h2 className="display mt-4 text-[44px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[64px]">
            You have the PDF.{" "}
            <span className="display-italic">You have Quire.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-ink-2">
            Upload the contract. Read the three flags. Send the counter.
          </p>
          <div className="mt-8 inline-flex items-center gap-3">
            <Link
              href="/app/new"
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
            >
              <span>Upload a contract</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Stat({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="display text-[32px] leading-none tabular-nums text-ink">
        {value}
        <span className="mono text-[11.5px] text-ink-3 ml-1 font-normal">{unit}</span>
      </div>
      <div className="mt-1 text-[11.5px] text-ink-3 max-w-[24ch] italic">{label}</div>
    </div>
  );
}

function Pillar({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div>
      <div className="mono text-[10.5px] text-ink-3 tabular-nums tracking-[0.16em]">{num}</div>
      <h3 className="display mt-2 text-[22px] leading-[1.2] text-ink md:text-[24px]">
        {title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-2 max-w-[36ch]">{body}</p>
    </div>
  );
}
