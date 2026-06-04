# Research — Master Index

This is the **cross-session** master index for the autonomous B2B
research program defined in
[`research/AutoResearch.md`](research/AutoResearch.md). Session
findings live in `research/MEMORY.md` and `research/research_log.jsonl`.
This file tracks program-level state: what sessions ran, what's open
for review, what's the next direction.

---

## Program State

- **Brief:** `research/AutoResearch.md` (the rules, the focus areas,
  the iteration limit, the play style).
- **Findings ledger:** `research/MEMORY.md` (human-readable index +
  detailed subsections).
- **Machine mirror:** `research/research_log.jsonl` (one JSON object
  per line; keep in sync with `MEMORY.md`).
- **Owner:** Kenny Cheung
- **Researcher:** Nova (autonomous agent)
- **Started:** 2026-06-05

## Session Log

| # | Branch | Date | Findings | Status | Top sources |
|---|--------|------|----------|--------|-------------|
| 1 | `research/pain-points-v1` | 2026-06-05 | 15 | ✅ Paused (hit §5 limit, awaiting human review) | Vanta, MuleSoft, Okta customer stories |

## Findings Tally (all sessions)

- **Total findings:** 15
- **By category:**
  - Integration: 7
  - Security: 5
  - Onboarding: 3
- **By source vendor family:**
  - Vanta (compliance automation): 6
  - MuleSoft (integration): 4
  - Okta (identity): 5

See `research/MEMORY.md` for the full per-finding detail.

## Open Items for Human Review

Awaiting Kenny's review of Session 1 (15 findings on
`research/pain-points-v1`):

- **Quality OK?** Any to drop or rewrite?
- **Next direction?** (proposed: Workato/Tray.io for more Integration
  findings; Drata/Tugboat Logic for Onboarding; Auth0/1Password for
  Security; or vertical-specific: HealthTech, FinTech, public-sector
  SaaS.)
- **PR / merge?** Session 1 is on a feature branch; want it merged to
  `main` or kept separate?

## File Layout

```
RESEARCH.md                          ← this file (master index, stays on main)
research/
├── AutoResearch.md                  ← the brief, rules, play style
├── MEMORY.md                        ← per-session human-readable findings
└── research_log.jsonl               ← per-session machine-readable mirror
```

## Update Discipline

- `RESEARCH.md` updates go to `main` via a PR from a session branch.
- `research/AutoResearch.md` is updated when the brief / rules /
  play style change. New rules land here first; the master index
  references them.
- Session branches (`research/<topic>-v<n>`) hold the
  `MEMORY.md` + `research_log.jsonl` changes for that session.
  They do not get deleted — they're the audit trail of how each
  finding was sourced.
