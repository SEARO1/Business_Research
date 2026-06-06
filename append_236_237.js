const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 236. Large-scale Philippine real estate developers managing hundreds of properties face a "visibility-without-oversharing-sensitive-data" crisis where role-based access controls don't exist and vendors/admins see too much, and the only path to secure multi-tenant data sharing without buying full licenses for every user is Smartsheet Dynamic View for role-gated visibility
- **Category:** Security and Governance
- **Friction:** Large-scale Philippine real estate developers managing hundreds of properties face a "visibility-without-oversharing-sensitive-data" crisis where role-based access controls don't exist and vendors/admins see too much. "We needed to find a way to consolidate information from the units and the properties that we are managing, and disseminate this information to their respective admins, while being mindful of the information that we share with them." The only path to secure multi-tenant data sharing without buying full licenses for every user is Smartsheet Dynamic View for role-gated visibility — enabling Ayala Land to share data widely while keeping information secure.
- **Source:** https://www.smartsheet.com/customers/ayala
- **Severity:** High. Named exec: Nikki Ranay (IT Head, Ayala Property Management Corporation, Ayala Land). Quantified: hundreds of properties managed; vendor-facing platform for vendor/client concern logging and billing; Dynamic View role-based access eliminating need for full license per user; IT builds core templates, departments adapt; Smartsheet governance extended beyond IT; viral adoption across organisation.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 236 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Large-scale Philippine real estate developers managing hundreds of properties face a visibility-without-oversharing-sensitive-data crisis where role-based access controls dont exist. The only path to secure multi-tenant data sharing without buying full licenses is Smartsheet Dynamic View for role-gated visibility.","Source_URL":"https://www.smartsheet.com/customers/ayala","Severity_Impact":"High. Named exec: Nikki Ranay (IT Head, Ayala Property Management Corporation, Ayala Land). Quantified: hundreds of properties managed; vendor-facing platform; Dynamic View role-based access eliminating full license per user; viral adoption across organisation."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (236) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');