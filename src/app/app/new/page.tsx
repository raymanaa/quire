"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PIPELINE = [
  { id: "parse", label: "Parsing the document", detail: "14 pages · 11 sections · 184 clauses", ms: 900 },
  { id: "extract", label: "Extracting clauses", detail: "By number, by heading, by defined term", ms: 800 },
  { id: "match", label: "Matching against playbook", detail: "Founder-friendly playbook · v0.9", ms: 700 },
  { id: "flag", label: "Flagging material deviations", detail: "3 material · 1 advisory", ms: 800 },
  { id: "draft", label: "Drafting counter-language", detail: "Line-level redlines, in the paper's own numbering", ms: 1200 },
  { id: "sign", label: "Signing the review", detail: "Pipeline version + playbook hash pinned", ms: 500 },
];

export default function NewContractPage() {
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle");
  const [stepIndex, setStepIndex] = useState(-1);
  const [fileName, setFileName] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const timerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  function run(i: number) {
    if (i >= PIPELINE.length) {
      setPhase("done");
      return;
    }
    setStepIndex(i);
    setLogs((l) => [...l, PIPELINE[i].detail]);
    timerRef.current = window.setTimeout(() => run(i + 1), PIPELINE[i].ms);
  }

  return (
    <div className="mx-auto max-w-[980px] px-6 pt-10 pb-24 md:px-10">
      <div className="flex items-baseline justify-between border-b border-ink pb-3">
        <span className="label">
          Upload a contract · step{" "}
          {phase === "idle" ? "01" : phase === "running" ? "02" : "03"}
        </span>
        <span className="mono text-[10.5px] text-ink-3">QUIRE v0.9</span>
      </div>

      <AnimatePresence mode="wait">
        {phase === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14"
          >
            <div>
              <h1 className="display text-[46px] leading-[1.02] tracking-[-0.012em] text-ink md:text-[60px]">
                Drop a <span className="display-italic" style={{ color: "var(--redline)" }}>contract.</span>
              </h1>
              <p className="mt-4 max-w-[54ch] text-[14.5px] leading-[1.7] text-ink-2">
                MSA, SOW, Order Form, NDA, Employment Agreement, or offer letter. PDF or DOCX. Quire parses, matches against your playbook, and drafts the counter.
              </p>

              <label
                className="mt-8 block cursor-pointer border-2 border-dashed border-line-2 bg-card px-6 py-10 text-center rounded-[3px] hover:border-ink-3 transition-colors"
                onDrop={(e) => {
                  e.preventDefault();
                  setFileName(e.dataTransfer.files[0]?.name ?? null);
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.docx,.doc"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                />
                <FileText className="mx-auto h-6 w-6 text-ink-3" strokeWidth={1.5} />
                <div className="display mt-3 text-[20px] text-ink">
                  {fileName ? (
                    <span>{fileName}</span>
                  ) : (
                    <>
                      Drop a{" "}
                      <span className="display-italic" style={{ color: "var(--redline)" }}>
                        PDF
                      </span>{" "}
                      or{" "}
                      <span className="display-italic" style={{ color: "var(--redline)" }}>
                        browse
                      </span>
                    </>
                  )}
                </div>
                <div className="mt-1 text-[12px] text-ink-3 italic">PDF · DOCX · under 10 MB</div>
              </label>

              <div className="mt-5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setFileName("acme-msa-v3.pdf")}
                  className="text-[12px] text-ink-3 hover:text-[color:var(--redline)] underline-offset-2 hover:underline"
                >
                  or use a sample MSA →
                </button>
                <button
                  disabled={!fileName}
                  onClick={() => {
                    setPhase("running");
                    setStepIndex(0);
                    setLogs([]);
                    run(0);
                  }}
                  className="inline-flex items-center gap-1.5 bg-ink text-paper px-5 py-2.5 text-[13px] rounded-[3px] hover:bg-ink-2 transition-colors disabled:opacity-30"
                >
                  Review contract
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </div>
            </div>

            <aside className="border border-line bg-card rounded-[3px]">
              <div className="border-b border-line px-5 py-3">
                <span className="label">What happens next</span>
              </div>
              <ol className="divide-y divide-line">
                {PIPELINE.map((s, i) => (
                  <li
                    key={s.id}
                    className="grid grid-cols-[32px_1fr] gap-2 px-5 py-3 text-[12.5px]"
                  >
                    <span className="mono text-[10.5px] tabular-nums text-ink-3 pt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="text-ink">{s.label}</div>
                      <div className="text-[11px] text-ink-3 italic">{s.detail}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </motion.div>
        )}

        {phase !== "idle" && (
          <motion.div
            key="running"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10"
          >
            <div className="flex flex-wrap items-baseline gap-4 border-b border-line pb-3">
              <span className="mono text-[11.5px] text-ink">{fileName}</span>
              <span className="label !text-[10px]">
                {phase === "running" ? "REVIEWING" : "READY"}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1fr_300px] md:gap-14">
              <ol className="space-y-4">
                {PIPELINE.map((s, i) => {
                  const state =
                    i < stepIndex || phase === "done"
                      ? "done"
                      : i === stepIndex
                        ? "running"
                        : "pending";
                  return (
                    <motion.li
                      key={s.id}
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: state === "pending" ? 0.35 : 1 }}
                      className="grid grid-cols-[44px_1fr] gap-4"
                    >
                      <div className="pt-1">
                        <span
                          className={[
                            "inline-block h-[9px] w-[9px] rounded-full",
                            state === "pending" && "border border-line-2",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          style={
                            state === "running"
                              ? {
                                  background: "var(--redline)",
                                  boxShadow: "0 0 0 3px rgba(158,46,46,0.2)",
                                }
                              : state === "done"
                                ? { background: "var(--ink)" }
                                : {}
                          }
                        />
                      </div>
                      <div>
                        <div className="display text-[19px] leading-tight text-ink">
                          {s.label}
                          {state === "done" && (
                            <span
                              className="mono text-[10px] ml-2"
                              style={{ color: "var(--accent)" }}
                            >
                              ✓
                            </span>
                          )}
                        </div>
                        <div className="text-[12.5px] text-ink-3 mt-0.5 italic">{s.detail}</div>
                        {state === "running" && (
                          <div className="mt-2 h-[1px] overflow-hidden bg-line">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: s.ms / 1000, ease: "linear" }}
                              className="h-full"
                              style={{ background: "var(--redline)" }}
                            />
                          </div>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>

              <aside className="border border-line bg-card rounded-[3px]">
                <div className="border-b border-line px-4 py-2.5">
                  <span className="label">Pipeline log</span>
                </div>
                <div className="p-4 mono text-[11px] leading-[1.55] text-ink-2 max-h-[360px] overflow-y-auto">
                  {logs.length === 0 && <div className="text-ink-3">$ waiting...</div>}
                  {logs.map((l, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-1.5"
                    >
                      <span style={{ color: "var(--redline)" }}>→</span> {l}
                    </motion.div>
                  ))}
                  {phase === "done" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-line text-ink"
                    >
                      <span style={{ color: "var(--accent)" }}>✓</span> signed · c-msa-acme · 3 material flags · 1 advisory
                    </motion.div>
                  )}
                </div>
              </aside>
            </div>

            {phase === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-5"
              >
                <div>
                  <div className="label">Review ready</div>
                  <div className="display mt-1 text-[22px] text-ink">
                    Acme Corp MSA — <span className="display-italic" style={{ color: "var(--redline)" }}>3 material flags.</span>
                  </div>
                </div>
                <Link
                  href="/app/c-msa-acme/"
                  className="inline-flex items-center gap-1.5 bg-ink text-paper px-5 py-2.5 text-[13px] rounded-[3px] hover:bg-ink-2 transition-colors"
                >
                  Open redline
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
