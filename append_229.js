const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 229. 24/7 deskless-workforce logistics enterprises with 48,000+ employees face a "office-only-intranet-blocks-field-staff" crisis where the existing intranet was accessible only to office-based staff (less than 1/3 of total), and the only path to HR service equity is a mobile-first unified employee portal that works at 2 a.m. on a truck stop
- **Category:** Onboarding & Deployment
- **Friction:** 24/7 deskless-workforce logistics enterprises with 48,000+ employees face a "office-only-intranet-blocks-field-staff" crisis where the existing intranet was accessible only to office-based staff (less than 1/3 of total). "Where once an employee taking a 2am break would have had no recourse to submit an HR inquiry, now they have a tool to access information, pose a question, or flag an issue with zero requirement for colleague availability or intervention." The technology must meet that need — and the only path is a mobile-first unified employee portal.
- **Source:** https://www.servicenow.com/customers/ryder.html
- **Severity:** High. Named exec: Galyna Kruglov (Group Director of Employee Services Operations, Ryder). Quantified: 48,000+ employees; 45,000+ customers; US/Mexico/Canada operations; 24/7 deskless workforce; <1/3 of workforce had previous intranet access; MyRyder portal (HRSD + ITSM + Employee Center Pro); 60,000+ cases in 2 quarters of 2022 (10%+ rise); chat wait time 10 min → 2 min (80% reduction in wait time); agent efficiency 80% higher; KB access up 91% (Jul 2020 – Jan 2023); IT, HR, and finance all unified in one portal; case-volume rise means better data, not more cost.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 229 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"24/7 deskless-workforce logistics enterprises with 48,000+ employees face a office-only-intranet-blocks-field-staff crisis where the existing intranet was accessible only to office-based staff (less than 1/3 of total).","Source_URL":"https://www.servicenow.com/customers/ryder.html","Severity_Impact":"High. Named exec: Galyna Kruglov (Group Director of Employee Services Operations, Ryder). Quantified: 48,000+ employees; 45,000+ customers; US/Mexico/Canada operations; 24/7 deskless workforce; <1/3 of workforce had previous intranet access; MyRyder portal (HRSD + ITSM + Employee Center Pro); 60,000+ cases in 2 quarters of 2022; chat wait time 10 min to 2 min (80% reduction); agent efficiency 80% higher; KB access up 91% (Jul 2020 to Jan 2023)."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (229) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
