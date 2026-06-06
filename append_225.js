const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 225. Post-merger IT-services giants with 100,000+ employees across 70 countries face a "transitional-support-agreement-deadline" crisis where multiple legacy HR systems each carry expensive contracts that expire on different dates, and the only path to "one DXC" unification is rapid global ServiceNow HRSD deployment in 17 weeks first, 14 weeks worldwide
- **Category:** Integration
- **Friction:** Post-merger IT-services giants with 100,000+ employees across 70 countries face a "transitional-support-agreement-deadline" crisis where multiple legacy HR systems each carry expensive contracts that expire on different dates. "Our existing HR support systems were too expensive and didn't deliver the experience that our employees deserved. For example, a significant percentage of DXC staff were still using an antiquated telephony-based system. We wanted to make HR services consistent and easy to use, creating a 'one DXC' experience for everyone. And we had to do it quickly before the transitional support agreements for our existing systems ran out." The only path is rapid global ServiceNow HRSD deployment — 17 weeks first, 14 weeks worldwide.
- **Source:** https://www.servicenow.com/customers/dxc-technology.html
- **Severity:** High. Named exec: Manish Gurnani (Director, HR Shared Services, DXC Technology). Quantified: 100,000+ employees; 70 countries; 6,000 private + public sector clients; CSC + HPE Enterprise Services merger 2017; 17 weeks to first go-live + 14 weeks worldwide rollout = 31 weeks total; 2x annual system support cost savings via legacy retirement; 1,500 tickets/day for a single topic identified via ServiceNow reporting and resolved; no tier-one support group needed (intelligent routing); GDPR-compliant external access for prospective + former employees + vendors; automation identifies "employees in distress" (5 tickets in 2 weeks) for high-touch outreach.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 225 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Integration","Specific_Friction":"Post-merger IT-services giants with 100,000+ employees across 70 countries face a transitional-support-agreement-deadline crisis where multiple legacy HR systems each carry expensive contracts that expire on different dates.","Source_URL":"https://www.servicenow.com/customers/dxc-technology.html","Severity_Impact":"High. Named exec: Manish Gurnani (Director, HR Shared Services, DXC Technology). Quantified: 100,000+ employees; 70 countries; 6,000 private + public sector clients; CSC + HPE Enterprise Services merger 2017; 17 weeks to first go-live + 14 weeks worldwide rollout = 31 weeks total; 2x annual system support cost savings via legacy retirement; 1,500 tickets/day for a single topic identified and resolved; no tier-one support group needed; GDPR-compliant external access."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (225) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
