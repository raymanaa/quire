import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";

export const metadata = {
  title: "Playbook · Quire",
  description: "The founder-friendly contract playbook, in plain English.",
};

const ARTICLES = [
  {
    n: "I",
    title: "Limitation of liability",
    material: true,
    rule: "Liability is capped at 12 months' fees paid, with mutual carve-outs for gross negligence, willful misconduct, IP indemnity, and confidentiality breaches.",
    why: "Anything uncapped, or capped below twelve months, is a transfer of startup risk to the founder personally. The carve-outs are non-negotiable because a cap that swallows IP indemnity is not a cap.",
  },
  {
    n: "II",
    title: "Indemnification",
    material: true,
    rule: "Mutual indemnity capped at 2× fees paid in the trailing twelve months, with carve-outs for IP and confidentiality.",
    why: "One-sided or uncapped indemnity is a common vendor ask; it is never a founder ask. Capping prevents a single contract from ending the company.",
  },
  {
    n: "III",
    title: "Data & retention",
    material: true,
    rule: "Customer Data retained for 90 days post-termination, extensible to 180 by written request. Deletion certified within 30 days thereafter.",
    why: "Seven-year retention is a tax-reporting default smuggled into services contracts. Ninety days is the working-recovery window; anything more is breach-surface expansion.",
  },
  {
    n: "IV",
    title: "Warranties",
    material: true,
    rule: "Workmanlike-manner warranty survives any ALL-CAPS disclaimer. The SLA is explicitly carved out of the disclaimer.",
    why: "A warranty disclaimer that overrides the SLA hollows out every downstream remedy. The carve-out is a single sentence; ask for it every time.",
  },
  {
    n: "V",
    title: "Auto-renewal",
    material: false,
    rule: "Non-renewal notice window of 30 days. Annual term; auto-renewal is acceptable with that window.",
    why: "60-day notice windows are a friction tax. 30 days is standard; longer is a retention mechanism disguised as contract hygiene.",
  },
  {
    n: "VI",
    title: "Non-competes (employment)",
    material: true,
    rule: "No non-compete on non-executives. Executive non-competes limited to 12 months post-employment and geographically narrow.",
    why: "California voids non-competes broadly. Other jurisdictions enforce them unevenly. A broad non-compete on a junior hire is an unenforceable chilling effect — remove it rather than fight it later.",
  },
  {
    n: "VII",
    title: "Invention assignment (employment)",
    material: true,
    rule: "Assignment of inventions limited to those made with Company resources OR related to Company business. Excludes weekend projects unrelated to the Company's actual work.",
    why: "Broad invention-assignment is standard boilerplate that contradicts California Labor Code §2870. Even outside CA, it is an employee-unfriendly default that should be narrowed on every hire.",
  },
  {
    n: "VIII",
    title: "Publicity / logos",
    material: false,
    rule: "Mutual logo rights at signing; press / case-study rights require written consent each time.",
    why: "Customers like their vendors to brag; they don't like being surprised in a press release. The one-time consent model balances both.",
  },
];

export default function Playbook() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />
      <section className="flex-1">
        <div className="mx-auto max-w-[920px] px-6 md:px-10 pt-20 pb-16 md:pt-28">
          <div className="label">The playbook</div>
          <h1 className="display mt-4 text-[48px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[68px]">
            Founder-friendly,{" "}
            <span className="display-italic" style={{ color: "var(--redline)" }}>
              in writing.
            </span>
          </h1>
          <p className="mt-5 max-w-[64ch] text-[15px] leading-[1.75] text-ink-2">
            Eight articles. Each names the clause, the rule, and why. This is the default Quire checks against. Fork it in the app; your playbook becomes the one used on your next contract.
          </p>

          <ol className="mt-14">
            {ARTICLES.map((a) => (
              <li
                key={a.n}
                className="grid grid-cols-1 md:grid-cols-[90px_1fr] gap-3 md:gap-10 py-8 border-t border-line first:border-t-2 first:border-ink items-baseline"
              >
                <div>
                  <div className="smallcaps text-[12px] tracking-[0.2em] text-ink-3">
                    Art. {a.n}
                  </div>
                  {a.material && (
                    <div
                      className="mt-2 mono text-[9.5px] tracking-[0.18em]"
                      style={{ color: "var(--redline)" }}
                    >
                      MATERIAL
                    </div>
                  )}
                </div>
                <div>
                  <div className="display text-[24px] leading-[1.2] text-ink">{a.title}.</div>
                  <p className="mt-3 text-[14.5px] leading-[1.75] text-ink">
                    <strong className="text-ink">The rule.</strong> {a.rule}
                  </p>
                  <p className="mt-2.5 text-[13.5px] leading-[1.7] text-ink-2 italic max-w-[62ch]">
                    Why. {a.why}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t-2 border-ink pt-6 flex flex-wrap items-baseline justify-between gap-4">
            <p className="display-italic text-[16px] text-ink-2 max-w-[52ch]">
              This is a starting point, not legal advice. Fork it. Write yours.
            </p>
            <Link
              href="/app/new"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-[13px] rounded-[3px] hover:bg-ink-2 transition-colors"
            >
              Upload a contract
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  );
}
