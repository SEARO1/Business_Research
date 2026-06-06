const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 337. Energy infrastructure companies with 100+ applications and 50 engineers running 24/7 fueling operations face a "15-minute-log-in-and-1-hour-troubleshoot" crisis where engineers previously had to log into each system, collect data, and investigate logs across disparate tools, and without unified data it was very hard to see error source, number, and timestamp, and the only path to 75% troubleshooting time reduction and proactive alerting before things break is New Relic with log management, synthetic monitors across 3 regions, and single-pane-of-glass visibility from the last hour to the last year
- **Category:** Onboarding & Deployment
- **Friction:** Energy infrastructure companies with 100+ applications and 50 engineers running 24/7 fueling operations face a "15-minute-log-in-and-1-hour-troubleshoot" crisis. "Whenever we had any application performance issue, we had to log into the system, look at the logs, and then try to troubleshoot what the timeframe was." It took at least 15 minutes just to log in, collect data, and investigate logs. Without unified data, it was very hard to see error source, number, and timestamp. The only path to 75% reduction is New Relic with log management and synthetic monitoring.
- **Source:** https://newrelic.com/customers/world-kinect
- **Severity:** High. Named execs: Sunith Ravindran (VP of Applications, World Kinect); Vaidehi Chaukulkar (Cloud Engineer II, World Kinect); Jenish Patel (Automation Engineer, World Kinect). Quantified: 75% reduction in troubleshooting time (1 hour to 15 minutes); 100+ applications monitored by 50+ engineers; error identification reduced from 2 hours to 30-60 minutes; synthetic script running every hour across 3 regions; AWS cloud environment; log management with alerts pinpointing exact logs.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 337 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Energy companies with100+ apps and 50 engineers face 15-min-log-in-1-hr-troubleshoot crisis. The only path to 75% troubleshooting reduction and proactive alerting is New Relic with log management and synthetic monitoring across3 regions.","Source_URL":"https://newrelic.com/customers/world-kinect","Severity_Impact":"High. Named execs: Sunith Ravindran (VP Applications); Vaidehi Chaukulkar (Cloud Engineer II); Jenish Patel (Automation Engineer, World Kinect). Quantified: 75% troubleshooting reduction (1hr to 15min); 100+ apps by 50 engineers; error ID from 2hrs to 30-60min; synthetic monitors every hour across 3 regions; AWS."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 337 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');