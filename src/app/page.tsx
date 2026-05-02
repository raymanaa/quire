import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { CONTRACTS, severityConfig } from "@/lib/contracts";

export default function Landing() {
  const contract = CONTRACTS[0];
  const flag = contract.flags.find((f) => f.id === "f-indem")!;
  const sev = severityConfig(flag.severity);
  const recent = CONTRACTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section>
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

            <div className="border border-line bg-card rounded-[3px] p-5">
              <div className="mono text-[9.5px] font-semibold tracking-[0.18em]" style={{ color: sev.ink }}>
                {sev.label} · FLAG
              </div>
              <div className="display mt-2 text-[19px] text-ink leading-tight">{flag.title}.</div>
              <p className="mt-2 text-[12.5px] leading-[1.65] text-ink-2">{flag.summary}</p>
              <div
                className="mt-3 border-l-2 pl-3 py-1.5 text-[12px] italic leading-[1.6] text-ink doc"
                style={{ borderColor: "var(--accent)", background: "var(--accent-soft)" }}
              >
                {flag.redline}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS ──────────────────────────────────────────────────────── */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat n="47s" label="From upload to first flag" />
          <Stat n="3 – 4" label="Material clauses in a typical MSA" />
          <Stat n="1/20" label="The outside-counsel hourly rate" />
          <Stat n="0" label="Clauses auto-accepted without you" />
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <Section label="The Friday-afternoon contract">
        <p className="display-italic text-[30px] leading-[1.25] text-ink max-w-[34ch] md:text-[42px]">
          Eighty percent of a founder&apos;s contract review is the same three clauses.
        </p>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.7] text-ink-2">
          Indemnity, warranty, data retention. Different papers, same shapes. Outside counsel charges $300 an hour to tell you the same thing three times a quarter. Quire reads the paper, compares against your playbook, and hands you the counters — so the hour is spent on the fourth clause, not the first three.
        </p>
      </Section>

      {/* ── WORKFLOW ─────────────────────────────────────────────────────── */}
      <Section label="How a counter is drafted">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <Move n="01" verb="Parse" detail="MSA, SOW, Order Form, NDA, Employment. Numbered by section, clause by clause." />
          <Move n="02" verb="Compare" detail="Against the founder-friendly playbook — or your own, once you redline it." />
          <Move n="03" verb="Flag" detail="Material or advisory. Every flag carries its playbook citation and a plain-English note." />
          <Move n="04" verb="Draft" detail="Counter-language for each material flag. Not a template — written against the incoming paper&apos;s own numbering." />
          <Move n="05" verb="Sign" detail="Export the redline as DOCX with track changes. Quire does not auto-sign. Ever." />
        </ol>
      </Section>

      {/* ── SIGNATURE MOVES ──────────────────────────────────────────────── */}
      <Section label="Three things only Quire does">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            title="Playbook-first, not LLM-first."
            body="Every material flag cites a specific playbook provision. Change the provision; the flag changes. The playbook is your contract strategy, in text."
          />
          <Feature
            title="A counter, not a summary."
            body="Every material flag carries a drafted redline — in the paper&apos;s own numbering, ready to paste."
          />
          <Feature
            title="Not a CLM."
            body="Ironclad is infrastructure. Quire is a desk tool. Paste a PDF; keep your IT team out of it."
          />
        </div>
      </Section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <Section label="Made for">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] leading-[1.65] text-ink-2">
          <Persona title="The founder">
            PDF arrives Thursday. Counter needs to go back Monday. Quire is for the ninety minutes in between.
          </Persona>
          <Persona title="The first operator">
            Chief of staff or head of ops. Runs procurement without a legal team yet. Needs the playbook to be written down somewhere.
          </Persona>
          <Persona title="The solo GC">
            Growth-stage company, one lawyer. Uses Quire to stop being the bottleneck on every MSA turn.
          </Persona>
        </ul>
      </Section>

      {/* ── RECENT ───────────────────────────────────────────────────────── */}
      <Section label="Contracts reviewed this month" right={<Link href="/app" className="mono text-[11px] text-ink-3 hover:text-ink transition-colors">the folder →</Link>}>
        <ul className="border-y border-line divide-y divide-line">
          {recent.map((c) => {
            const mat = c.flags.filter((f) => f.severity === "material").length;
            return (
              <li key={c.id}>
                <Link href={`/app/${c.slug}/`} className="group grid grid-cols-[auto_1fr_auto] gap-5 py-4 items-baseline hover:bg-paper-2/40 transition-colors px-1">
                  <span className="mono text-[10px] tracking-[0.14em] text-ink-3">{c.kind.toUpperCase()}</span>
                  <div>
                    <div className="display text-[18px] text-ink leading-tight">{c.title}</div>
                    <div className="text-[11.5px] text-ink-3 mt-0.5">
                      {c.counterparty} · {mat} material flag{mat === 1 ? "" : "s"}
                    </div>
                  </div>
                  <span className="mono text-[10.5px] text-ink-3 group-hover:text-ink">open →</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ── VOICE ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-16">
        <blockquote className="border-l-2 border-ink pl-6 max-w-[60ch]">
          <p className="display-italic text-[28px] leading-[1.3] text-ink md:text-[34px]">
            &ldquo;The playbook diff was the fastest $6K I&apos;ve ever saved. We counter-signed Acme the same day.&rdquo;
          </p>
          <footer className="mt-4 smallcaps mono text-[11px] text-ink-3 tracking-[0.14em]">
            — J. Chen · founder &amp; CEO · &lt;pilot · not a customer&gt;
          </footer>
        </blockquote>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section label="Questions">
        <dl className="divide-y divide-line border-y border-line">
          <Faq q="Is this legal advice?">
            No. Quire is a review tool. For the remaining 20% of clauses, retain outside counsel.
          </Faq>
          <Faq q="What file types does it accept?">
            PDF and DOCX today. Pasted plain text works for quick checks. OCR for scanned PDFs is tracked in /changelog.
          </Faq>
          <Faq q="Can I customize the playbook?">
            Yes. The founder-friendly playbook is the default; redline any clause and your next contract is checked against your version, not ours.
          </Faq>
          <Faq q="Does Quire auto-sign or auto-send?">
            No. The agent drafts a counter. You send it, or not. Quire does not touch signing workflows.
          </Faq>
          <Faq q="What about confidential contracts?">
            Uploads are processed per-session. Nothing is retained on your behalf without explicit sign-in. See /security for the full list.
          </Faq>
        </dl>
      </Section>

      {/* ── SECOND CTA ───────────────────────────────────────────────────── */}
      <section className="border-t-2 border-ink">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 text-center">
          <div className="label">Friday, 4:30 PM</div>
          <h2 className="display mt-3 text-[40px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[54px]">
            You have the PDF.{" "}
            <span className="display-italic" style={{ color: "var(--redline)" }}>
              You have Quire.
            </span>
          </h2>
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
      </section>

      <MarketingFooter />
    </div>
  );
}

function Section({ label, right, children }: { label: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-16">
        <div className="flex items-baseline justify-between border-b border-line pb-3 mb-8">
          <span className="label">{label}</span>
          {right}
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display text-[28px] leading-none tabular-nums text-ink md:text-[32px]">{n}</div>
      <div className="mt-2 text-[11.5px] leading-[1.45] text-ink-3 max-w-[28ch]">{label}</div>
    </div>
  );
}

function Move({ n, verb, detail }: { n: string; verb: string; detail: string }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-4 items-baseline">
      <span className="mono text-[11px] text-ink-3 tabular-nums tracking-[0.16em]">{n}</span>
      <div>
        <div className="display text-[22px] leading-none text-ink">{verb}.</div>
        <div className="mt-1 text-[13.5px] leading-[1.6] text-ink-2 max-w-[40ch]">{detail}</div>
      </div>
    </li>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="display text-[20px] leading-[1.2] text-ink">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-[1.65] text-ink-2 max-w-[36ch]">{body}</p>
    </div>
  );
}

function Persona({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="border-t-2 border-ink pt-3">
      <div className="display text-[18px] leading-tight text-ink">{title}</div>
      <p className="mt-2 max-w-[36ch]">{children}</p>
    </li>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-10 py-5">
      <dt className="display text-[17px] text-ink leading-tight">{q}</dt>
      <dd className="text-[14px] leading-[1.7] text-ink-2 max-w-[62ch]">{children}</dd>
    </div>
  );
}
