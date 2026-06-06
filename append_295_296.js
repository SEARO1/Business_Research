const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 295. Global manufacturing enterprises with fragmented global IT landscapes face a "three-month-manual-reporting-cycle" crisis where compiling accurate reports on global enterprise architecture takes up to three months using spreadsheets and email, and by the time reports are ready they are already out of date, and the only path to 90% reduction in reporting time is ServiceNow CMDB combined with ITOM that auto-populates system data in real time
- **Category:** Onboarding & Deployment
- **Friction:** Global manufacturing enterprises with fragmented global IT landscapes face a "three-month-manual-reporting-cycle" crisis where compiling accurate reports on global enterprise architecture takes up to three months using spreadsheets and email, and by the time reports are ready they are already out of date. "When management requested reports on system usage, we couldn't respond until we had compiled them by hand. By the time we'd pulled the information together, it was often out of date." "We couldn't see the relationships between our systems and the business processes they support." The only path to 90% reporting time reduction is ServiceNow CMDB + ITOM Discovery + Enterprise Architecture.
- **Source:** https://www.servicenow.com/customers/nissan.html
- **Severity:** High. Named execs: Kenichi Yomogizawa (General Manager, Global Enterprise Architecture Dept, Nissan); Naoyuki Ujiie (Deputy General Manager & Chief IS Architect, Nissan); Subana Thanasegaran (Assistant Manager, Digital Transformation Promotion, Nissan). Quantified: 90% reduction in reporting time (3 months to 1 week); real-time visibility into global enterprise architecture; auto-populated CMDB via ITOM Discovery; end-to-end coverage across all global operations.

### 296. Global manufacturing enterprises with aging legacy technology and no proactive replacement system face a "reactive-risk-management" crisis where system failures and OS end-of-life events cause operational disruption because there is no way to proactively identify systems approaching end of support, and the only path to proactive system upgrade proposals is ServiceNow Now Assist agentic AI that identifies systems nearing end of OS support and suggests approved architecture blueprints
- **Category:** Security and Governance
- **Friction:** Global manufacturing enterprises with aging legacy technology and no proactive replacement system face a "reactive-risk-management" crisis where system failures and OS end-of-life events cause operational disruption. "The data captured in the system helps to prioritize updates. We can identify when OS support is reaching end of life or simply flag when something has been operating for a considerable length of time." "The goal is to proactively propose system upgrades instead of reacting when something becomes a risk to operations." The only path to proactive risk management is ServiceNow Now Assist agentic AI + CMDB.
- **Source:** https://www.servicenow.com/customers/nissan.html
- **Severity:** High. Named exec: Kenichi Yomogizawa (General Manager, Global Enterprise Architecture Dept, Nissan). Quantified: Real-time OS support end dates; development and operational costs; security statuses; all visible on single screen in real time; proactive upgrade proposals via agentic AI instead of reactive risk response.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (295-296) to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global manufacturing enterprises with fragmented global IT landscapes face a three-month-manual-reporting-cycle crisis. The only path to 90% reporting time reduction is ServiceNow CMDB + ITOM Discovery + Enterprise Architecture.","Source_URL":"https://www.servicenow.com/customers/nissan.html","Severity_Impact":"High. Named execs: Kenichi Yomogizawa (General Manager, Global Enterprise Architecture); Naoyuki Ujiie (Deputy General Manager & Chief IS Architect); Subana Thanasegaran (Assistant Manager). Quantified: 90% reporting time reduction (3 months to 1 week); real-time visibility; auto-populated CMDB; end-to-end global coverage."}',
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Global manufacturing enterprises with aging legacy technology face a reactive-risk-management crisis. The only path to proactive system upgrade proposals is ServiceNow Now Assist agentic AI + CMDB.","Source_URL":"https://www.servicenow.com/customers/nissan.html","Severity_Impact":"High. Named exec: Kenichi Yomogizawa (General Manager, Global Enterprise Architecture, Nissan). Quantified: Real-time OS support end dates; development/operational costs; security statuses on single screen; proactive upgrade proposals via agentic AI."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (295-296) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');