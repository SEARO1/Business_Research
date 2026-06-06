const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 220. Managed-service providers in highly regulated industries (cybersecurity, government) with 7,000+ customer tickets per week face a "manual-L1-follow-up-week-long-resolution" crisis where repetitive work consumes senior engineers, and the only way to scale is AI-augmented service desk with AI Search + Now Assist for self-service and 100x usage amplification
- **Category:** Onboarding & Deployment
- **Friction:** Managed-service providers in highly regulated industries (cybersecurity, government) with 7,000+ customer tickets per week face a "manual-L1-follow-up-week-long-resolution" crisis where repetitive work consumes senior engineers. "Previously, we had a lot of contact follow-ups for L1 tickets and it could add up to a week for a case to be resolved." Senior engineers spend time reading case notes instead of solving problems, and any AI assistant must meet strict security and compliance requirements for highly regulated clients.
- **Source:** https://www.servicenow.com/customers/lab3.html
- **Severity:** High. Named exec: Anthony Wales (Director for Strategic Growth, LAB3). Quantified: 7,000+ customer tickets/week; 3-month AI deployment; 37% time-to-validate request items reduction; 47% mean-time-to-resolution reduction; 20% self-service rate uplift; 100x usage increase via service portal; 47% workflow bottleneck reduction; 150 DevOps processes; 150 junior developers onboarded in weeks instead of months via Creator AI; AI Search + Microsoft Teams integration; hybrid service portal model with separate security domain for highly regulated customers.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 220 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Managed-service providers in highly regulated industries (cybersecurity, government) with 7,000+ customer tickets per week face a manual-L1-follow-up-week-long-resolution crisis where repetitive work consumes senior engineers. Any AI assistant must meet strict security and compliance requirements for highly regulated clients.","Source_URL":"https://www.servicenow.com/customers/lab3.html","Severity_Impact":"High. Named exec: Anthony Wales (Director for Strategic Growth, LAB3). Quantified: 7,000+ customer tickets/week; 3-month AI deployment; 37% time-to-validate request items reduction; 47% mean-time-to-resolution reduction; 20% self-service rate uplift; 100x usage increase via service portal; 47% workflow bottleneck reduction; 150 DevOps processes; 150 junior developers onboarded in weeks instead of months."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (220) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
