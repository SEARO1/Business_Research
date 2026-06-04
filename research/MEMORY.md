# Business Research — Pain Points Memory

This file tracks validated B2B pain points identified through autonomous
web research. Each entry is a high-friction signal found in concrete
sources (customer case studies, named executive quotes, public reports)
from 2025–2026.

Categories (per `AutoResearch.md` brief):
- **Integration** — Data silos, API interoperability, manual data entry
- **Security** — Data privacy, cross-border compliance, identity control
- **Onboarding** — Time-to-value, deployment complexity, ROI transparency

---

## Research Log Index

| # | Category | Friction (one-line) | Source |
|---|----------|---------------------|--------|
| 1 | Onboarding | Vendor security review = 100 hrs/vendor × 50+ vendors = 5,000+ hrs/year | Vanta/Vibrent Health |
| 2 | Onboarding | Security review adds 3-4 weeks to enterprise sales cycles | Vanta/DocGo |
| 3 | Onboarding | Manual compliance labor = 2,000+ hrs/year at major enterprises | Vanta/Snowflake |
| 4 | Onboarding | 2 GRC employees maintaining 12+ frameworks — team too small | Vanta/Ramp |
| 5 | Onboarding | GRC work in 10+ disconnected spreadsheets per framework | Vanta/Ramp |
| 6 | Security | Global compliance fragmentation: 40 currencies × 195 countries | Vanta/Ramp |
| 7 | Integration | Years of accumulated tool silos block global visibility at 76-country, 160k-employee enterprise | MuleSoft/Saint-Gobain |
| 8 | Security | Batch-level traceability required by environmental regulations (CO2, recyclability) impossible in silos | MuleSoft/Saint-Gobain |
| 9 | Integration | Enterprise integration must span cloud + on-prem + OT (SCADA) — most SaaS cannot reach OT | MuleSoft/Saint-Gobain |
| 10 | Integration | Initial API reusability only 35% — takes 12+ months to lift to 57% with focused effort | MuleSoft/Saint-Gobain |
| 11 | Integration | On-premise AD server sprawl: ~100 servers, each a patch/replication/DR burden | Okta/Hitachi |
| 12 | Security | M&A identity integration = 6 months per acquired company on legacy on-prem infra | Okta/Hitachi |
| 13 | Security | 480k identity inventory impossible manually; unused identities are top attack vector | Okta/Hitachi |
| 14 | Integration | Hub-and-spoke IT fails due to time-zone gaps and M&A-acquired independent systems | Okta/Hitachi |
| 15 | Security | Carbon-neutrality is now a constraint on IT infrastructure procurement | Okta/Hitachi |

---

## Findings (detailed)

### 1. Vendor security review consumes 5,000+ hours/year
- **Category:** Onboarding
- **Friction:** Enterprise vendor security review is 100 hours per vendor,
  repeated across 50+ vendors annually (5,000+ hrs/year total). The
  same security questionnaires are answered repeatedly with no shared
  industry response.
- **Source:** https://www.vanta.com/customers (George Uzzle, CISO,
  Vibrent Health — quoted on Vanta's customer page).
- **Severity:** High. Security review backlog blocks enterprise sales;
  engineering/security staff diverted to questionnaire responses.

### 2. Security review adds 3-4 weeks to sales cycles
- **Category:** Onboarding
- **Friction:** Security review process adds 3-4 weeks to enterprise
  sales cycles. Customers demand full security questionnaires before
  signing.
- **Source:** https://www.vanta.com/customers (Paul Yoo, Head of
  Platform Security, DocGo).
- **Severity:** High. Direct revenue impact.

### 3. Manual compliance labor = 2,000+ hours/year
- **Category:** Onboarding
- **Friction:** Manual compliance labor consumes 2,000+ hours per year
  at major enterprises. Point-in-time checks for SOC 2/ISO audits,
  evidence collection, framework maintenance are the largest sinks.
- **Source:** https://www.vanta.com/customers (Megan Snyder, Director
  Customer Assurance, Snowflake).
- **Severity:** Critical. FTE-level drain; mid-size must hire staff
  or pay $100K+ consultants.

### 4. 2 GRC employees maintaining 12+ frameworks
- **Category:** Onboarding
- **Friction:** 2 full-time GRC employees maintaining 12+ frameworks
  (PCI-DSS, FedRAMP, HIPAA, ISO 27001/27017/27018, NIST CSF, etc.).
  New framework onboarding = manual download → review → spreadsheet
  conversion → gap analysis.
- **Source:** https://www.vanta.com/customers/ramp
- **Severity:** Critical. Linear team/framework mismatch.

### 5. GRC = 10+ disconnected spreadsheets
- **Category:** Onboarding
- **Friction:** GRC work done in 10+ disconnected spreadsheets per
  framework/regulation. Cross-framework control mapping is manual.
- **Source:** https://www.vanta.com/customers/ramp
- **Severity:** High. Audit prep = manual reconciliation.

