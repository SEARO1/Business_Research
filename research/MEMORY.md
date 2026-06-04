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
| 16 | Integration | In-house identity needs 8-10 dedicated FTE to maintain ("patch, secure, update") | Auth0/Dunelm |
| 17 | Integration | Legacy identity without industry auth standards blocks integration at 200+ downstream entities | Auth0/NHS Leadership Academy |
| 18 | Onboarding | Public-sector procurement for new identity vendor = 5+ months of formal business case | Auth0/NHS Leadership Academy |
| 19 | Integration | Identity must serve B2B + B2E + B2C + M2M; "in the millions" of M2M connections at Dunelm | Auth0/Dunelm |
| 20 | Security | Vendor API rate limits surface at runtime without warning, mid-production incident | Auth0/GrandVision |

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

### 16. In-house identity needs 8-10 FTE
- **Category:** Integration
- **Friction:** Homegrown identity solutions require multi-team
  ongoing maintenance ("a couple of teams" to keep it "always secure,
  patched, and up to date"). Estimated cost: **8-10 dedicated
  security experts and developers**.
- **Source:** https://auth0.com/case-studies/dunelm
- **Severity:** High. Hidden FTE tax of 8-10 employees just to
  maintain identity infrastructure.
- Source: Antony Sohal, Head of Data Platforms, Dunelm.

### 17. Legacy identity blocks integration at 200+ NHS trusts
- **Category:** Integration
- **Friction:** Legacy apps without industry auth standards cannot
  integrate with 200+ downstream trusts' varied identity systems.
  NHS Leadership Academy's old system "didn't follow any of the
  industry authentication and authorization standards" and was
  "tough to integrate."
- **Source:** https://auth0.com/case-studies/nhs-leadership-academy
- **Severity:** Critical for regulated, multi-stakeholder orgs. SSO
  absence forces per-trust bespoke integration.
- Source: Ishani Vardhan, Digital Delivery Lead, NHS Leadership Academy.

### 18. 5-month procurement cycles in public sector
- **Category:** Onboarding
- **Friction:** Public-sector procurement for new identity vendors
  takes 5+ months. "Formal business case" required "user stories and
  cost-benefit analyses showing what we'd do with the product."
- **Source:** https://auth0.com/case-studies/nhs-leadership-academy
- **Severity:** High. Time-to-value dominated by procurement, not
  technical onboarding.
- Source: Ishani Vardhan, Digital Delivery Lead, NHS Leadership Academy.

### 19. Identity must span B2B / B2E / B2C / M2M
- **Category:** Integration
- **Friction:** Identity must serve multiple audiences with separate
  requirements: B2B (external suppliers), B2E (internal staff +
  ADFS), B2C (customer checkout), M2M (microservice auth). Dunelm
  has "in the millions" of M2M connections alone.
- **Source:** https://auth0.com/case-studies/dunelm
- **Severity:** High. Single product that can't span all four
  forces 2-4 separate identity systems per org.
- Source: Antony Sohal, Head of Data Platforms, Dunelm.

### 20. Vendor API rate limits surface at runtime without warning
- **Category:** Security
- **Friction:** Vendor API rate limits surface at runtime without
  warning, forcing mid-production incident response. GrandVision
  "encountered an API limit that they were previously unaware of"
  and needed vendor support to resolve in hours.
- **Source:** https://auth0.com/case-studies/grandvision
- **Severity:** Medium. Unannounced rate limits can cause
  customer-facing outages misattributed to buyer's implementation.
- Source: Kunal Chakraborty, Global VP Customer Experience & Digital,
  GrandVision.

---

## Research Session Notes

### 2026-06-05 — Branch `research/pain-points-v1` — **COMPLETE (Mode A)**
- Initial setup: scaffolded `research/` dir with `MEMORY.md` and
  `research_log.jsonl` schema.
- Scope: global digital services, B2B / enterprise / developer focus.
- **Iteration count:** 3 vendor families (Vanta, MuleSoft, Okta).
- **Findings logged:** 15 distinct pain points, all from
  named-customer, named-executive, quantified sources.
- Supplanted by Mode B switch on 2026-06-05.

### 2026-06-05 — Branch `research/auth0-identity-v1` — **Mode B**
- **Mode:** B (autonomous evaluation) — first session under the new
  operating mode.
- **Vendor family:** Auth0 (Okta Customer Identity / CIAM).
- **Customer case studies:** Dunelm, NHS Leadership Academy, GrandVision.
- **Findings logged:** 5 (numbered 16–20).
- **Skipped vendors in this iteration:** Stripe (marketing page lacked
  pain-before-vendor patterns); Drata (Cloudflare block); Workato
  (404 on case study URL patterns). Logged to saturation heuristics.
- **Search quality notes:**
  - Auth0 case studies are written as **`.md` raw markdown** at
    predictable paths (`auth0.com/case-studies/<name>.md`). This is
    a great target shape.
  - Skipped vendors are valuable negative data — they tell us where
    not to spend time.

### Saturation note
Session 1 yielded 15/15 high-quality findings from 3 vendors (avg 5/session).
Session 2 yielded 5/5 from 1 vendor (Auth0). Stripe yielded 0/5
(marketing page, no pain-before patterns). Drata & Workato were
unreachable (Cloudflare + 404). The diminishing-returns threshold
(>2 vendors yielding <3 findings) has not yet tripped, but I'm
watching it.
