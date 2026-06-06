const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 230. Global pharmaceutical enterprises with a 2030 target of 20 new medicines face a "30-minute-per-lab-order" crisis where scientists waste time handwriting supply orders in notebooks, and the only path to reclaiming researcher time is a ServiceNow AI Platform that processes 60,000+ requests/year and saves 30,000 hours annually
- **Category:** Onboarding & Deployment
- **Friction:** Global pharmaceutical enterprises with a 2030 target of 20 new medicines face a "30-minute-per-lab-order" crisis where scientists waste time handwriting supply orders in notebooks. "Bringing just one new medication to market can require millions of test tubes during the development phases. AstraZeneca discovered that employees were handwriting supply orders in a notebook, a process that took up to 30 minutes each time." With 60,000+ requests/year flowing through the ServiceNow AI Platform, the cumulative time savings are estimated at 30,000 hours/year — time that can now be spent pursuing life-changing medicines.
- **Source:** https://www.servicenow.com/customers/astrazeneca.html
- **Severity:** High. Named execs: Cindy Hoots (Chief Digital Officer and CIO, AstraZeneca), Dinesh Krishnan (Global Head of Enterprise Platforms, AstraZeneca), Jackie Crockford (VP of Global Business Services, AstraZeneca). Quantified: 60,000+ requests/year in 400+ categories; 30,000 hours/year estimated time savings; 20 new medicines by 2030; 20,000+ new employees to onboard; 50+ hours managers spend onboarding each employee; "Onboarding 2.0" personalized portals; AskAZ employee portal; digitized/automated/AI-powered equipment and supplies ordering system.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 230 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global pharmaceutical enterprises with a 2030 target of 20 new medicines face a 30-minute-per-lab-order crisis where scientists waste time handwriting supply orders in notebooks. With 60,000+ requests/year flowing through the platform, cumulative time savings are estimated at 30,000 hours/year.","Source_URL":"https://www.servicenow.com/customers/astrazeneca.html","Severity_Impact":"High. Named execs: Cindy Hoots (CDO/CIO, AstraZeneca), Dinesh Krishnan (Global Head of Enterprise Platforms, AstraZeneca), Jackie Crockford (VP Global Business Services, AstraZeneca). Quantified: 60,000+ requests/year in 400+ categories; 30,000 hours/year estimated time savings; 20 new medicines by 2030; 20,000+ new employees to onboard; 50+ hours managers spend onboarding each employee; Onboarding 2.0 personalized portals on ServiceNow AI Platform."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (230) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');