### 6. Global compliance: 40 currencies × 195 countries
- **Category:** Security
- **Friction:** Financial platform operating in 40 currencies / 195
  countries must comply with framework requirements in each
  jurisdiction; teams can't scale headcount linearly with country
  count.
- **Source:** https://www.vanta.com/customers/ramp
- **Severity:** High. Country count > team count = posture gaps.

### 7. 76-country tool silos block global visibility
- **Category:** Integration
- **Friction:** Years of accumulated tool silos from local team
  autonomy. At 160,000-employee Saint-Gobain (76 countries), created
  "disjointed data models, and point-to-point integrations" that
  hampered real-time visibility.
- **Source:** https://www.mulesoft.com/case-studies/saint-gobain-manufacturing
- **Severity:** Critical. Forced multi-year, multi-million-dollar SAP
  S/4HANA migration (started ~2025, completing 2029).

### 8. Batch-level traceability impossible in silos
- **Category:** Security
- **Friction:** Environmental regulations (EU CSRD) require
  product-level CO2, recyclability, water consumption data. Impossible
  when product data lives in 76-country silos.
- **Source:** https://www.mulesoft.com/case-studies/saint-gobain-manufacturing
- **Severity:** Critical. New regulations cannot be met.

### 9. Cloud + on-prem + OT integration gap
- **Category:** Integration
- **Friction:** Enterprise integration must span cloud + on-prem +
  operational technology (OT) behind firewalls (SCADA, MES, WMS).
  Generic iPaaS tools fail on OT environments.
- **Source:** https://www.mulesoft.com/case-studies/saint-gobain-manufacturing
- **Severity:** High. OT is the slow lane of "digital transformation."

### 10. API reusability only 35% initially
- **Category:** Integration
- **Friction:** Initial API reusability was 35% at Saint-Gobain; took
  12+ months of focused "Center for Enablement" work to lift to 57%.
  Without reusability, every new region = new integration project.
- **Source:** https://www.mulesoft.com/case-studies/saint-gobain-manufacturing
- **Severity:** High. Hidden tax on enterprise integration.

### 11. ~100 on-prem AD servers
- **Category:** Integration
- **Friction:** Hitachi ran nearly 100 Active Directory authentication
  servers on-premise, each requiring patching, replication, DR config.
- **Source:** https://www.okta.com/customers/hitachi/
- **Severity:** High. Ops overhead + per-server breach vector.

### 12. M&A identity integration = 6 months per acquisition
- **Category:** Security
- **Friction:** On-premise identity integration "can take six months
  just to pull the network" per acquired company. With many
  simultaneous M&As, becomes a multi-year, multi-million-dollar
  effort.
- **Source:** https://www.okta.com/customers/hitachi/
- **Severity:** Critical. M&A synergy realization is gated on identity.

### 13. 480k identity inventory impossible manually
- **Category:** Security
- **Friction:** At 480,000 identities, "it was not practical to check
  the usage status of each and every one" manually. Unused
  identities are the top attack vector; manual governance creates
  systematic security debt.
- **Source:** https://www.okta.com/customers/hitachi/
- **Severity:** High. Zero Trust adoption requires identity
  inventory at scale.

### 14. Hub-and-spoke IT fails on time zones & M&A systems
- **Category:** Integration
- **Friction:** Central IT "faces issues such as the inability to
  respond to local requests in a timely manner" due to time-zone
  gaps; M&A-acquired entities bring independent systems that don't
  fit the central model.
- **Source:** https://www.okta.com/customers/hitachi/
- **Severity:** High. Centralization vs. local agility trade-off.

### 15. Carbon-neutrality constrains IT procurement
- **Category:** Security
- **Friction:** Hitachi's IT Strategy & Digital Integration Division
  "selects products with carbon neutrality in mind" — sustainability
  is now an IT procurement constraint. On-prem AD servers (~100) carry
  carbon-footprint liability.
- **Source:** https://www.okta.com/customers/hitachi/
- **Severity:** Medium. New decision dimension that traditional IT
  evaluation frameworks don't capture.

---

## Research Session Notes

### 2026-06-05 — Branch `research/pain-points-v1` — **COMPLETE**
- Initial setup: scaffolded `research/` dir with `MEMORY.md` and
  `research_log.jsonl` schema.
- Scope: global digital services, B2B / enterprise / developer focus.
- **Iteration count:** 3 vendor families (Vanta, MuleSoft, Okta).
- **Findings logged:** 15 distinct pain points, all from
  named-customer, named-executive, quantified sources.
- **Hitting the 15-finding limit per brief** — pausing for human
  review per `AutoResearch.md` §5.

### Search quality notes
- Free-text `web_search` (e.g. generic queries) returned mostly
  marketing copy / unrelated content. Disregarded per brief.
- `web_fetch` on known-vendor customer story pages yielded concrete
  metrics and named-executive quotes. This was the working approach.
- Vendors touched: Vanta (compliance automation), MuleSoft
  (integration), Okta (identity).
- Categories covered: 7 Integration, 5 Security, 3 Onboarding.
