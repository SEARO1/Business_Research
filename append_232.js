const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 232. Post-merger global IT services enterprises with 100,000+ employees face a "legacy-telephony-HR-systems-running-out-of-support" crisis where transitional support agreements are expiring and the only path to a "one DXC" experience in 31 weeks total is ServiceNow HR Service Delivery deployed by an in-house ServiceNow practice
- **Category:** Onboarding & Deployment
- **Friction:** Post-merger global IT services enterprises with 100,000+ employees formed via CSC + HPE Enterprise Services merger face a "legacy-telephony-HR-systems-running-out-of-support" crisis where transitional support agreements are expiring. "A significant percentage of DXC staff were still using an antiquated telephony-based system. We wanted to make HR services consistent and easy to use, creating a 'one DXC' experience for everyone. And we had to do it quickly before the transitional support agreements for our existing systems ran out." The only path: ServiceNow HR Service Delivery deployed in17 weeks first-phase, extended to full global employee base in 14 more weeks (31 weeks total), saving2x annual system support costs.
- **Source:** https://www.servicenow.com/customers/dxc-technology.html
- **Severity:** High. Named exec: Manish Gurnani (Director of HR Shared Services, DXC Technology). Quantified: 100,000+ employees; 6,000+ private and public sector clients in 70 countries; 17 weeks to first go-live; 14 more weeks to full global rollout (31 weeks total);1,500 tickets/day on a single topic before fix; saving2x annual system support costs; employee satisfaction scores rose significantly and trending upward; GDPR compliant; multiple regional HR processes unified into single global HRSD solution.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 232 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Post-merger global IT services enterprises with 100,000+ employees face a legacy-telephony-HR-systems-running-out-of-support crisis where transitional support agreements are expiring. DXC needed to create a one DXC experience before legacy systems support ran out.","Source_URL":"https://www.servicenow.com/customers/dxc-technology.html","Severity_Impact":"High. Named exec: Manish Gurnani (Director of HR Shared Services, DXC Technology). Quantified: 100,000+ employees; 6,000+ clients in 70 countries; 17 weeks to first go-live; 14 more weeks to full global rollout (31 weeks total); 1,500 tickets/day on a single topic before fix; saving 2x annual system support costs; employee satisfaction scores rose significantly."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (232) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');