const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 219. Creative-software platforms with 30,000+ employees face a "fragmented-IT-OM-visibility" crisis where outage root cause is hard to track down and employees lose creative flow waiting for systems, and the only path to a self-healing IT system is agentic AI layered on a unified platform with ITOM + HRSD + Now Assist
- **Category:** Integration
- **Friction:** Creative-software platforms with 30,000+ employees face a "fragmented-IT-OM-visibility" crisis where outage root cause is hard to track down and employees lose creative flow waiting for systems. "Before, with limited visibility into fragmented systems, any lag or errors could be hard to track down. Users spent more time waiting for the system to come online again, taking them out of their creative flow." The only path to a self-healing IT system is agentic AI layered on a unified platform with ITOM + HRSD + Now Assist.
- **Source:** https://www.servicenow.com/customers/adobe.html
- **Severity:** High. Named execs: Toni Vanwinkle (VP, Digital Employee Experience Lead & Co-chair, AI at Adobe), Rachel Thornton (CMO for Enterprise at Adobe), Craig Takeuchi (Senior Product Analyst, Device Lifecycle Management Team, Adobe). Quantified: 30,000+ employees worldwide; 8,000+ IT/HR team members use Now Assist; 30% faster case resolutions; 25% reduction in time to close major outages; email triage 2 days → <2 hours (96% efficiency gain); AI agent + ITOM for self-healing IT; AI-driven self-service catalog (devices, software, hardware); sentiment analysis + AI Experience planned.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 219 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Integration","Specific_Friction":"Creative-software platforms with 30,000+ employees face a fragmented-IT-OM-visibility crisis where outage root cause is hard to track down and employees lose creative flow waiting for systems. The only path to a self-healing IT system is agentic AI layered on a unified platform.","Source_URL":"https://www.servicenow.com/customers/adobe.html","Severity_Impact":"High. Named execs: Toni Vanwinkle (VP, Digital Employee Experience Lead & Co-chair, AI at Adobe), Rachel Thornton (CMO for Enterprise at Adobe), Craig Takeuchi (Senior Product Analyst, Device Lifecycle Management Team, Adobe). Quantified: 30,000+ employees worldwide; 8,000+ IT/HR team members use Now Assist; 30% faster case resolutions; 25% reduction in time to close major outages; email triage 2 days to <2 hours (96% efficiency gain); AI agent + ITOM for self-healing IT."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (219) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
