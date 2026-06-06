const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 238. Global NGOs managing 150+ projects across sports events, health initiatives, and leadership training face a "zero-visibility-across-regions" crisis where one region had no idea what another region was doing, and the only path to real-time global visibility is Smartsheet with 150+ projects tracked, automated notifications, and dashboards the CEO checks before monthly calls
- **Category:** Onboarding & Deployment
- **Friction:** Global NGOs managing 150+ projects across sports events, health initiatives, and leadership training face a "zero-visibility-across-regions" crisis where one region had no idea what another region was doing. "There was no visibility. One region had no idea what the other region was doing unless the staff were talking to one another; there wasn't a centralized place for people to look and say, 'Oh, this is what this team is working on.'" The only path to real-time global visibility is Smartsheet with 150+ projects tracked, automated notifications, and dashboards the CEO checks before monthly calls.
- **Source:** https://www.smartsheet.com/customers/special-olympics
- **Severity:** High. Named exec: Laura Jones (Director of Project Management, Special Olympics International). Quantified: 20 projects in first year → 150+ projects today; three different teams shared tips for a common project and saved 45+ staff hours/month per team; World Games event management; pandemic athlete communication; dashboards for CEO review before monthly calls; automated alerts for deadlines; Smartsheet Control Center for template-based project initiation; organizational PMO with cohort training;150+ projects tracked in Smartsheet.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 238 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global NGOs managing 150+ projects across sports events, health initiatives, and leadership training face a zero-visibility-across-regions crisis where one region had no idea what another region was doing. The only path to real-time global visibility is Smartsheet with dashboards the CEO checks before monthly calls.","Source_URL":"https://www.smartsheet.com/customers/special-olympics","Severity_Impact":"High. Named exec: Laura Jones (Director of Project Management, Special Olympics International). Quantified: 20 projects in first year to 150+ projects today; three teams saved 45+ staff hours/month per team by sharing tips; CEO reviews dashboards before monthly calls; 150+ projects tracked in Smartsheet."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (238) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');