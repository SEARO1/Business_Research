const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 242. Global automotive manufacturers with independently managed facilities across multiple sites face a "three-months-to-compile-global-architecture-reports" crisis where spreadsheet-and-email-based tracking produces labor-intensive reports that are out of date by the time they're delivered, and the only path to 90% reporting-time reduction is ServiceNow CMDB + ITOM Discovery with real-time OS support status, security status, and development costs on a single screen
- **Category:** Integration
- **Friction:** Global automotive manufacturers with independently managed facilities across multiple sites face a "three-months-to-compile-global-architecture-reports" crisis where spreadsheet-and-email-based tracking produces labor-intensive reports that are out of date by the time they're delivered. "Producing an accurate report on the state of global enterprise architecture took as long as three months. Teams relied on spreadsheets and email, a process that was labor-intensive and prone to errors." "By the time we'd pulled the information together, it was often out of date." The only path to 90% reporting-time reduction is ServiceNow CMDB + ITOM Discovery with real-time OS support status, security status, and development costs on a single screen.
- **Source:** https://www.servicenow.com/customers/nissan.html
- **Severity:** High. Named execs: Kenichi Yomogizawa (General Manager, Global Enterprise Architecture Department, Nissan), Naoyuki Ujiie (Deputy General Manager & Chief IS Architect, Nissan), Subana Thanasegaran (Assistant Manager, Digital Transformation Promotion Department, Nissan). Quantified: 90% reduction in global architecture reporting time (3 months → 1 week); real-time OS support end dates visible on single screen; development and operational costs visible; security status visible in real time; ServiceNow CMDB + ITOM Discovery; ServiceNow Enterprise Architecture; API-based external system integration; agentic AI (Now Assist) for proactive system upgrade proposals.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 242 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Integration","Specific_Friction":"Global automotive manufacturers with independently managed facilities face a three-months-to-compile-global-architecture-reports crisis where spreadsheet-and-email-based tracking produces labor-intensive reports that are out of date by the time they are delivered. The only path to 90% reporting-time reduction is ServiceNow CMDB + ITOM Discovery with real-time visibility on a single screen.","Source_URL":"https://www.servicenow.com/customers/nissan.html","Severity_Impact":"High. Named execs: Kenichi Yomogizawa (General Manager, Global Enterprise Architecture, Nissan), Naoyuki Ujiie (Deputy General Manager & Chief IS Architect, Nissan), Subana Thanasegaran (Assistant Manager, Digital Transformation, Nissan). Quantified: 90% reduction in global architecture reporting time (3 months to 1 week); real-time OS support end dates, security status, and development costs visible on single screen; ServiceNow CMDB + ITOM Discovery."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (242) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');