const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 350. Government contractors with $7.7B revenue, 24,000+ employees, and 190 software development projects face a "multiple-disparate-expensive-toolchains-and-compliance-complexity" crisis where multiple acquisitions resulted in different DevSecOps toolchains spread across teams, each new contract requires building a new toolchain from scratch, and meeting emerging USG security requirements requires proving compliance with data, and the only path to 90% labor/admin savings and 13x faster security scanning is GitLab Ultimate as the backbone of a company-wide Common Software Development Environment (CSDE) on AWS GovCloud with automated patch creation (hours → minutes) and security scanning in one platform
- **Category:** Onboarding & Deployment
- **Friction:** Government contractors with $7.7B revenue and 24,000+ employees face a "multiple-disparate-expensive-toolchains-and-compliance-complexity" crisis. "Previously, our teams frequently had to build a new DevSecOps toolchain for every new contract that came in." "With multiple acquisitions under our belt, we had different DevSecOps toolchains spread across our software development teams." The only path to 90% labor savings and 13x security scanning is GitLab as CSDE backbone.
- **Source:** https://about.gitlab.com/customers/caci/
- **Severity:** Critical. Named execs: Glenn Kurowski (SVP and CTO, CACI); Kyle Craft (CSDE Service Lead, CACI); Wesley Monroe (Technical Project Manager, CACI). Quantified: $7.7B company; 24,000+ employees; 190 software development projects; 90% savings in labor and administrative work; patch creation from hours to minutes; 13x faster security scanning; 110 users in summer 2022 → 1,900+ developers in one year; 800 releases/year from one program alone (150 applications); AWS GovCloud; CSDE as-a-service; SSDF compliance.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 350 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Gov contractors with$7.7B revenue and 190 projects face multiple-disparate-toolchains-and-compliance crisis. The only path to 90% labor savings and 13x faster security scanning is GitLab as CSDE backbone on AWS GovCloud.","Source_URL":"https://about.gitlab.com/customers/caci/","Severity_Impact":"Critical. Named execs: Glenn Kurowski (SVP CTO); Kyle Craft (CSDE Service Lead); Wesley Monroe (Technical PM, CACI). Quantified: $7.7B; 24K+ employees; 190 projects; 90% labor/admin savings; patch creation hours to minutes; 13x faster security scanning; 1,900+ developers from 110 in one year; 800 releases/year; AWS GovCloud; CSDE."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 350 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');