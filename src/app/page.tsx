import Link from "next/link";
import { ContractViewer } from "@/components/contract-viewer";
import { HeroRedline } from "@/components/hero-redline";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { CONTRACTS } from "@/lib/contracts";

/**
 * Quire landing — the landing itself rendered as a contract document.
 *
 * No marketing sections. The page is a signed agreement: title block,
 * recitals (WHEREAS), Articles I-IV with numbered §§ and indented
 * sub-clauses, Exhibit A (the live ContractViewer), and a signature
 * block at the bottom. CTAs are execution lines ("Sign & open"), not
 * buttons.
 */
export default function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      {/* The "contract page" itself — centered, bordered, indented */}
      <section className="mx-auto w-full max-w-[920px] px-6 md:px-10 pt-10 pb-6">
        <article className="border border-ink bg-card rounded-[2px] px-10 py-12 md:px-16 md:py-14 shadow-[0_1px_0_rgba(26,26,26,0.04)]">
          {/* Title block */}
          <header className="text-center border-b border-ink pb-6 mb-8">
            <div className="smallcaps text-[11px] tracking-[0.26em] text-ink-3">
              Execution Copy · Rev. 0.9
            </div>
            <h1 className="display mt-3 text-[42px] leading-[1.08] tracking-[-0.01em] text-ink md:text-[60px]">
              Master Agreement for the Review of Commercial Contracts
            </h1>
            <div className="mt-4 display-italic text-[18px] text-ink-2">
              by and between Quire, Inc. and the Undersigned Founder
            </div>
            <div className="mt-5 flex items-baseline justify-center gap-4 text-[11px] text-ink-3">
              <span className="smallcaps tracking-[0.18em]">Dated</span>
              <span className="mono">APRIL · XXI · MMXXVI</span>
              <span className="smallcaps tracking-[0.18em]">·</span>
              <span className="mono">Wilmington · DE</span>
            </div>
          </header>

          {/* Recitals */}
          <div className="text-[13.5px] leading-[1.85] text-ink max-w-[64ch] mx-auto doc">
            <div className="mb-2 smallcaps text-[10.5px] tracking-[0.22em] text-ink-3">
              Recitals
            </div>
            <p className="text-justify indent-8" style={{ hyphens: "auto" }}>
              <strong className="not-italic">Whereas</strong>, the Founder wishes to execute a
              commercial contract ({"“"}the MSA{"”"}) without engaging outside
              counsel on clauses of known market shape;
            </p>
            <p className="text-justify indent-8 mt-3" style={{ hyphens: "auto" }}>
              <strong className="not-italic">Whereas</strong>, Quire has developed a playbook of
              material deviations and standard redlines covering approximately
              eighty percent (80%) of founder-facing agreements;
            </p>
            <p className="text-justify indent-8 mt-3" style={{ hyphens: "auto" }}>
              <strong className="not-italic">Whereas</strong>, the Parties intend that the Founder
              retain ultimate authority over all counter-positions and that
              Quire function solely as a drafting and advisory instrument;
            </p>
            <p className="text-justify indent-8 mt-3" style={{ hyphens: "auto" }}>
              <strong className="not-italic">Now, therefore</strong>, in consideration of the
              foregoing and for other good and valuable consideration, the receipt
              and sufficiency of which are hereby acknowledged, the Parties agree
              as follows.
            </p>
          </div>

          {/* Article I — Services */}
          <Article num="I" title="Services rendered by Quire">
            <Clause num="1.1">
              Quire shall, upon receipt of a fully-formatted commercial contract
              from the Founder, parse said contract into numbered sections and
              identify <strong className="text-ink">material</strong> and{" "}
              <strong className="text-ink">advisory</strong> deviations relative
              to the founder-friendly playbook then in effect.
            </Clause>
            <Clause num="1.2">
              For each material deviation, Quire shall produce (a) a
              plain-English summary of the deviation, (b) a citation to the
              corresponding playbook provision, and (c) a draft redline
              suitable for counter-execution.
            </Clause>
            <Clause num="1.3">
              The aggregate deliverable of Sections 1.1–1.2 shall be furnished
              within forty-seven (47) seconds of upload, without expectation of
              billable hours.
            </Clause>
          </Article>

          {/* Article II — with the HeroRedline diagram as an exhibit reference */}
          <Article num="II" title="Illustration of the foregoing">
            <Clause num="2.1">
              The Parties acknowledge that a representative workflow, executed
              against a standard Master Services Agreement of fourteen (14)
              pages, is appended below for illustrative purposes only.
            </Clause>
          </Article>

          <div className="mt-6 mx-auto max-w-none">
            <div className="flex items-baseline justify-between border-y border-ink py-2 mb-4">
              <span className="smallcaps text-[11px] tracking-[0.2em]">Exhibit A · illustrative redline</span>
              <span className="mono text-[10.5px] text-ink-3">live · no video</span>
            </div>
            <HeroRedline />
            <p className="mt-4 text-center text-[11.5px] italic text-ink-2 leading-[1.65] max-w-[60ch] mx-auto">
              <span className="smallcaps not-italic text-ink">Exhibit A.</span>{" "}
              An MSA authoring its own redlines. Three material flags surface
              in-line; the proposed counter-language appears in the margin
              with a green-boxed insertion. Loop length: fourteen (14) seconds.
            </p>
          </div>

          {/* Article III — Pricing & engagement (in contract voice) */}
          <Article num="III" title="Engagement and pricing">
            <Clause num="3.1">
              The Founder may engage Quire without procurement review, without
              information-security review, and without a master service
              agreement, it being understood that <strong className="text-ink">Quire is not a CLM</strong> and does not propose to be one.
            </Clause>
            <Clause num="3.2">
              Pricing shall be denominated in monthly subscription dollars and
              shall not exceed one-twentieth (1/20th) of the then-prevailing
              hourly rate of outside counsel acting in the same matter.
            </Clause>
            <Clause num="3.3" note="Advisory">
              The deliverables contemplated by this Agreement do{" "}
              <strong className="text-ink">not</strong> constitute legal
              advice. For the remaining twenty percent (20%) of clauses,
              the Founder is encouraged to retain outside counsel of suitable
              competence and character.
            </Clause>
          </Article>

          {/* Article IV — Sample contracts as an exhibit */}
          <Article num="IV" title="Sample engagements">
            <Clause num="4.1">
              A non-exhaustive list of past engagements is appended as{" "}
              Exhibit B below. The Founder may inspect any such engagement for
              representative output by following the signature-line reference.
            </Clause>
          </Article>

          <div className="mt-6">
            <div className="flex items-baseline justify-between border-y border-ink py-2 mb-4">
              <span className="smallcaps text-[11px] tracking-[0.2em]">Exhibit B · sample contracts</span>
              <span className="mono text-[10.5px] text-ink-3">tab between · click a flag</span>
            </div>
            <ContractViewer contracts={CONTRACTS} />
            <p className="mt-4 text-center text-[11.5px] italic text-ink-2 leading-[1.65] max-w-[60ch] mx-auto">
              <span className="smallcaps not-italic text-ink">Exhibit B.</span>{" "}
              Three engagements across contract types. Clause navigator shows
              each material flag; right drawer shows the plain-English
              rationale and the draft counter.
            </p>
          </div>

          {/* Article V — Acceptance */}
          <Article num="V" title="Acceptance and execution">
            <Clause num="5.1">
              The Founder may accept this Agreement by causing a signature to
              be affixed below, or by clicking the execution line, which
              shall have the same legal effect as if executed in ink.
            </Clause>
          </Article>

          {/* Signature block — replaces the "closing CTA" */}
          <div className="mt-12 border-t-2 border-ink pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <SignatureBlock
                role="The Founder"
                name="_____________________________"
                attest="By execution below"
                subtext="the Founder acknowledges that the playbook is customizable and that any redline is subject to review."
                signActionHref="/app/new"
                signLabel="Sign & upload a contract"
              />
              <SignatureBlock
                role="Quire, Inc."
                name="/s/ Rayen Manaa"
                attest="By its authorized agent"
                subtext="portfolio project #8 · alpha · not for production without evaluation"
                signActionHref="/app"
                signLabel="Inspect the folder"
                mutedAction
              />
            </div>
            <div className="mt-8 text-center smallcaps text-[10.5px] tracking-[0.22em] text-ink-3">
              — End of agreement · countersigned in Wilmington, DE —
            </div>
          </div>
        </article>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Article({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10 max-w-[64ch] mx-auto">
      <h2 className="display text-[22px] leading-[1.2] text-ink md:text-[26px]">
        <span className="smallcaps tracking-[0.18em] text-ink-3 mr-3">Article {num}.</span>
        {title}.
      </h2>
      <div className="mt-4 flex flex-col gap-4 doc">{children}</div>
    </div>
  );
}

