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
   examples, or technical complaints? If yes, it is a valid finding. If
   it is just generic marketing copy, discard it.
4. **Synthesize:** Extract the core technical or business friction point.

## 4. Output Format (`research_log.jsonl` / `MEMORY.md`)

For every validated finding, append an entry using this structure:

- **Pain_Point_Category:** (Integration / Security / Onboarding)
- **Specific_Friction:** (1-2 sentences describing the exact user struggle)
- **Source_URL:** (Where the data was found)
- **Severity/Impact:** (How this prevents product adoption)

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
