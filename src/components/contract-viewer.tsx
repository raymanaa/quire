"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  type ClauseFlag,
  type Contract,
  severityConfig,
} from "@/lib/contracts";

/**
 * ContractViewer — the real inline product component for Quire.
 * Tabs across 3 sample contracts; clicking a flagged clause opens its
 * drawer with the plain-English summary, playbook deviation, and
 * redline proposal. Same component the /app reader uses.
 */
export function ContractViewer({ contracts }: { contracts: Contract[] }) {
  const [activeId, setActiveId] = useState(contracts[0].id);
  const [activeFlag, setActiveFlag] = useState<string | null>(null);
  const active = contracts.find((c) => c.id === activeId) ?? contracts[0];
  const flag =
    activeFlag != null ? active.flags.find((f) => f.id === activeFlag) : null;

  return (
    <div className="border border-line bg-card rounded-[3px] overflow-hidden">
      {/* Tabs */}
      <div className="flex items-stretch border-b border-line overflow-x-auto">
        {contracts.map((c) => {
          const isActive = c.id === activeId;
          return (
            <button
              key={c.id}
              onClick={() => {
                setActiveId(c.id);
                setActiveFlag(null);
              }}
              className={[
                "shrink-0 min-w-[240px] text-left px-5 py-3.5 border-r border-line last:border-r-0 transition-colors",
                isActive ? "bg-paper-2/60" : "bg-card hover:bg-paper-2/30",
              ].join(" ")}
              style={
                isActive
                  ? { boxShadow: "inset 0 -2px 0 0 var(--redline)" }
                  : undefined
              }
            >
              <div className="flex items-baseline gap-2">
                <span className="mono text-[9.5px] tracking-[0.14em] text-ink-3">
                  {c.kind.toUpperCase()}
                </span>
                <span className="mono text-[9.5px] text-ink-3">
                  {c.pages} pp
                </span>
              </div>
              <div className="display mt-1 text-[15px] text-ink leading-tight">
                {c.title}
              </div>
              <div className="mt-0.5 text-[11px] text-ink-3">
                {c.counterparty}
              </div>
            </button>
          );
        })}
      </div>

      {/* Flag navigator strip */}
      <div className="relative border-b border-line bg-paper-2/40 px-6 py-3">
        <div className="flex items-baseline justify-between">
          <span className="label">Clause navigator</span>
          <div className="flex items-center gap-3 text-[11px] text-ink-3">
            <LegendDot color="var(--redline)" label="material" />
            <LegendDot color="var(--copper)" label="advisory" />
            <LegendDot color="var(--accent)" label="conforms" />
          </div>
        </div>
        <div className="mt-3 relative h-[22px]">
          <div aria-hidden className="absolute inset-x-0 top-[10px] h-[2px] bg-line" />
          {active.flags.map((f) => {
            const sev = severityConfig(f.severity);
            const isActive = activeFlag === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFlag(isActive ? null : f.id)}
                title={f.title}
                className="absolute top-0 h-full flex flex-col items-center justify-center"
                style={{
                  left: `${f.atOffset}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <span
                  aria-hidden
                  className="h-[10px] w-[10px] rounded-full border"
                  style={{
                    background: isActive ? sev.ink : sev.soft,
                    borderColor: sev.ink,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
        className="grid grid-cols-1 md:grid-cols-[1.3fr_340px]"
      >
        {/* Document view */}
        <div className="border-b md:border-b-0 md:border-r border-line px-6 py-6 md:px-8 md:py-8 max-h-[540px] overflow-y-auto">
          <div className="display text-[22px] leading-tight text-ink md:text-[26px]">
            {active.title}
          </div>
          <div className="text-[11.5px] text-ink-3 mt-1">
            Between <span className="text-ink-2">{active.counterparty}</span>{" "}
            and Customer (&ldquo;Customer&rdquo;), effective as of the date first written above.
          </div>
          <hr className="rule my-4" />

          {active.sections.map((s) => (
            <section key={s.id} className="mt-5 first:mt-0">
              <h4 className="display text-[16px] leading-tight text-ink mb-1">
                <span className="mono text-[11px] text-ink-3 tabular-nums mr-2">
                  §{s.number}
                </span>
                {s.title}.
              </h4>
              <p className="doc">
                {s.segments.map((seg, i) => {
                  if (seg.kind === "text") return <span key={i}>{seg.text}</span>;
                  const flg = active.flags.find((f) => f.id === seg.flagId);
                  if (!flg) return <span key={i}>{seg.text}</span>;
                  const sev = severityConfig(flg.severity);
                  const isActive = activeFlag === flg.id;
                  return (
                    <button
                      key={i}
                      onClick={() =>
                        setActiveFlag(isActive ? null : flg.id)
                      }
                      className="inline text-left underline-offset-2 hover:underline transition-colors"
                      style={{
                        color: sev.ink,
                        background: isActive ? sev.soft : "transparent",
                        padding: "0 2px",
                        borderBottom: `2px dotted ${sev.ink}`,
                      }}
                      title={flg.title}
                    >
                      {seg.text}
                    </button>
                  );
                })}
              </p>
            </section>
          ))}
        </div>

        {/* Drawer */}
        <aside className="px-5 py-5 max-h-[540px] overflow-y-auto bg-paper-2/30">
          {flag ? (
            <FlagDrawer flag={flag} />
          ) : (
            <SummaryDrawer contract={active} onOpenFlag={setActiveFlag} />
          )}
        </aside>
      </motion.div>
    </div>
  );
}

function SummaryDrawer({
  contract,
  onOpenFlag,
}: {
  contract: Contract;
  onOpenFlag: (id: string) => void;
}) {
  return (
    <div>
      <div className="label">Deal summary</div>
      <p className="display-italic mt-2 text-[16px] leading-[1.5] text-ink">
        {contract.summary}
      </p>
      <hr className="rule my-4" />

      <div className="label">Flags · {contract.flags.length}</div>
      <ul className="mt-2 flex flex-col gap-1.5">
        {contract.flags.map((f) => {
          const sev = severityConfig(f.severity);
          return (
            <li key={f.id}>
              <button
                onClick={() => onOpenFlag(f.id)}
                className="w-full text-left border border-line bg-card px-3 py-2 rounded-[3px] hover:border-line-2 transition-colors"
              >
                <div className="flex items-baseline gap-2">
                  <span
                    aria-hidden
                    className="h-[7px] w-[7px] rounded-full"
                    style={{ background: sev.ink }}
                  />
                  <span
                    className="mono text-[9.5px] tracking-[0.14em]"
                    style={{ color: sev.ink }}
                  >
                    {sev.label}
                  </span>
                </div>
                <div className="mt-1 text-[12.5px] text-ink leading-tight">
                  {f.title}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FlagDrawer({ flag }: { flag: ClauseFlag }) {
  const sev = severityConfig(flag.severity);
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
    >
      <span
        className="mono text-[9.5px] tracking-[0.16em]"
        style={{ color: sev.ink }}
      >
        {sev.label} · FLAG
      </span>
      <h4 className="display mt-2 text-[18px] text-ink leading-tight">
        {flag.title}
      </h4>
      <p className="mt-2 text-[13px] leading-[1.7] text-ink-2">{flag.summary}</p>

      {flag.playbookDeviation && (
        <div className="mt-4">
          <div className="label">Playbook deviation</div>
          <p className="mt-1.5 text-[12.5px] leading-[1.7] text-ink-2 italic">
            {flag.playbookDeviation}
          </p>
        </div>
      )}

      {flag.redline && (
        <div className="mt-4">
          <div className="label">Redline draft</div>
          <div className="mt-2 border-l-2 border-accent bg-accent-soft/40 pl-3 py-2 text-[12.5px] leading-[1.7] text-ink doc">
            {flag.redline}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span
        aria-hidden
        className="h-[7px] w-[7px] rounded-full"
        style={{ background: color }}
      />
      <span>{label}</span>
    </span>
  );
}
