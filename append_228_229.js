const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 228. Europe's largest railway operators with 292,000+ employees across 500+ professions face a "20-30K-annual-hire-throughput" crisis where 300+ HR processes each require manual touch, and the only path to retaining the workforce in a green-mobility growth phase is a unified "Meine DB" HR portal with self-service and AI search
- **Category:** Onboarding & Deployment
- **Friction:** Europe's largest railway operators with 292,000+ employees across 500+ professions face a "20-30K-annual-hire-throughput" crisis where 300+ HR processes each require manual touch, and the only path to retaining the workforce in a green-mobility growth phase is a unified "Meine DB" HR portal with self-service and AI search. "Given the strong growth trajectory... 20,000 to 30,000 new employees every year. The HR department is responsible for over 300 HR processes for employees, from onboarding to exit."
- **Source:** https://www.servicenow.com/customers/deutsche-bahn.html
- **Severity:** High. Named exec: Ralf Berns (Head of Product Portfolio, Process Management and Service Delivery, Deutsche Bahn). Quantified: 292,000+ employees; 500+ professions; largest rail infrastructure + rail freight in Europe; 20-30K new employees/year; 300 HR processes supported by "Meine DB" portal; AI search features; plans to connect other DB areas for a standardized employee experience portal across the entire Group in Germany; transparent case status for every employee.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 228 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Europes largest railway operators with 292,000+ employees across 500+ professions face a 20-30K-annual-hire-throughput crisis where 300+ HR processes each require manual touch, and the only path to retaining the workforce in a green-mobility growth phase is a unified HR portal with self-service and AI search.","Source_URL":"https://www.servicenow.com/customers/deutsche-bahn.html","Severity_Impact":"High. Named exec: Ralf Berns (Head of Product Portfolio, Process Management and Service Delivery, Deutsche Bahn). Quantified: 292,000+ employees; 500+ professions; 20-30K new employees/year; 300 HR processes supported by Meine DB portal; AI search features; plans to connect other DB areas for a standardized employee experience portal across the entire Group in Germany; transparent case status."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (228) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
