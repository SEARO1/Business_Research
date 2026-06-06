const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 239. Large-scale pharmaceutical manufacturers managing 400+ active projects/year across product launches and CDMO services face a "matrix-environment-where-PMs-lack-direct-authority-over-contributors" crisis where resource conflicts and accountability gaps erode project delivery, and the only path to 80%+ Resource Management adoption and 4-5x ROI is Smartsheet with ERP and CRM integrations and Control Center for governance-at-scale
- **Category:** Onboarding & Deployment
- **Friction:** Large-scale pharmaceutical manufacturers managing 400+ active projects/year across product launches and CDMO services face a "matrix-environment-where-PMs-lack-direct-authority-over-contributors" crisis where resource conflicts and accountability gaps erode project delivery. "Project managers don't have direct authority over the people doing the work—making it harder to coordinate tasks, track progress, and ensure accountability." The only path to 80%+ Resource Management adoption and 4-5x ROI is Smartsheet with ERP and CRM integrations and Control Center for governance-at-scale.
- **Source:** https://www.smartsheet.com/customers/douglas-pharmaceuticals
- **Severity:** High. Named execs: Michael Ishak (Chief Transformation Officer, Douglas Pharmaceuticals), Andrei Veloso (Project Manager, Douglas Pharmaceuticals). Quantified: 500 employees; 400+ active projects/year; up to NZD50M per project; 80% of teams using Resource Management; project manager saves 2 hours/day using Control Center; ERP (timesheet) and CRM (sales pipeline) integrations; SSO, domain restrictions, permission settings for regulated industry; 4x to 5x ROI; audit trail compliance; health and safety incident management portal built by staff in Smartsheet.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 239 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Large-scale pharmaceutical manufacturers managing 400+ active projects/year across product launches and CDMO services face a matrix-environment-where-PMs-lack-direct-authority-over-contributors crisis. The only path to 80%+ Resource Management adoption and 4-5x ROI is Smartsheet with ERP and CRM integrations and Control Center.","Source_URL":"https://www.smartsheet.com/customers/douglas-pharmaceuticals","Severity_Impact":"High. Named execs: Michael Ishak (Chief Transformation Officer, Douglas Pharmaceuticals), Andrei Veloso (Project Manager, Douglas Pharmaceuticals). Quantified: 500 employees; 400+ active projects/year; up to NZD50M per project; 80% of teams using Resource Management; project manager saves 2 hours/day using Control Center; ERP and CRM integrations; 4x to 5x ROI; SSO and domain restrictions for regulated industry compliance."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (239) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');