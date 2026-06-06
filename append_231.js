const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 231. Fortune 5 healthcare enterprises with 300,000 colleagues face an "AI deployment without foundation" crisis where deploying AI to frontline workers fails without contextual understanding of who is asking and what they need, and the only path to 75%+ retention is ServiceNow AI Platform + EmployeeWorks embedded in Microsoft Teams as a single front door
- **Category:** Onboarding & Deployment
- **Friction:** Fortune 5 healthcare enterprises with 300,000 colleagues face an "AI deployment without foundation" crisis where deploying AI to frontline workers fails without a platform that understands context: who is asking, what role they hold, and what they need to get done. "What does it take to put AI in the hands of 300,000 colleagues—and have over 75% keep coming back? For CVS Health, the answer started long before the AI was deployed." The solution required building on the ServiceNow AI Platform first, then embedding EmployeeWorks inside Microsoft Teams where people already work. The result: 2.5 million AI-powered conversations in less than a year.
- **Source:** https://www.servicenow.com/customers/cvs-health.html
- **Severity:** High. Quantified: 300,000 colleagues; 2.5 million AI-powered conversations in less than a year; 75%+ return rate; Fortune 5 health care company; ServiceNow AI Platform + EmployeeWorks embedded in Microsoft Teams; CVS Health integrated model with 9,000+ retail pharmacy locations, 1,000+ walk-in/primary care medical clinics, 87M+ plan members (as of December 31, 2025).
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 231 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Fortune 5 healthcare enterprises with 300,000 colleagues face an AI deployment without foundation crisis where deploying AI to frontline workers fails without contextual understanding of who is asking and what they need. CVS Health required the ServiceNow AI Platform first to build context, then EmployeeWorks embedded in Microsoft Teams.","Source_URL":"https://www.servicenow.com/customers/cvs-health.html","Severity_Impact":"High. Quantified: 300,000 colleagues; 2.5 million AI-powered conversations in less than a year; 75%+ return rate; Fortune 5 health care company; ServiceNow AI Platform + EmployeeWorks embedded in Microsoft Teams."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (231) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');