import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { CONTRACTS, severityConfig } from "@/lib/contracts";

export default function Landing() {
  const contract = CONTRACTS[0];
  const flag = contract.flags.find((f) => f.id === "f-indem")!; // the uncapped indemnity flag
  const sev = severityConfig(flag.severity);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      <section className="flex-1">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 pt-24 pb-20 md:pt-32">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <div>
              <div className="label">Contract review for founders</div>
              <h1 className="display mt-5 text-[64px] leading-[0.96] tracking-[-0.012em] md:text-[92px]">
                Three flags.{" "}
                <span className="display-italic" style={{ color: "var(--redline)" }}>
                  Three redlines.
                </span>
              </h1>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-ink-2">
                Paste an MSA. Quire flags the clauses that matter and drafts the counter.
              </p>
              <div className="mt-8">
                <Link
                  href="/app/new"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
                >
                  Upload a contract
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Single flag card — lifted from the contract viewer drawer */}
            <div className="border border-line bg-card rounded-[3px] p-5">
              <div
                className="mono text-[9.5px] font-semibold tracking-[0.18em]"
                style={{ color: sev.ink }}
              >
                {sev.label} · FLAG
              </div>
              <div className="display mt-2 text-[19px] text-ink leading-tight">
                {flag.title}.
              </div>
              <p className="mt-2 text-[12.5px] leading-[1.65] text-ink-2">
                {flag.summary}
              </p>
              <div
                className="mt-3 border-l-2 pl-3 py-1.5 text-[12px] italic leading-[1.6] text-ink doc"
                style={{ borderColor: "var(--accent)", background: "var(--accent-soft)" }}
              >
                {flag.redline}
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-line">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Step n="01" verb="Parse" detail="Every clause, numbered" />
            <Step n="02" verb="Flag" detail="Material vs. playbook" />
            <Step n="03" verb="Redline" detail="Counter-language, ready" />
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Step({ n, verb, detail }: { n: string; verb: string; detail: string }) {
  return (
    <div>
      <div className="mono text-[10.5px] text-ink-3 tracking-[0.16em]">{n}</div>
      <div className="display mt-1 text-[26px] leading-none text-ink">{verb}.</div>
      <div className="mt-1 text-[13px] text-ink-2">{detail}</div>
    </div>
  );
}
