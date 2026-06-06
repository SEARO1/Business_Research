const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 237. Growing municipalities managing 150+ concurrent projects across IT, capital improvements, grants, and diversity initiatives face a "hours-to-days-to-find-project-status" crisis where phone calls, walking around, and manual spreadsheet coordination make cross-departmental visibility nearly impossible, and the only path to real-time portfolio visibility is Smartsheet with Resource Management heat maps and automated workflows
- **Category:** Onboarding & Deployment
- **Friction:** Growing municipalities managing 150+ concurrent projects across IT, capital improvements, grants, and diversity initiatives face a "hours-to-days-to-find-project-status" crisis where phone calls, walking around, and manual spreadsheet coordination make cross-departmental visibility nearly impossible. "In the past, when I had to get information or look something up, it could take me a couple of hours or a couple of days, depending on the request. I'd have to make a few phone calls, walk around and try to find someone. Now I can just look in Smartsheet, and within a couple of seconds I can find the information." The only path to real-time portfolio visibility is Smartsheet with Resource Management heat maps and automated workflows.
- **Source:** https://www.smartsheet.com/customers/city-of-chandler
- **Severity:** High. Named exec: Greg Hayes (IT Portfolio Manager, City of Chandler). Quantified: 150+ projects managed on any given day; single intake process for all projects; real-time dashboards for governance committee and department leads; Resource Management heat maps showing under/over utilization; Smartsheet Control Center for template-based project management; automated notifications for project launches, approvals, and reminders; time to find project status: hours/days → seconds; expanding citywide next fiscal year; also covers diversity/equality workflows, capital improvements, grants management.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 237 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Growing municipalities managing 150+ concurrent projects across IT, capital improvements, grants, and diversity initiatives face a hours-to-days-to-find-project-status crisis where manual coordination makes cross-departmental visibility nearly impossible. Real-time visibility now in seconds via Smartsheet.","Source_URL":"https://www.smartsheet.com/customers/city-of-chandler","Severity_Impact":"High. Named exec: Greg Hayes (IT Portfolio Manager, City of Chandler). Quantified: 150+ projects managed on any given day; single intake process; real-time dashboards; Resource Management heat maps for under/over utilization; time to find project status: hours/days to seconds; citywide expansion planned next fiscal year."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (237) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');