export type Severity = "material" | "advisory" | "ok";

export type ClauseFlag = {
  id: string;
  title: string;
  severity: Severity;
  summary: string;
  playbookDeviation?: string;
  redline?: string;
  atOffset: number; // position index for the nav strip (0-100)
};

export type ClauseSegment =
  | { kind: "text"; text: string }
  | { kind: "flag"; flagId: string; text: string };

export type Section = {
  id: string;
  number: string;
  title: string;
  segments: ClauseSegment[];
};

export type Contract = {
  id: string;
  slug: string;
  kind: "MSA" | "Employment" | "Order Form" | "NDA" | "SOW";
  title: string;
  counterparty: string;
  received: string;
  pages: number;
  turnaroundTarget: string;
  status: "new" | "in review" | "sent";
  summary: string;
  sections: Section[];
  flags: ClauseFlag[];
};

export const CONTRACTS: Contract[] = [
  {
    id: "c-msa-acme",
    slug: "c-msa-acme",
    kind: "MSA",
    title: "Acme Corp · Master Services Agreement",
    counterparty: "Acme Corp (Wilmington, DE)",
    received: "2026-04-19",
    pages: 14,
    turnaroundTarget: "48h",
    status: "in review",
    summary:
      "Standard enterprise MSA. Three material deviations from playbook: uncapped indemnification, 7-year data-retention, and a warranty disclaimer that overrides the SLA. Recommend counter on all three.",
    sections: [
      {
        id: "s1",
        number: "1",
        title: "Services and scope",
        segments: [
          { kind: "text", text: "Supplier shall provide the Services described in each Order Form executed by the parties. Each Order Form will be governed by this Agreement and, in the event of conflict between an Order Form and this Agreement, " },
          { kind: "flag", flagId: "f-precedence", text: "the Order Form shall control" },
          { kind: "text", text: ". Supplier will perform the Services in accordance with industry-standard practice and any Service Level Agreement (SLA) specified in the applicable Order Form." },
        ],
      },
      {
        id: "s2",
        number: "4",
        title: "Warranties",
        segments: [
          { kind: "flag", flagId: "f-warranty", text: "EXCEPT AS EXPRESSLY STATED IN THIS AGREEMENT, SUPPLIER DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT" },
          { kind: "text", text: ". Supplier does not warrant that the Services will be uninterrupted or error-free. Customer's sole and exclusive remedy for any breach of warranty is termination and a pro-rata refund of prepaid fees." },
        ],
      },
      {
        id: "s3",
        number: "7",
        title: "Indemnification",
        segments: [
          { kind: "text", text: "Supplier shall defend, indemnify, and hold harmless Customer and its Affiliates from any and all third-party claims arising out of or relating to the Services, " },
          { kind: "flag", flagId: "f-indem", text: "without limitation as to amount or scope" },
          { kind: "text", text: ", provided that Customer promptly notifies Supplier of any such claim and cooperates in the defense thereof." },
        ],
      },
      {
        id: "s4",
        number: "9",
        title: "Data and retention",
        segments: [
          { kind: "text", text: "Supplier will retain Customer Data for a period of " },
          { kind: "flag", flagId: "f-retention", text: "seven (7) years following termination of this Agreement" },
          { kind: "text", text: ", after which Customer Data will be securely deleted. During such retention period, Supplier may access Customer Data solely for the purposes of responding to legal process or as otherwise required by law." },
        ],
      },
    ],
    flags: [
      { id: "f-precedence", title: "Order-Form-controls language is acceptable", severity: "ok", summary: "Standard precedence clause; Order Form controls on conflict. Consistent with playbook.", atOffset: 12 },
      { id: "f-warranty", title: "All-caps warranty disclaimer overrides the SLA", severity: "material", summary: "The ALL-CAPS disclaimer nominally survives any SLA commitment. This is a common vendor tactic; in practice it hollows out every SLA remedy downstream.", playbookDeviation: "Playbook carves the SLA out of the disclaimer explicitly.", redline: "…EXCEPT FOR OBLIGATIONS ARISING UNDER ANY SERVICE LEVEL AGREEMENT, Supplier disclaims all warranties…", atOffset: 34 },
      { id: "f-indem", title: "Uncapped indemnification", severity: "material", summary: "Supplier indemnity is uncapped as drafted. Founder is personally exposed if the cap in §11 (Limitation of Liability) is later held not to apply to indemnity obligations.", playbookDeviation: "Playbook caps indemnity at 2× fees paid in the trailing 12 months, with a mutual carve-out for IP and confidentiality breaches.", redline: "…indemnify Customer up to an amount equal to two (2) times the fees paid by Customer under the applicable Order Form in the twelve (12) months preceding the claim…", atOffset: 58 },
      { id: "f-retention", title: "7-year data retention default", severity: "material", summary: "Seven years is a tax/financial-reporting retention window, not a services-contract default. This materially increases breach exposure and creates a DSR/compliance obligation long past the services relationship.", playbookDeviation: "Playbook: 90 days with an optional 180-day extension on written request. Deletion certified within 30 days thereafter.", redline: "…for a period of ninety (90) days following termination, extensible by ninety (90) additional days upon Customer's written request, after which Customer Data will be deleted and deletion will be certified in writing within thirty (30) days…", atOffset: 78 },
    ],
  },
  {
    id: "c-emp-maya",
    slug: "c-emp-maya",
    kind: "Employment",
    title: "Maya Alves · Employment Agreement",
    counterparty: "Velocity Labs, Inc.",
    received: "2026-04-17",
    pages: 9,
    turnaroundTarget: "5 days",
    status: "new",
    summary:
      "Senior-engineer employment agreement. One material flag: invention assignment is over-broad on pre-existing IP. One advisory: non-compete is likely unenforceable in California but keep an eye on the cure provision. Everything else conforms.",
    sections: [
      {
        id: "s1",
        number: "3",
        title: "Invention assignment",
        segments: [
          { kind: "text", text: "Employee hereby assigns to Company all right, title, and interest in any and all Inventions, including, without limitation, " },
          { kind: "flag", flagId: "f-priorip", text: "any Invention whether or not made during business hours, using Company resources, or related to the business of the Company" },
          { kind: "text", text: ". Company's rights under this Section shall survive any termination of employment." },
        ],
      },
      {
        id: "s2",
        number: "6",
        title: "Non-competition",
        segments: [
          { kind: "flag", flagId: "f-noncompete", text: "Employee agrees that, during employment and for twelve (12) months thereafter, Employee will not engage in any business that competes with the Company within North America" },
          { kind: "text", text: ". The parties agree that if any provision of this Section is held unenforceable, such provision shall be modified to the minimum extent necessary to be enforceable." },
        ],
      },
    ],
    flags: [
      { id: "f-priorip", title: "Invention assignment is overbroad", severity: "material", summary: "As drafted, any weekend side project — even one unrelated to Velocity's business — is company IP. This contradicts CA Labor Code §2870 and every reasonable founder-facing playbook.", playbookDeviation: "Playbook excludes inventions made without using Company resources AND unrelated to the Company's business from the assignment.", redline: "…any and all Inventions, provided that this assignment shall not apply to any Invention that qualifies fully under the provisions of California Labor Code §2870 (i.e., made on Employee's own time, without using Company resources, and not related to the Company's business or anticipated research).", atOffset: 28 },
      { id: "f-noncompete", title: "Non-compete is likely unenforceable in CA", severity: "advisory", summary: "California broadly prohibits employee non-competes (Bus. & Prof. Code §16600). This clause is unlikely to be enforceable. The 'blue-pencil' cure provision at the end may survive in isolation; request its removal.", atOffset: 58 },
    ],
  },
  {
    id: "c-sof-harbor",
    slug: "c-sof-harbor",
    kind: "Order Form",
    title: "Harborline Logistics · Order Form",
    counterparty: "Harborline Logistics",
    received: "2026-04-15",
    pages: 4,
    turnaroundTarget: "24h",
    status: "sent",
    summary:
      "Small-logo Order Form. Clean; two advisories (auto-renew notice window, usage overage rate). Recommend accept with two small counters.",
    sections: [
      {
        id: "s1",
        number: "2",
        title: "Term and renewal",
        segments: [
          { kind: "text", text: "This Order Form will have an initial term of twelve (12) months commencing on the Effective Date and will " },
          { kind: "flag", flagId: "f-renewal", text: "automatically renew for successive twelve-month terms unless either party provides notice of non-renewal at least sixty (60) days prior" },
          { kind: "text", text: " to the end of the then-current term." },
        ],
      },
      {
        id: "s2",
        number: "4",
        title: "Usage and overage",
        segments: [
          { kind: "text", text: "Fees are based on the usage tier selected on the front page. Usage in excess of the selected tier " },
          { kind: "flag", flagId: "f-overage", text: "shall be billed at 1.5× the then-current list rate for the next higher tier" },
          { kind: "text", text: ", invoiced monthly." },
        ],
      },
    ],
    flags: [
      { id: "f-renewal", title: "Auto-renewal notice window is slightly long", severity: "advisory", summary: "60 days is standard-to-slightly-aggressive; playbook asks for 30. Not worth holding up the deal.", playbookDeviation: "Playbook: 30 days.", redline: "…provides notice of non-renewal at least thirty (30) days prior…", atOffset: 42 },
      { id: "f-overage", title: "Overage rate at 1.5× is above market", severity: "advisory", summary: "Market is 1.1×–1.2× of the next tier's list rate. At 1.5× this becomes a penalty rather than a price.", playbookDeviation: "Playbook: 1.2× maximum.", redline: "…shall be billed at 1.2× the then-current list rate for the next higher tier…", atOffset: 72 },
    ],
  },
];

export function getContract(slug: string) {
  return CONTRACTS.find((c) => c.slug === slug);
}

export function severityConfig(s: Severity) {
  return {
    material: { label: "MATERIAL", ink: "var(--redline)", soft: "var(--redline-soft)" },
    advisory: { label: "ADVISORY", ink: "var(--copper)", soft: "var(--copper-soft)" },
    ok: { label: "CONFORMS", ink: "var(--accent)", soft: "var(--accent-soft)" },
  }[s];
}

export function fmtDate(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  return d
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
    .toUpperCase();
}
