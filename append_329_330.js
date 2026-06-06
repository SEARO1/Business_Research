const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 329. Quick-service restaurant chains with millions of pizza deliveries and complex SRE requirements face a "no-observability-for-SRE-function" crisis where without a unified portal for SLI/SLO compliance, pizza delivery times suffer and growth ambitions are constrained, and the only path to 99.6% availability and getting pizza to customers quicker is New Relic with service level management that codifies SLI configurations and tracks error budgets in real time
- **Category:** Onboarding & Deployment
- **Friction:** Quick-service restaurant chains with millions of deliveries face a "no-observability-for-SRE-function" crisis. "We wanted to future-proof Domino's Pizza Group with a new platform that supports our growth ambitions by introducing a composable architecture of best-in-breed technologies." The only path to 99.6% availability is New Relic with SLI/SLO management.
- **Source:** https://newrelic.com/customers/dominos
- **Severity:** High. Named exec: Patrick Hyland (Senior Engineering Manager, Domino's Pizza UK & Ireland). Quantified: 99.6% availability target; SLI compliance codified in New Relic; error budget tracking; service level management product; SRE function with golden signal monitoring.

### 330. Betting and gaming companies with 5.2M daily online transactions and 5.1M daily price changes face an "unreliable-monitoring-overnight-failures-and-untenable-MTTR" crisis where previous monitoring tools repeatedly failed overnight and every minute of downtime costs thousands of customers, and the only path to 80% MTTR improvement and 25% faster P1 incident resolution is New Relic with Impact Listener that correlates revenue loss to technical incidents in real time
- **Category:** Onboarding & Deployment
- **Friction:** Betting and gaming companies with 5.2M daily transactions face an "unreliable-monitoring-overnight-failures-and-untenable-MTTR" crisis. "We knew we needed to replace what we had. It just wasn't cutting the mustard. We needed something that was easy to use, reliable, stable, and elastic." "If we lose a minute, we lose thousands of customers." The only path to 80% MTTR improvement is New Relic with Impact Listener for real-time revenue impact correlation.
- **Source:** https://newrelic.com/customers/william-hill
- **Severity:** Critical. Named exec: Stephen Wild (Engineering Manager for Observability and Automation, William Hill). Quantified: 5.2M online transactions/day; 5.1M price changes/day (74% more than Amazon UK highest day); 80% improvement in MTTR; 25% improvement in resolving P1 incidents within 60 minutes; 100% reliability with no downtime; Grand National = 5 Saturdays; Impact Listener for real-time revenue correlation; PagerDuty integration.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (329-330) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"QSR chains with millions of deliveries face no-observability-for-SRE crisis. The only path to 99.6% availability and faster pizza delivery is New Relic with SLI/SLO management and error budget tracking.","Source_URL":"https://newrelic.com/customers/dominos","Severity_Impact":"High. Named exec: Patrick Hyland (Sr Engineering Manager, Domino\'s Pizza UK & Ireland). Quantified: 99.6% availability; SLI compliance in New Relic; error budget tracking; service level management; SRE golden signal monitoring."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Betting/gaming cos with 5.2M transactions/day face unreliable-monitoring-and-untenable-MTTR crisis. The only path to 80% MTTR improvement and 25% P1 resolution improvement is New Relic with Impact Listener for real-time revenue correlation.","Source_URL":"https://newrelic.com/customers/william-hill","Severity_Impact":"Critical. Named exec: Stephen Wild (Eng Manager Observability & Automation, William Hill). Quantified: 5.2M online transactions/day; 5.1M price changes/day (74% more than Amazon UK); 80% MTTR improvement; 25% P1 incident resolution improvement; 100% reliability; no downtime."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (329-330) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');