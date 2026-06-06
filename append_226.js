const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 226. Global super-apps with 32,000+ employees in 70+ countries face a "manual-risk-and-compliance" crisis where each new regulation requires Excel-spreadsheet-style tracking that does not scale, and the only path to competitive advantage is digitizing risk on ServiceNow IRM with Policy + Compliance + Regulatory Change Management + Third-party Risk Management
- **Category:** Security and Governance
- **Friction:** Global super-apps with 32,000+ employees in 70+ countries face a "manual-risk-and-compliance" crisis where each new regulation requires Excel-spreadsheet-style tracking that does not scale. "As we move towards a world where risk and compliance is necessary for us to have competitive edge, ServiceNow's products help us move the needle." Third-party risk is the worst — vendors across the globe must each be continuously monitored, but Excel sheets + manual workflows cannot keep up.
- **Source:** https://www.servicenow.com/customers/uber.html
- **Severity:** High. Named exec: Anirban De (Head of Technical Assurance and Automation, Uber). Quantified: 32,000+ employees; 70+ countries; 5,000+ monthly IRM users; 25 different processes on ServiceNow AI Platform; Excel spreadsheets replaced by Third-party Risk Management; full policy lifecycle + regulatory horizon visibility via Regulatory Change Management; dedicated policy portal consolidating all policies (internal + external) in one location; RPA Hub + Regulatory Change Management + Policy and Compliance + Third-party Risk + Integrated Risk Management.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 226 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Global super-apps with 32,000+ employees in 70+ countries face a manual-risk-and-compliance crisis where each new regulation requires Excel-spreadsheet-style tracking that does not scale. Third-party risk is the worst — vendors across the globe must each be continuously monitored.","Source_URL":"https://www.servicenow.com/customers/uber.html","Severity_Impact":"High. Named exec: Anirban De (Head of Technical Assurance and Automation, Uber). Quantified: 32,000+ employees; 70+ countries; 5,000+ monthly IRM users; 25 different processes on ServiceNow AI Platform; Excel spreadsheets replaced by Third-party Risk Management; full policy lifecycle + regulatory horizon visibility; dedicated policy portal consolidating all policies; RPA Hub + Regulatory Change Management + Policy and Compliance + Third-party Risk + Integrated Risk Management."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (226) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
