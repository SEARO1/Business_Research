const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 234. Global optics and imaging enterprises operating in 50+ countries face a "50-plus-tools-siloed-across-HR-and-IT" crisis where fragmented project management prevents standardization, and the only path to global alignment is a Smartsheet Intelligent Work Management platform with a 40-page governance playbook and centralized project "cockpit" dashboards
- **Category:** Onboarding & Deployment
- **Friction:** Global optics and imaging enterprises operating in 50+ countries face a "50-plus-tools-siloed-across-HR-and-IT" crisis where fragmented project management prevents standardization and visibility. "More than fifty different tools and systems were in use within information technologies (IT) alone. Human resources (HR) faced the same inconsistent approach. Before implementing Smartsheet, everyone was using different tools, standards, and templates to deliver projects." The only path to global alignment is a Smartsheet platform with a 40-page governance playbook and centralized "project cockpit" dashboards.
- **Source:** https://www.smartsheet.com/customers/zeiss-group
- **Severity:** High. Named execs: Jarkko Niittumaa (Head of HR Portfolio & Project Management, ZEISS Group), Cheriece Williams (Senior HR Project Manager, ZEISS Group). Quantified: ~50 countries; 30 production sites; 25 development centres; 50+ tools/systems in IT alone before Smartsheet;40-page unified HR project framework guide; Smartsheet Control Center centralized "project cockpit" with budget trackers, status logs, stakeholder maps; portfolio/program/project manager cockpits; live dashboards with color-coded progress snapshots; governance built into workflows.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 234 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global optics and imaging enterprises operating in 50+ countries face a 50-plus-tools-siloed-across-HR-and-IT crisis where fragmented project management prevents standardization and visibility. The only path to global alignment is Smartsheet with a 40-page governance playbook and centralized project cockpit dashboards.","Source_URL":"https://www.smartsheet.com/customers/zeiss-group","Severity_Impact":"High. Named execs: Jarkko Niittumaa (Head of HR Portfolio & Project Management, ZEISS Group), Cheriece Williams (Senior HR Project Manager, ZEISS Group). Quantified: ~50 countries; 30 production sites; 25 development centres; 50+ tools/systems in IT alone before Smartsheet; 40-page unified HR project framework; Smartsheet Control Center centralized project cockpit with budget trackers, status logs, stakeholder maps; live dashboards."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (234) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');