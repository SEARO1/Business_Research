const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 233. Global pharmaceutical and agricultural conglomerates running 1,500+ projects on disparate tools face a "weeks-to-get-SVP-an-investment-overview" crisis where manual slide compilation makes leadership requests a time-consuming ordeal, and the only path to real-time visibility is Smartsheet with Control Center automation that saved one team 500+ hours and enabled20,000+ man-hours saved in 2023 alone
- **Category:** Onboarding & Deployment
- **Friction:** Global pharmaceutical and agricultural conglomerates running 1,500+ projects on disparate tools face a "weeks-to-get-SVP-an-investment-overview" crisis where manual slide compilation makes leadership requests a time-consuming ordeal. "Three years ago a senior vice president asked me for an overview of ongoing investment projects. At the time, it would have taken me weeks. Now, I already have full visibility of our projects, and I can pull the information at the click of a button." The only path to real-time visibility is Smartsheet with Control Center automation.
- **Source:** https://www.smartsheet.com/customers/bayer
- **Severity:** High. Named execs: Andreas Ahammer (Head of Change, Adoption and Sustainment Excellence, Bayer), Jeffrey Manning (North America Product Supply, Project Portfolio Management Lead, Bayer). Quantified: 1,500 projects running in Smartsheet; 500+ hours saved by one team using Control Center automation; 20,000+ man-hours saved in 2023 alone; millions in annual project outcome savings; management time saving2-3 hours/week; Smartsheet WorkApps and Dynamic View; change management and portfolio management solution with global instant visibility.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 233 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global pharmaceutical and agricultural conglomerates running 1,500+ projects on disparate tools face a weeks-to-get-SVP-an-investment-overview crisis where manual slide compilation makes leadership requests a time-consuming ordeal. Real-time visibility now available at the click of a button via Smartsheet.","Source_URL":"https://www.smartsheet.com/customers/bayer","Severity_Impact":"High. Named execs: Andreas Ahammer (Head of Change, Adoption and Sustainment Excellence, Bayer), Jeffrey Manning (North America Product Supply, Project Portfolio Management Lead, Bayer). Quantified: 1,500 projects in Smartsheet; 500+ hours saved by one team using Control Center; 20,000+ man-hours saved in 2023 alone; millions in annual project outcome savings; management time saving 2-3 hours/week."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (233) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');