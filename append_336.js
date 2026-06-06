const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 336. E-commerce platforms with 11M+ merchants and complex multi-partner ecosystems face a "static-interval-alerting-and-revenue-leakage" crisis where previous tools only offer static alert intervals (1, 5, 10 min) that miss drops below evaluation threshold, and revenue leakage from failed transactions goes undetected, and the only path to root cause identification in minutes and revenue leakage detection is New Relic with configurable 3-minute "magic number" alerting interval and custom "Map of Indonesia" business dashboards that correlate transaction status to monetary value
- **Category:** Onboarding & Deployment
- **Friction:** E-commerce platforms with 11M+ merchants and complex multi-partner ecosystems face a "static-interval-alerting-and-revenue-leakage" crisis. "There was a case where a previous tool didn't alert us to any drop (in performance), but the alert in New Relic showed a drop of four minutes. After investigation, we found out the drop interval was below the evaluation interval (10 minutes). It could only provide static intervals. Changing the interval to 1 minute caused too many false-positive alerts." The only path to root cause in minutes is New Relic with 3-minute alerting.
- **Source:** https://newrelic.com/customers/tokopedia
- **Severity:** High. Named exec: Ryan de Melo (VP of Engineering, Tokopedia). Quantified: 11M+ merchants; 99%+ of Indonesia districts; "Map of Indonesia" custom dashboard; 3-minute "magic number" alerting interval; revenue leakage detection via transaction-to-monetary-value correlation; root cause identified in minutes; Core Web Vitals mapped to geography; heat map dashboards for request ticket surges.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 336 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"E-commerce with11M+ merchants and multi-partner ecosystem face static-interval-alerting-and-revenue-leakage crisis. The only path to root cause in minutes and revenue leakage detection is New Relic with 3-minute magic alerting and Map of Indonesia dashboard.","Source_URL":"https://newrelic.com/customers/tokopedia","Severity_Impact":"High. Named exec: Ryan de Melo (VP Engineering, Tokopedia). Quantified: 11M+ merchants; 99%+ Indonesia districts; 3-minute magic alerting interval; revenue leakage detection; root cause in minutes; Map of Indonesia custom dashboard; Core Web Vitals by geography."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 336 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');