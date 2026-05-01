import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-line mt-24 bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="display text-[22px] text-ink leading-none">Quire</div>
            <p className="mt-3 max-w-[340px] text-[12.5px] leading-[1.7] text-ink-2">
              Contract review for founders. Paste an MSA, get plain-English
              flags on the three clauses that actually matter.
            </p>
          </div>
          <Col label="Product">
            <FLink href="/app">Contracts</FLink>
            <FLink href="/app/new">Upload</FLink>
            <FLink href="/playbook">Playbook</FLink>
          </Col>
          <Col label="Company">
            <FLink href="/security">Security</FLink>
            <FLink href="/pricing">Pricing</FLink>
          </Col>
          <Col label="Context">
            <span className="text-ink-2">Built by Rayen Manaa</span>
            <span className="text-ink-2">Portfolio project #8</span>
            <a
              href="https://github.com/raymanaa/quire"
              target="_blank"
              rel="noopener"
              className="text-ink-2 hover:text-ink transition-colors"
            >
              github.com/raymanaa/quire ↗
            </a>
          </Col>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-line pt-5 text-[11px] text-ink-3">
          <span className="mono">© 2026 Quire · alpha · not legal advice</span>
          <span className="mono">quire.raymnz.com</span>
        </div>
      </div>
    </footer>
  );
}

function Col({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="label">{label}</div>
      <ul className="mt-3 flex flex-col gap-2 text-[13px]">
        {Array.isArray(children)
          ? children.map((c, i) => <li key={i}>{c}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-ink-2 hover:text-ink transition-colors">
      {children}
    </Link>
  );
}
