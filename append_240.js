const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 240. Global property consultancies operating in 50+ countries with 250+ concurrent India projects face a "scattered-reports-that-dont-reflect-whats-actually-happening" crisis where executives relied on phone calls and manual reports, and the only path to real-time project visibility is Smartsheet with Data Shuttle mobile sync, 250-project safety dashboards, and client-facing role-based dashboards
- **Category:** Onboarding & Deployment
- **Friction:** Global property consultancies operating in 50+ countries with 250+ concurrent India projects face a "scattered-reports-that-dont-reflect-whats-actually-happening" crisis where executives relied on phone calls and manual reports. "Before Smartsheet, I relied on calls and scattered reports that didn't always reflect what was actually happening. Now, I can see project status across regions in real time and catch issues early—before they escalate." The only path to real-time project visibility is Smartsheet with Data Shuttle mobile sync, 250-project safety dashboards, and client-facing role-based dashboards.
- **Source:** https://www.smartsheet.com/customers/knight-frank-india
- **Severity:** High. Named execs: Prashant Sharma (Associate Director, Strategy & Initiatives, Project Management Services, Knight Frank India), Deben Moza (Senior Executive Director and Head of Project Management Services, Knight Frank India). Quantified: 27,000+ employees globally; 1,900+ specialists in India; 250+ projects tracked in India; 50+ locations; safety dashboards tracking safe man-hours and incidents across all 250 projects in real time; 900-person team rollout; Smartsheet Forms for field team mobile updates; Data Shuttle for cross-system sync; Smartsheet used as de facto CRM; client role-based access; weekly sprints with Agilifly partner.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 240 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global property consultancies operating in 50+ countries with 250+ concurrent India projects face a scattered-reports-that-dont-reflect-whats-actually-happening crisis where executives relied on phone calls and manual reports. Real-time visibility now across regions via Smartsheet with Data Shuttle mobile sync and 250-project safety dashboards.","Source_URL":"https://www.smartsheet.com/customers/knight-frank-india","Severity_Impact":"High. Named execs: Prashant Sharma (Associate Director, Knight Frank India), Deben Moza (Senior Executive Director and Head of PM, Knight Frank India). Quantified: 27,000+ employees globally; 1,900+ specialists in India; 250+ projects tracked in India; safety dashboards tracking safe man-hours and incidents across all 250 projects in real time; 900-person team rollout; Smartsheet Forms and Data Shuttle for field mobile updates."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (240) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');