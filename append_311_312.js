const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 311. Construction technology manufacturers with 30,000 employees, 10-15 distributed teams, and outsourced software development face a "no-in-house-CI-CD-and-reactive-security" crisis where source code sits in a joint venture, no internal CI/CD exists, and teams catch bugs in reactive mode instead of finding vulnerabilities in the pipeline, and the only path to 12x faster deployments and 50% shorter feedback loops is GitLab Ultimate with SAST/DAST, container scanning, dependency scanning, and secret detection
- **Category:** Onboarding & Deployment
- **Friction:** Construction technology manufacturers with 30,000 employees, 10-15 distributed teams, and outsourced software development face a "no-in-house-CI-CD-and-reactive-security" crisis. "Previously outsourced one of their software development projects to an external vendor... Hilti owned the majority of the joint venture, but it was not hosting source code in-house. There wasn't any internal CI/CD and also the teams didn't perform security testing according to the highest standards." "Development and test teams previously found themselves in 'reactive mode' when catching bugs." The only path to 12x faster deployments is GitLab Ultimate with integrated security scanning.
- **Source:** https://about.gitlab.com/customers/hilti
- **Severity:** Critical. Named execs: Raphael Hauser (Head of Governance, Hilti); Daniel Widerin (Head of Software Delivery, Hilti). Quantified: 30,000 employees; Scha an, Liechtenstein; 10-15 distributed teams; 50% shorter feedback loops (6 days to 3 days);400% increase in code check frequency (6x per 3 months to 2x per week); 12x faster deployment (3 hours to 15 minutes); GitLab Ultimate with SAST, DAST, container scanning, dependency scanning, secret detection, license compliance; AWS Kubernetes deployment.

### 312. Telecom infrastructure manufacturers with 100,000 employees serving 300+ global communications service providers face a "3-4-month-deployment-cycles-and-3-4-year-update-gaps" crisis where OSS/BSS deployments take months and major updates every few years, but cloud-native architecture demands monthly innovation cycles and CSPs demand GitOps automation in RFPs, and the only path to 50% deployment time reduction and 90,000 hours saved in year one is GitLab GitOps platform enabling cloud-native CI/CD with 10x more test scenarios
- **Category:** Onboarding & Deployment
- **Friction:** Telecom infrastructure manufacturers with 100,000 employees serving 300+ global CSPs face a "3-4-month-deployment-cycles-and-3-4-year-update-gaps" crisis. "Each deployment took three to four months, with major updates every three to four years." "Cloud-native architecture changed everything... customers' demands for faster innovation cycles meant that deployments, which once took months, now needed to happen in weeks." CSPs now require GitOps automation in RFPs. The only path to 50% deployment reduction is GitLab GitOps platform.
- **Source:** https://about.gitlab.com/customers/ericsson
- **Severity:** Critical. Named exec: Daniel Costa Soares (Head of Software Automation and Support, Ericsson OSS/BSS). Quantified: 100,000 employees; Stockholm, Sweden; 300+ global CSPs; 50% deployment time reduction; 2,000-3,000 test scenarios per deployment (10x increase); 90,000 hours saved in first year; 130,000 hours saved by 18 months; GitLab Premium; Jira/Confluence integration; Amazon Q proof of concept.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (311-312) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Construction tech manufacturers with30K employees and10-15 distributed teams face no-in-house-CI-CD-and-reactive-security crisis. The only path to 12x faster deployments and 50% shorter feedback loops is GitLab Ultimate with SAST/DAST.","Source_URL":"https://about.gitlab.com/customers/hilti","Severity_Impact":"Critical. Named execs: Raphael Hauser (Head of Governance); Daniel Widerin (Head of Software Delivery, Hilti). Quantified: 30K employees; 50% shorter feedback loops (6d to 3d); 400% more code checks;12x faster deployment (3hr to 15min); 10-15 distributed teams."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Telecom infrastructure manufacturers with100K employees face 3-4-month-deployment-cycles crisis. The only path to 50% deployment reduction and 90K hours saved is GitLab GitOps enabling cloud-native CI/CD with 10x test scenarios.","Source_URL":"https://about.gitlab.com/customers/ericsson","Severity_Impact":"Critical. Named exec: Daniel Costa Soares (Head of Software Automation and Support, Ericsson OSS/BSS). Quantified: 100K employees; 300+ global CSPs; 50% deployment time reduction; 90K hours saved year 1; 130K hours by 18 months; 2K-3K test scenarios/deployment (10x increase)."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (311-312) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');