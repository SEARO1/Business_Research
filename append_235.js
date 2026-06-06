const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 235. Healthcare PMOs managing 93+ concurrent projects across clinical applications, Epic, Workday, infrastructure, and AI initiatives face a "7-step-manual-status-reporting-across-3-systems" crisis that consumes project manager time, and the only path to 152-hours-per-week administrative reduction is Smartsheet + ServiceNow integration where ServiceNow handles intake and Smartsheet handles execution
- **Category:** Onboarding & Deployment
- **Friction:** Healthcare PMOs managing 93+ concurrent projects across clinical applications, Epic, Workday, infrastructure, and AI initiatives face a "7-step-manual-status-reporting-across-3-systems" crisis that consumes project manager time. "Previously, it was challenging for us to do our work efficiently. Status reporting alone accounts for a substantial portion of that savings. Before Smartsheet, project managers had 7 steps over 3 systems to produce and send a Status Report." The only path to reclaiming project manager time is Smartsheet + ServiceNow integration where ServiceNow handles intake/system of record and Smartsheet handles planning, execution, and reporting.
- **Source:** https://www.smartsheet.com/customers/umass-memorial
- **Severity:** High. Named exec: Jenann Self (Director, Project Management Office, UMass Memorial Health). Quantified: 51-person PMO team; 93+ active projects average at any given time; 152 hours/week reduction in administrative effort across PMO staff; status reporting: 7 steps over 3 systems reduced to 1 update in Smartsheet; weekly resourcing/risk meeting: 90 minutes down to 30 minutes; prep time virtually eliminated; Smartsheet Control Center standardized project workspaces; automated status emails, dashboards, and escalation alerts; ServiceNow integration via SoftwareX.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 235 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Healthcare PMOs managing 93+ concurrent projects across clinical applications, Epic, Workday, infrastructure, and AI initiatives face a 7-step-manual-status-reporting-across-3-systems crisis that consumes project manager time. The only path to reclaiming time is Smartsheet + ServiceNow integration where ServiceNow handles intake and Smartsheet handles execution and reporting.","Source_URL":"https://www.smartsheet.com/customers/umass-memorial","Severity_Impact":"High. Named exec: Jenann Self (Director, Project Management Office, UMass Memorial Health). Quantified: 51-person PMO team; 93+ active projects average at any given time; 152 hours/week reduction in administrative effort; status reporting: 7 steps over 3 systems reduced to 1 update; weekly meeting: 90 minutes down to 30 minutes; prep time virtually eliminated; Smartsheet Control Center; ServiceNow integration via SoftwareX."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (235) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');