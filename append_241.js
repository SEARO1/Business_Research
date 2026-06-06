const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 241. Professional services enterprises with 460,000 employees across global member firms face a "federated-structure-with-60-plus-disconnected-tools" crisis where each member firm operates independently and AI readiness is fragmented, and the only path to 250,000-employee AI rollout in 6 months is a ServiceNow Center of Excellence that unifies 60+ tools and 38 cyber services into one platform with 4-5x ROI
- **Category:** Onboarding & Deployment
- **Friction:** Professional services enterprises with 460,000 employees across global member firms face a "federated-structure-with-60-plus-disconnected-tools" crisis where each member firm operates independently and AI readiness is fragmented. "Deloitte sought to modernize the independently managed systems and processes used by its member firms... To reduce silos and lower business risk, Deloitte unified the enterprise onto the ServiceNow AI Platform." The only path to 250,000-employee AI rollout in 6 months is a ServiceNow Center of Excellence that unifies 60+ tools and 38 cyber services into one platform.
- **Source:** https://www.servicenow.com/customers/deloitte.html
- **Severity:** High. Named exec: Joe Erskine (ServiceNow Product Group Leader, Deloitte Technology Global). Quantified: 460,000 employees; 250,000 employees reached by AI rollout in 6 months; 60+ tools unified; 38 cyber services;740,000 AI-driven actions per year; 290% surge in monthly ITSM usage; 40% reduction in time to resolve HR inquiries; 45% faster incident resolutions with Now Assist case summarization; 20-60% productivity gains in business units; 4x to 5x return on investment in operational efficiencies; AI Search reducing employee search time by 40%; ServiceNow Global Elite partner; federated member firm structure across400,000+ global workforce.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 241 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Professional services enterprises with 460,000 employees across global member firms face a federated-structure-with-60-plus-disconnected-tools crisis where each member firm operates independently and AI readiness is fragmented. The only path to 250,000-employee AI rollout in 6 months is a ServiceNow Center of Excellence that unifies 60+ tools and 38 cyber services.","Source_URL":"https://www.servicenow.com/customers/deloitte.html","Severity_Impact":"High. Named exec: Joe Erskine (ServiceNow Product Group Leader, Deloitte Technology Global). Quantified: 460,000 employees; 250,000 employees reached by AI rollout in 6 months; 60+ tools unified; 38 cyber services; 740,000 AI-driven actions/year; 290% surge in monthly ITSM usage; 40% reduction in HR inquiry resolution time; 45% faster incident resolutions with Now Assist; 4x to 5x ROI; 20-60% productivity gains."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (241) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');