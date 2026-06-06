const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 227. Hyper-growth video-communication platforms with 8,000+ employees in 200+ countries face a "disconnected-tools-email-call-support" crisis where acquired technology stacks prevent frictionless employee experience, and the only path to FedRAMP Moderate in 6 months is consolidating ITSM + HRSD + CSM on a single platform with 1,500+ KB articles
- **Category:** Onboarding & Deployment
- **Friction:** Hyper-growth video-communication platforms with 8,000+ employees in 200+ countries face a "disconnected-tools-email-call-support" crisis where acquired technology stacks prevent frictionless employee experience. "Zoomies were relying on calls and emails to request support to resolve IT issues or carry out basic HR tasks, such as booking time off or submitting inquiries about salaries or career development opportunities." The same company also needed to achieve FedRAMP Moderate compliance in 6 months for its government platform (ZfG) — and the only way to meet both employee-experience and federal-compliance requirements simultaneously is consolidating ITSM + HRSD + CSM on a single platform.
- **Source:** https://www.servicenow.com/customers/zoom.html
- **Severity:** High. Named execs: Christine Bahra (Head of Global PX Services, Zoom), Donna Bisio (IT Systems Manager, Zoom), Trevan Busby (Technical Support Manager, Zoom for Government), Lou Giglio (Head of Federal Government, Zoom), Awinash Sinha (Corporate CIO, Zoom). Quantified: 8,000+ employees ("Zoomies"); 200+ countries/territories; 2,000+ tickets/month in AskZoomPX HR portal; 1,500+ Knowledge Base articles; 75% reduction in simple query tickets; FedRAMP Moderate achieved in 6 months for ZfG; ServiceNow ITMS + HRSD + CSM + Now Assist + Workspace; "delivering happiness" culture enabled by self-service.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 227 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Hyper-growth video-communication platforms with 8,000+ employees in 200+ countries face a disconnected-tools-email-call-support crisis where acquired technology stacks prevent frictionless employee experience. The same company also needed to achieve FedRAMP Moderate compliance in 6 months for its government platform.","Source_URL":"https://www.servicenow.com/customers/zoom.html","Severity_Impact":"High. Named execs: Christine Bahra (Head of Global PX Services, Zoom), Donna Bisio (IT Systems Manager, Zoom), Trevan Busby (Technical Support Manager, Zoom for Government), Lou Giglio (Head of Federal Government, Zoom), Awinash Sinha (Corporate CIO, Zoom). Quantified: 8,000+ employees; 200+ countries; 2,000+ tickets/month in AskZoomPX HR portal; 1,500+ Knowledge Base articles; 75% reduction in simple query tickets; FedRAMP Moderate achieved in 6 months; ITSM + HRSD + CSM + Now Assist + Workspace."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (227) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
