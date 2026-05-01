import Link from "next/link";
import { CONTRACTS, fmtDate, severityConfig } from "@/lib/contracts";

export default function ContractsIndex() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-24 md:px-8">
      <div className="flex items-baseline justify-between border-b border-ink pb-3">
        <span className="label">Contracts · folder</span>
        <span className="mono text-[10.5px] text-ink-3 tabular-nums">{todayLong()}</span>
      </div>

      <h1 className="display mt-10 text-[48px] leading-[1.02] tracking-[-0.012em] text-ink md:text-[68px]">
        The <span className="display-italic">folder.</span>
      </h1>
      <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.75] text-ink-2">
        Every contract you&apos;ve uploaded, with its material flags. Click
        through to read the redlines.
      </p>

      <ol className="mt-10 flex flex-col divide-y divide-line border-y border-line">
        {CONTRACTS.map((c, i) => {
          const mat = c.flags.filter((f) => f.severity === "material").length;
          const adv = c.flags.filter((f) => f.severity === "advisory").length;
          return (
            <li key={c.id}>
              <Link
                href={`/app/${c.slug}/`}
                className="group grid grid-cols-[44px_120px_1fr_auto] gap-5 py-5 hover:bg-paper-2/40 transition-colors px-2"
              >
                <span className="mono text-[11px] tabular-nums text-ink-3 pt-1">
                  0{i + 1}
                </span>
                <div>
                  <div className="mono text-[10.5px] tracking-[0.14em] text-ink-3">
                    {c.kind.toUpperCase()}
                  </div>
                  <div className="mono text-[10.5px] tabular-nums text-ink-3 mt-0.5">
                    {c.pages} pp
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="display text-[22px] leading-tight text-ink md:text-[26px]">
                    {c.title}
                  </div>
                  <div className="text-[12.5px] text-ink-2 mt-0.5">
                    {c.counterparty} · received {fmtDate(c.received)}
                  </div>
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    {mat > 0 && (
                      <Chip tone="material" label={`${mat} material`} />
                    )}
                    {adv > 0 && (
                      <Chip tone="advisory" label={`${adv} advisory`} />
                    )}
                    <span className="mono text-[10.5px] text-ink-3">
                      turnaround · {c.turnaroundTarget}
                    </span>
                  </div>
                </div>
                <div className="pt-1 flex items-center gap-3">
                  <span
                    className="mono text-[10.5px] tracking-[0.14em] uppercase"
                    style={{
                      color:
                        c.status === "sent"
                          ? "var(--accent)"
                          : c.status === "in review"
                            ? "var(--copper)"
                            : "var(--ink-3)",
                    }}
                  >
                    {c.status}
                  </span>
                  <span className="mono text-[11px] text-ink-3 group-hover:text-ink">
                    open →
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-2">
        <span className="mono text-[10.5px] text-ink-3 tracking-[0.12em]">
          QUIRE v0.9 · {CONTRACTS.length} contracts · founder-friendly playbook
        </span>
        <Link
          href="/app/new"
          className="inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2 text-[12.5px] rounded-[3px] hover:bg-ink-2 transition-colors"
        >
          Upload a contract
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </div>
  );
}

function Chip({ tone, label }: { tone: "material" | "advisory"; label: string }) {
  const sev = severityConfig(tone);
  return (
    <span
      className="label !text-[9.5px] !tracking-[0.16em] px-2 py-1 rounded-[2px]"
      style={{ color: sev.ink, background: sev.soft }}
    >
      {label}
    </span>
  );
}

function todayLong() {
  return new Date()
    .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    .toUpperCase();
}
