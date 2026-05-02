# Quire — Contract review for founders

>  Paste an MSA or SOW; get plain-English flags on the material clauses, with playbook-driven redlines.

## M0 — Design direction (LOCKED)

### Reference vibe
**Ironclad + Ramp legal docs + Instrument Nursing Sans marketing** — restrained, confident, document-first. No legal-pad cliché; no typewriter serif cliché. Cream paper, deep ink, forest-green positive signals, blood-red redlines.

### Typography
- **Display**: Cormorant Garamond — ornate classical serif (distinct from EB Garamond, Newsreader, Fraunces, Source Serif).
- **Body + UI**: Lato — humanist sans, first use in the portfolio.
- **Mono**: IBM Plex Mono.

### Layout
- **Side-by-side contract viewer**: original left, redlined right. Synchronized scroll.
- Top bar with clause navigator (dots across the top representing each flagged clause).
- Right drawer with plain-English explainer + playbook-diff.
- First portfolio project with a *document-centric* layout (not canvas, not timeline, not graph).

### Palette
- `--paper`: `#fbf8f1` (cream)
- `--paper-2`: `#f2ecdf`
- `--card`: `#ffffff`
- `--ink`: `#1a1a1a`
- `--ink-2`: `#4d4d4d`
- `--ink-3`: `#8a8a8a`
- `--line`: `#e3dbc7`
- `--accent`: `#2e5c3a` (forest — accepted clauses, positive signals)
- `--redline`: `#9e2e2e` (blood — proposed redlines, risky clauses)
- `--copper`: `#a5673f` (highlights, callouts)

## Audience
Startup founders, operators, COOs, solo GCs at growth-stage companies.

## Real problem
A founder gets an MSA, a SOW, or a vendor NDA. Material review costs $300/hour at an outside firm. 80% of contracts only need a human on 3–4 clauses. Quire reads the contract, compares against a playbook, flags each material clause with a severity, explains in plain English, and drafts a counter. Legal-tech incumbents (Ironclad, Icertis) are enterprise CLMs — they require a rollout. Quire is for the founder with the PDF open right now.

## Stack
- Next 16 static export + Cloudflare Workers
- Cormorant Garamond + Lato + IBM Plex Mono
- framer-motion + lucide-react

## Landing page requirements
1. **Animated hero diagram**: A contract page redlining itself on a loop. A cursor highlights a clause; a plain-English balloon fades in; a red strikethrough materializes; a green "accept" proposed alternative slides in beside it. Repeats for three clauses.
2. **Inline product component**: A real `ContractViewer` with 3 sample contracts (MSA, Employment Agreement, SaaS Order Form) tabbable — real clause navigator, real redline, real explainer drawer.

## Milestones (compact)
- M0 — Design direction (this doc)
- M1 — Scaffold + landing + deploy
- M2 — /app contract viewer
- M3 — Push + memory close-out
