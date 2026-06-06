const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 331. iGaming platform providers with 300+ global regulated operator clients and multi-cloud distributed infrastructure face a "big-divide-between-dev-and-ops-and-numerous-potential-failure-points" crisis where software doesn't always do what developers intended, every failure point translates to lost revenue, and tier-1 lotteries require strict verifiable metrics, and the only path to 25% MTTR reduction and 95% of incidents viewed in one dashboard is New Relic with golden signal monitoring (throughput, latency, error rate) and anomaly detection for proactive out-of-hours alerting
- **Category:** Onboarding & Deployment
- **Friction:** iGaming platform providers with 300+ global clients and multi-cloud infrastructure face a "big-divide-between-dev-and-ops-and-numerous-potential-failure-points" crisis. "Traditionally, there's been a big divide between development and operations. Software sometimes has a mind of its own. It doesn't always do what developers intended." For tier-1 lotteries, strict verifiable requirements must be met. The only path to 25% MTTR reduction is New Relic with golden signal monitoring.
- **Source:** https://newrelic.com/customers/everymatrix
- **Severity:** High. Named execs: Alex Bularca (Senior Systems Architect, EveryMatrix); Mihnea Dobre (Group CTO, EveryMatrix); Tibi Guiu (Head of IT Governance, EveryMatrix). Quantified: 300+ global regulated operator and lottery clients; 25% reduction in MTTR; 95% of incidents viewed in one dashboard; golden signals (throughput, latency, error rate); anomaly detection reduced out-of-hours workload; transactional journey across distributed infrastructure; tier-1 state lottery requirements met via New Relic metrics.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 331 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"iGaming platform providers with300+ global clients face dev-ops-divide-and-numerous-failure-points crisis. The only path to 25% MTTR reduction and 95% incidents in one dashboard is New Relic with golden signal monitoring and anomaly detection.","Source_URL":"https://newrelic.com/customers/everymatrix","Severity_Impact":"High. Named execs: Alex Bularca (Sr Systems Architect); Mihnea Dobre (Group CTO); Tibi Guiu (Head of IT Governance, EveryMatrix). Quantified: 300+ global clients; 25% MTTR reduction; 95% incidents in one dashboard; golden signals (throughput/latency/error rate); anomaly detection for proactive alerting; tier-1 lottery requirements met."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 331 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');