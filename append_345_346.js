const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 345. Regional banks with 7,000 employees and GitHub on-premise face a "significant-operational-resources-and-toolchain-complexity" crisis where GitHub on-premise requires significant operational resources and heavy engineering to maintain, reliance on other tools for CI/CD and security creates a complex toolchain, and lack of single source of truth means no full visibility in the software development lifecycle, and the only path to multi-cloud deployments (AWS + GCP) and simplified toolchain is GitLab Ultimate SaaS with SAST, container security, and secrets management
- **Category:** Onboarding & Deployment
- **Friction:** Regional banks with 7,000 employees and GitHub on-premise face a "significant-operational-resources-and-toolchain-complexity" crisis. "They needed significant operational resources and heavy engineering to maintain their GitHub instance. Compounding the challenge was their reliance on other tools for CI/CD and security, and the team struggled with a complex toolchain. The lack of a single source of truth meant team members were unable to have full visibility." The only path to multi-cloud and simplified tooling is GitLab Ultimate SaaS.
- **Source:** https://about.gitlab.com/customers/bab/
- **Severity:** High. Named exec: Caio Trevisan (Head of DevOps Enablement, Bendigo and Adelaide Bank). Quantified: 7,000 employees; 1,500 projects migrated; 30 organizations; 500 users; 50GB data in 4 weeks; AWS + GCP multi-cloud deployments; SAST, container security, secrets management; new hires push code on second day; DevOps Academy onboards in 1 week; moving away from Jenkins for CD.

### 346. Telecommunications companies with 216,500 employees and multiple CI/CD tools (GitHub Actions, Jenkins, other tools) face an "18-month-release-cycle-and-siloed-code-repositories" crisis where different teams use different tools, code sharing across departments is difficult, and release cycles of nearly 18 months kill competitiveness, and the only path to 13,000+ active users and 3-month release cycles is GitLab Premium to Ultimate with inner source culture and a CI/CD toolsuite that spreads "like wildfire via word of mouth"
- **Category:** Onboarding & Deployment
- **Friction:** Telecommunications companies with 216,500 employees and multiple CI/CD tools face an "18-month-release-cycle-and-siloed-code-repositories" crisis. "Before our transformation to Agile and DevOps started, we had release cycles of nearly 18 months in some cases. We've been able to dramatically reduce that to roughly 3 months." "Before purchasing GitLab Premium, it was difficult to find a way to facilitate code sharing across different departments. People would say, 'I'm sure this has already been developed hundreds of times, but I can't access the source code.'" The only path to 3-month releases and inner source is GitLab.
- **Source:** https://about.gitlab.com/customers/deutsche-telekom/
- **Severity:** Critical. Named execs: Thorsten Bastian (Business Owner, CI/CD Hub of Telekom IT, Deutsche Telekom); Norman Stamnitz (Product Manager, Telekom IT CI/CD Toolsuite, Deutsche Telekom). Quantified: 216,500 employees; 13,000+ active users; 75% of Agile programs using GitLab; 1,000+ users in very short time without advertising; release cycles from 18 months to 3 months; inner source culture; shift-left security with GitLab Ultimate; partner contributor to GitLab; monthly releases (22nd of every month).
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (345-346) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Regional banks with7K employees and GitHub on-premise face operational-resources-and-toolchain-complexity crisis. The only path to multi-cloud and simplified tooling is GitLab Ultimate SaaS with SAST and container security.","Source_URL":"https://about.gitlab.com/customers/bab/","Severity_Impact":"High. Named exec: Caio Trevisan (Head of DevOps Enablement, Bendigo & Adelaide Bank). Quantified: 7K employees; 1,500 projects/30 orgs/500 users/50GB migrated in 4 weeks; AWS+GCP multi-cloud; SAST/container security/secrets; new hires push code day 2; DevOps Academy 1 week."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Telecoms with216K employees and multiple CI/CD tools face 18-month-release-cycle-and-siloed-code crisis. The only path to 3-month releases and 13K+ users is GitLab Premium-to-Ultimate with inner source culture.","Source_URL":"https://about.gitlab.com/customers/deutsche-telekom/","Severity_Impact":"Critical. Named execs: Thorsten Bastian (CI/CD Hub Business Owner); Norman Stamnitz (Product Manager, Deutsche Telekom). Quantified: 216K employees; 13K+ active users; 75% of Agile programs; 1K+ users in weeks without ads; 18-month to 3-month release cycles; inner source; shift-left security; partner contributor."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (345-346) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');