import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";

export const metadata = {
  title: "Pricing · Quire",
  description: "One tier. No procurement review required.",
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />
      <section className="flex-1">
        <div className="mx-auto max-w-[900px] px-6 md:px-10 pt-20 pb-16 md:pt-28">
          <div className="label">Pricing</div>
          <h1 className="display mt-4 text-[48px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[68px]">
            One tier.{" "}
            <span className="display-italic" style={{ color: "var(--redline)" }}>
              No procurement review.
            </span>
          </h1>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.75] text-ink-2">
            Priced so that founders can buy it on a company card without legal's permission — because Quire is how legal's permission stops being a bottleneck.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Tier
              name="Solo"
              price="Free"
              caveat="forever"
              lines={[
                "5 contract reviews / month",
                "Founder-friendly playbook",
                "Redline drafts — copy / DOCX export",
                "No credit card",
              ]}
            />
            <Tier
              name="Founder"
              price="$49"
              caveat="per month"
              lines={[
                "Unlimited reviews",
                "Custom playbook (forkable)",
                "Version history",
                "Email support",
              ]}
              featured
            />
            <Tier
              name="Operator"
              price="$149"
              caveat="per month"
              lines={[
                "Everything in Founder",
                "Team playbook (5 seats)",
                "Priority support",
                "Signed-URL sharing",
              ]}
            />
          </div>

          <section className="mt-14 border-t-2 border-ink pt-6">
            <div className="label">What's not for sale</div>
            <ul className="mt-4 text-[14px] leading-[1.75] text-ink-2 space-y-2 max-w-[62ch]">
              <li>— Per-seat pricing that punishes larger teams.</li>
              <li>— &ldquo;Call for enterprise pricing&rdquo; tiers with feature-locks on SAML or SCIM.</li>
              <li>— Locked playbooks. Your playbook is your file; you can export it at any time.</li>
              <li>— Legal advice. We are a tool, not a law firm.</li>
            </ul>
          </section>

          <div className="mt-14 flex flex-wrap items-baseline justify-between gap-4">
            <p className="display-italic text-[16px] text-ink-2 max-w-[52ch]">
              If the PDF arrived Thursday, you know which tier you want.
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

function Tier({
  name,
  price,
  caveat,
  lines,
  featured,
}: {
  name: string;
  price: string;
  caveat: string;
  lines: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`border ${featured ? "border-ink border-2" : "border-line"} bg-card rounded-[3px] p-5`}
    >
      <div className="label">{name}</div>
      <div className="flex items-baseline gap-2 mt-3">
        <span className="display text-[40px] leading-none text-ink tabular-nums">{price}</span>
        <span className="mono text-[10.5px] text-ink-3 tracking-[0.1em]">{caveat}</span>
      </div>
      <ul className="mt-5 flex flex-col gap-2 text-[13px] text-ink-2 leading-[1.55]">
        {lines.map((l, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="text-ink-4">·</span>
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
