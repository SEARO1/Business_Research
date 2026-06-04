# OpenClaw Autonomous Research Brief: Global Service Pain Points

## 1. Objective

Conduct continuous, autonomous web research to identify, validate, and
document the most critical customer pain points preventing the adoption
or scaling of new global digital services. Acting as a product research
analyst for a B2B enterprise service launch.

## 2. Research Focus Areas

Focus on these three enterprise software challenges only:

1. **Legacy System Integration:** Data silos, lack of API
   interoperability, and manual data entry bottlenecks.
2. **Security and Governance:** Data privacy concerns, compliance across
   borders, and identity control friction.
3. **Onboarding & Deployment:** Time-to-value, complex software
   rollouts, and lack of ROI transparency.

## 3. Execution Loop (The "Experiment")

For each iteration:

1. **Hypothesize:** Select a specific sub-niche (e.g., "AI deployment
   security pain points in B2B SaaS").
2. **Search:** Execute web queries to find recent (2025-2026) reports,
   Reddit threads, GitHub discussions, or enterprise blogs discussing
   this specific pain point.
3. **Evaluate:** Does the source provide concrete metrics, real-world
   examples, or technical complaints? If yes, it is a valid finding.
   If it is just generic marketing copy, discard it.
4. **Synthesize:** Extract the core technical or business friction point.

## 4. Output Format

### 4.1 Two-file mirror rule (2026-06-05 update)

**`MEMORY.md` is the primary human-readable view.** It must contain:

- A research log index table (one row per finding: #, category,
  one-line friction, source).
- A "Findings (detailed)" section with one subsection per finding,
  restating the friction in plain language, quoting the source,
  and grading severity.
- A "Research Session Notes" section at the bottom with the date,
  branch, vendor families touched, and search-quality notes for the
  current session.

**`research_log.jsonl` is a machine-readable mirror.** One JSON
object per line, with these keys exactly:

```
Pain_Point_Category, Specific_Friction, Source_URL, Severity/Impact
```

**The two files must stay in sync.** Every entry in `MEMORY.md`'s
index must have a corresponding JSONL line, and vice versa. After
each iteration:

1. Append the new entry to `research_log.jsonl` first (raw capture).
2. Update `MEMORY.md`'s index + add the detailed subsection.
3. Run a `wc -l` sanity check to confirm counts match.
4. Commit + push the iteration's bundle as one atomic change.

### 4.2 Why a mirror and not just one file

`jsonl` is correct for machine consumption (downstream tools, future
training data, automated dashboards), but its raw one-object-per-line
structure is hard for humans to scan, especially when comparing 10+
findings side-by-side. The `.md` table is the form humans actually
read; the `.jsonl` is the form tools consume. Both are first-class
artifacts, neither is the "real" one and the other a derivative.

## 5. Constraints & Boundaries

- **No Hallucinations:** Only log pain points explicitly found in
  search results.
- **B2B Focus:** Ignore B2C complaints (e.g., individual consumer
  refund issues). Focus on enterprise, developer, and organizational
  friction.
- **Tone:** Analytical, concise, and focused on actionable technical
  or business process bottlenecks.
- **Iteration Limit:** Pause and request human review after compiling
  15 distinct, high-quality pain points.

## 6. Source-Quality Bar (added 2026-06-05)

A finding is logged only when the source provides ALL of:

- **Named source:** A specific company, product, or named-customer
  story (not "a Fortune 500 company says...").
- **Named executive / author:** A specific individual with a title
  (e.g., "CISO of Vibrent Health", "EMEA CIO of Saint-Gobain"),
  not anonymous quotes.
- **Quantified metric:** A concrete number, percentage, or time span
  (e.g., "100 hours per vendor", "6 months per M&A identity
  integration", "2,000 hours per year"). Generic "saves time"
  without numbers does not clear the bar.

If a source fails any of these three, discard it (per §3.3) and try a
different source.

## 7. Current Play Style (documented 2026-06-05)

The current way we run this brief in practice, distilled from the
first session (15 findings, branch `research/pain-points-v1`).

### 7.1 Session lifecycle

For each research session (target: 5–15 findings):

1. **Pick a vendor family** to scout (e.g., Vanta, MuleSoft, Okta).
2. **`web_fetch` the vendor's customer-stories index page.**
   These pages list named customers, executives, headlines, and
   pre-built filter URLs (compliance type, industry, region, employee
   count). 1 fetch typically reveals 20+ candidate pain points.
3. **For each promising customer, `web_fetch` the individual case
   study page.** Look for: named pain before the vendor was adopted,
   concrete metrics, named executives, multiple frameworks/scale.
4. **Synthesize each finding** into the four-field format (§4.1).
   Strip out the vendor's product name from the friction description
   — we are documenting the underlying pain, not endorsing the
   vendor's solution.
5. **Append to `research_log.jsonl` + update `MEMORY.md`** for each
   finding, in that order (§4.1).
6. **Hit 15 high-quality findings → pause** for human review (§5).
7. **Commit + push** to a per-session branch
   (`research/<topic>-v<iteration>`) per the project-wide rule.

### 7.2 Tool selection rules (learned from session 1)

- **`web_search` is unreliable for this brief.** It returns mostly
  vendor marketing copy, unrelated technical docs, and search-
  engine-spam pages. **Do not rely on free-text `web_search` as the
  primary discovery tool.**
- **`web_fetch` on known-vendor customer-story pages is the working
  approach.** It yields named-exec quotes, quantified metrics, and
  multiple-franchise coverage in one go.
- **Other working sources** (when customer-stories are exhausted):
  Reddit threads (use specific subreddit queries like
  `site:reddit.com/r/sysadmin`); Hacker News threads via
  `web_fetch` on `news.ycombinator.com`; GitHub issues/discussions
  via `web_fetch`; specific enterprise blogs (Vanta, Drata, Stripe,
  Linear changelogs).

### 7.3 Per-part branch discipline

- Each research session is a new branch:
  `research/<topic-slug>-v<n>`. The base is `main`; we don't stack
  sessions on top of each other.
- Within a session, **multiple commits are fine** (scaffold →
  finding batches → final). Each commit should be a logical unit.
- Push after every meaningful checkpoint, not only at the end of
  the session. The remote is the source of truth, not local.
- The `RESEARCH.md` master index at repo root stays on `main`
  (updated via PR/merge from a session branch) so reviewers can
  see the latest cross-session state without checking out individual
  branches.

### 7.4 What "high-quality" means in practice

Concretely, a finding clears the bar when:

- A reviewer can immediately name the company, the executive, the
  metric, and the date.
- The friction is one that a product team can act on (i.e., a
  "we need to build X" implication is visible).
- The finding is not a duplicate of one already logged in
  `MEMORY.md` (deduplicate by exact target audience, not by
  wording).

Findings that do NOT clear the bar (do not log, do not pad to hit
15):

- "Companies want better security" (no metric, no exec, generic).
- "Users complain about onboarding" (no source, no quote).
- Quotes from vendor marketing pages that read like ad copy
  ("Vanta is the one-stop shop" — discard).
