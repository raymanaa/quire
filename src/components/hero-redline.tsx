"use client";

/**
 * HeroRedline — animated project-specific diagram for Quire.
 *
 * Rule 2: a contract page redlining itself on a 14s loop. A vertical
 * contract fills in paragraph text; a highlighter cursor sweeps over
 * a clause; a plain-English balloon fades in the margin; a strike-
 * through materializes over the risky phrase; a green insert drops in
 * beside it. Repeats for three clauses.
 */
export function HeroRedline() {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-[1080px] border border-line bg-card rounded-[3px] overflow-hidden grid grid-cols-[1.3fr_1fr]">
        {/* Left — the contract page */}
        <div className="border-r border-line bg-card px-10 py-8 min-h-[540px]">
          <div className="flex items-baseline justify-between border-b border-line pb-2 mb-5">
            <span className="mono text-[9.5px] tracking-[0.18em] text-ink-3">
              MSA · ACME CORP · DRAFT
            </span>
            <span className="mono text-[9.5px] text-ink-3">14 pp</span>
          </div>
          <h4 className="display text-[18px] text-ink">
            <span className="mono text-[11px] text-ink-3 mr-2">§4</span>
            Warranties.
          </h4>
          <p className="doc mt-2">
            <span className="stage stage-p1">Supplier warrants that the Services will be performed in a workmanlike manner. </span>
            <Flag delay="2.2s" tone="red" label="material">
              except as expressly stated, Supplier disclaims all warranties, express or implied
            </Flag>
            <span className="stage stage-p2">, including warranties of merchantability and fitness. Customer&apos;s sole remedy is termination. </span>
          </p>

          <h4 className="display text-[18px] text-ink mt-6">
            <span className="mono text-[11px] text-ink-3 mr-2">§7</span>
            Indemnification.
          </h4>
          <p className="doc mt-2">
            <span className="stage stage-p3">Supplier shall indemnify Customer from any third-party claims </span>
            <Flag delay="5.8s" tone="red" label="material">
              without limitation as to amount or scope
            </Flag>
            <span className="stage stage-p4">, provided Customer promptly notifies Supplier. </span>
          </p>

          <h4 className="display text-[18px] text-ink mt-6">
            <span className="mono text-[11px] text-ink-3 mr-2">§9</span>
            Data and retention.
          </h4>
          <p className="doc mt-2">
            <span className="stage stage-p5">Supplier will retain Customer Data for </span>
            <Flag delay="9.4s" tone="red" label="material">
              seven (7) years following termination
            </Flag>
            <span className="stage stage-p6">, after which Customer Data will be deleted.</span>
          </p>

          <div className="mt-6 flex items-baseline justify-between border-t border-line pt-3 text-[10.5px] text-ink-3">
            <span className="mono">3 material flags · 0 advisory</span>
            <span className="mono tracking-[0.12em]">QUIRE v0.9</span>
          </div>
        </div>

        {/* Right — the margin notes */}
        <div className="bg-paper-2/40 px-6 py-8">
          <div className="label mb-4">Plain-English margin</div>
          <Note
            delay="2.8s"
            severity="MATERIAL"
            title="Disclaimer overrides SLA"
            body="As drafted, this ALL-CAPS disclaimer nullifies your SLA commitments. Carve out the SLA explicitly."
            redline="…EXCEPT FOR OBLIGATIONS UNDER ANY SLA, Supplier disclaims…"
          />
          <Note
            delay="6.4s"
            severity="MATERIAL"
            title="Uncapped indemnity"
            body="Indemnity must be capped. If the limitation of liability doesn't apply to indemnity, founders are personally exposed."
            redline="…indemnify up to 2× fees paid in the trailing 12 months…"
          />
          <Note
            delay="10.0s"
            severity="MATERIAL"
            title="7-year retention is abnormal"
            body="90 days is playbook. 7 years is a tax-reporting default smuggled into a services contract."
            redline="…for a period of ninety (90) days, extensible on written request…"
          />

          {/* Seal at the end */}
          <div className="seal-stage mt-4 flex items-center justify-end">
            <div className="seal-stamp">
              <span className="mono text-[10.5px] tracking-[0.2em]">
                3 MATERIAL · COUNTER READY
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stage {
          opacity: 0;
          animation: stage-life 14s linear infinite both;
        }
        .stage-p1 { animation-delay: 0.5s; }
        .stage-p2 { animation-delay: 3.0s; }
        .stage-p3 { animation-delay: 4.2s; }
        .stage-p4 { animation-delay: 6.6s; }
        .stage-p5 { animation-delay: 7.8s; }
        .stage-p6 { animation-delay: 10.4s; }

        @keyframes stage-life {
          0%, 2%   { opacity: 0; }
          7%       { opacity: 1; }
          88%      { opacity: 1; }
          94%,100% { opacity: 0; }
        }

        .flag-highlight {
          position: relative;
          display: inline;
          padding: 0 3px;
          transition: all .2s ease;
          color: var(--ink);
          background: transparent;
        }
        .flag-highlight.active-red {
          color: var(--redline);
          background: var(--redline-soft);
          text-decoration: line-through;
          text-decoration-color: var(--redline);
          text-decoration-thickness: 1.4px;
        }

        .flag {
          opacity: 0;
          animation: flag-life 14s linear infinite both;
        }
        @keyframes flag-life {
          0%, 14%  { opacity: 0; }
          20%      { opacity: 1; }
          88%      { opacity: 1; }
          94%,100% { opacity: 0; }
        }
        .flag-reveal {
          opacity: 0;
          animation: flag-reveal 14s linear infinite both;
        }
        @keyframes flag-reveal {
          0%, 20%  { opacity: 0; }
          26%      { opacity: 1; }
          88%      { opacity: 1; }
          94%,100% { opacity: 0; }
        }

        .note {
          opacity: 0;
          transform: translateY(6px);
          animation: note-life 14s linear infinite both;
        }
        @keyframes note-life {
          0%, 18%  { opacity: 0; transform: translateY(6px); }
          24%      { opacity: 1; transform: translateY(0);   }
          88%      { opacity: 1; transform: translateY(0);   }
          94%,100% { opacity: 0; transform: translateY(-3px); }
        }

        .seal-stage {
          opacity: 0;
          animation: seal-life 14s linear infinite both;
        }
        @keyframes seal-life {
          0%, 72%  { opacity: 0; }
          78%      { opacity: 1; }
          88%      { opacity: 1; }
          94%,100% { opacity: 0; }
        }
        .seal-stamp {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border: 1.5px solid var(--redline);
          color: var(--redline);
          transform: rotate(-3deg);
          letter-spacing: 0.2em;
          background: var(--redline-soft);
        }
      `}</style>
    </div>
  );
}

function Flag({
  delay,
  tone,
  label,
  children,
}: {
  delay: string;
  tone: "red" | "green";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span className="flag-highlight active-red" style={{ animationDelay: delay }}>
      <span className="flag" style={{ animationDelay: delay }}>
        {children}
      </span>
    </span>
  );
}

function Note({
  delay,
  severity,
  title,
  body,
  redline,
}: {
  delay: string;
  severity: string;
  title: string;
  body: string;
  redline: string;
}) {
  return (
    <div className="note mb-4" style={{ animationDelay: delay }}>
      <div className="border border-line bg-card rounded-[3px] px-4 py-3">
        <div
          className="mono text-[9.5px] tracking-[0.18em]"
          style={{ color: "var(--redline)" }}
        >
          {severity}
        </div>
        <div className="display text-[15px] text-ink leading-tight mt-1">{title}</div>
        <p className="text-[12px] leading-[1.6] text-ink-2 mt-1">{body}</p>
        <div className="mt-2 border-l-2 border-accent bg-accent-soft/40 pl-3 py-1 text-[11.5px] italic leading-[1.55] text-ink">
          {redline}
        </div>
      </div>
    </div>
  );
}