function Clause({
  num,
  note,
  children,
}: {
  num: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="text-[13.5px] leading-[1.85] text-ink text-justify indent-8" style={{ hyphens: "auto" }}>
      <span className="smallcaps text-ink-3 mr-2 tracking-[0.14em] indent-0">§{num}</span>
      {note && (
        <span
          className="mono text-[10px] mr-2"
          style={{ color: "var(--copper)" }}
        >
          [{note}]
        </span>
      )}
      {children}
    </p>
  );
}

function SignatureBlock({
  role,
  name,
  attest,
  subtext,
  signActionHref,
  signLabel,
  mutedAction,
}: {
  role: string;
  name: string;
  attest: string;
  subtext: string;
  signActionHref: string;
  signLabel: string;
  mutedAction?: boolean;
}) {
  return (
    <div>
      <div className="smallcaps text-[11px] tracking-[0.2em] text-ink-3 mb-3">{role}</div>
      <div
        className="display-italic text-[26px] leading-[1.1] text-ink pb-1 border-b border-ink mb-2"
        style={{ fontVariant: "normal" }}
      >
        {name}
      </div>
      <div className="mono text-[10.5px] text-ink-3 tracking-[0.08em] uppercase">{attest}</div>
      <p className="mt-3 text-[12px] leading-[1.6] text-ink-2 max-w-[42ch]">{subtext}</p>
      <Link
        href={signActionHref}
        className={[
          "mt-5 inline-flex items-center gap-1.5 px-4 py-2 text-[12.5px] rounded-[2px] transition-colors",
          mutedAction
            ? "border border-line bg-card text-ink-2 hover:border-line-2 hover:text-ink"
            : "bg-ink text-paper hover:bg-ink-2",
        ].join(" ")}
      >
        <span className="mono text-[10.5px] tracking-[0.12em]">
          {signLabel}
        </span>
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
