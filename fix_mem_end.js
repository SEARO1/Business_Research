const fs = require('fs');
const content = fs.readFileSync('C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md', 'utf8');
const marker = "Finance is now viewed as a strategic partner instead of a back-office function.'";
const idx = content.lastIndexOf(marker);
const before = content.substring(0, idx + marker.length);
const after = `

### 107. Legacy brands building DTC with small teams supporting multiple brands face an execution-only trap where all bandwidth goes to execution and there is no time for strategic thinking
- **Category:** Onboarding
- **Friction:** Legacy brands building DTC channels with small ecommerce teams supporting multiple brands face an execution-only trap: without AI assistance, all team bandwidth goes to execution and there is no time for strategic thinking. 'We needed something that could help us think, not just execute.' Accumulated product collections across brands create discoverability problems no one has bandwidth to fix. Cross-brand customer behavior unknown — teams don't know if customers shop across labels interchangeably vs loyal to one brand, making merchandising strategy guesswork.
- **Source:** https://www.shopify.com/case-studies/maggy-london
- **Severity:** High. Named exec: Sara Bako (President), Maggy London (46-year-old, 6 brands). Quantified: 80% reporting reduction (3-4 hrs → 20-30 min); 21/30 days Sidekick usage (near-daily, full team); 199 collections audited; bot attack detected; Q3 buy road map. Quote: 'I view Sidekick almost like an additional team member.' 'Sidekick turned our ecom team into a strategic intelligence hub for the whole company.'

### 110. Global companies scaling rapidly face spend fragmentation where every team or region has its own card program, separate travel booking, vendor procurement, and expense management in disconnected systems
- **Category:** Integration
- **Friction:** Global companies scaling rapidly face spend fragmentation where every team or region has its own card program, separate travel booking, vendor procurement, and expense management in disconnected systems. Reconciliation is manual and inconsistent — some books close quickly, others drag on for days. With no connected expense workflow there is no consistent way to ensure employees book within policy, no centralized visibility into who is spending what, and post-event reimbursements flood in. 'You're wrapping a big project, you get home, and you have a pile of receipts and expenses to go through — logging them, photographing them, cataloging them. That friction takes you away from the deep creative process.' Without unified spend management, global scale amplifies every friction point proportionally.
- **Source:** https://www.brex.com/resources/customer/canva
- **Severity:** Critical. Named execs: Rudy Batts (Head of Global Spend, Canva), Jimmy Knowles (Global Head of Experiential Marketing, Canva), Sandy Cozy (Administrative Business Partner to CFO, Canva). Quantified: 10+ card programs consolidated into one; operations in 190+ countries; 30+ currencies supported vs 3 previously; Canva Create 6,000 attendees, 600 employees traveling; manual reconciliation eliminated; policy-compliant travel booking embedded in Navan.

### 111. Finance teams processing high-volume prepayments face a crushing daily workload where every wire must be manually set up individually — consuming hours per day, with teams working until 2 AM during peak season
- **Category:** Integration
- **Friction:** Finance teams processing high-volume prepayments face a crushing daily workload when every wire must be manually set up individually — entering amounts, saving, exiting, initiating, approving — consuming 2 to 3 hours of the CFO's day alone plus the controller's time. During peak season this becomes unsustainable, with teams working until 2 AM just to process the day's payments. At $30 per wire, the cost alone is significant but the time cost is worse — the entire finance team capacity is consumed by data entry instead of financial analysis. Without automation, prepayment businesses hit a scaling ceiling where adding volume requires adding headcount linearly.
- **Source:** https://www.brex.com/resources/customer/oneflight-international
- **Severity:** Critical. Named exec: Hanno Uys (CFO, ONEflight International). Quantified: 4 hours/day saved; 27K/month wire fees eliminated; 30 wires/day at 20K average; 1M credit limit received; bank account approved overnight; controller review time cut from hours to minutes; QuickBooks plug-and-play integration.
`;
fs.writeFileSync('C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md', before + after);
console.log('Done. New length:', (before + after).length);
console.log('Entries at end: 107, 110, 111');
