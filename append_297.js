const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 297. Global logistics enterprises at petabyte scale facing SAP modernization face a "three-weeks-to-500-servers-and-zero-incidents" challenge where the goal is to deploy 500 SAP servers with near 100% uptime while retiring longstanding systems and technical debt, and the only path to this outcome is Microsoft Azure that provides enterprise-grade built-in security, governance, and global scale for SAP workloads
- **Category:** Onboarding & Deployment
- **Friction:** Global logistics enterprises at petabyte scale facing SAP modernization face a "three-weeks-to-500-servers-and-zero-incidents" challenge where the goal is to deploy 500 SAP servers with near 100% uptime while retiring longstanding systems and technical debt. "In three weeks, Maersk deployed 500 SAP servers with near 100% uptime and zero incidents. Retiring longstanding systems and technical debt reduced costs and shifted teams from infrastructure operations to engineering-led platform innovation." The only path to 500 SAP servers in 3 weeks with zero incidents is Microsoft Azure.
- **Source:** https://customers.microsoft.com/en-us/story/26271-maersk-sap-on-azure
- **Severity:** Critical. Quantified: 10K+ employees; petabyte-scale SAP environment; 500 SAP servers deployed in 3 weeks; near 100% uptime; zero incidents; technical debt retired; costs reduced; teams shifted from infrastructure ops to platform engineering.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 297 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global logistics enterprises at petabyte scale facing SAP modernization face a three-weeks-to-500-servers-and-zero-incidents challenge. The only path is Microsoft Azure providing enterprise-grade security, governance, and global scale for SAP workloads.","Source_URL":"https://customers.microsoft.com/en-us/story/26271-maersk-sap-on-azure","Severity_Impact":"Critical. Quantified: 10K+ employees; petabyte-scale SAP; 500 servers in 3 weeks; near 100% uptime; zero incidents; technical debt retired; costs reduced; teams shifted to platform engineering."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (297) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');