const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 341. Cloud service providers with 8,000+ customers and mixed VCS environments (Git, SVN, BitBucket, Redmine, Jira, Jenkins, Drone CI, CircleCI) face a "project-by-project-authorization-silos-and-scattered-repositories" crisis where external engineers on project-by-project basis create authorization gaps, knowledge is siloed, and different tools for different teams prevent DevOps adoption, and the only path to unified DevOps and audit-ready workflows is GitLab Premium with authorization management for internal/external engineers, all-in-one SCM/CI/CD, and approval workflows praised by external auditors
- **Category:** Onboarding & Deployment
- **Friction:** Cloud service providers with 8,000+ customers and mixed VCS environments face a "project-by-project-authorization-silos-and-scattered-repositories" crisis. "I wanted to create a way to share the knowledge and expertise of our internal developers and operators across projects." Due to inability to properly manage authorizations, various tools were introduced project-by-project, causing knowledge and expertise to be siloed. The only path to unified DevOps is GitLab Premium with all-in-one environment.
- **Source:** https://about.gitlab.com/customers/fujitsu/
- **Severity:** High. Named exec: Yuichi Saotome (Principal Engineer, Cloud Infra Division, Fujitsu Cloud Technologies). Quantified: 8,000+ customers; development cycle from up to 6 months to a few days; deployments from once every 6 months (taking ~1 day) to once every few weeks (taking ~5 minutes); replaced GitBucket, BitBucket, Redmine, Jira, Jenkins, Drone CI, CircleCI; audit firm praised workflow as "excellent"; all employees including non-engineers use GitLab; Slack/Jenkins/Prometheus/Redmine integrated.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 341 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Cloud providers with8K customers and mixed VCS environment face project-by-project-authorization-silos crisis. The only path to unified DevOps and audit-ready workflows is GitLab Premium with all-in-one SCM/CI/CD and authorization management.","Source_URL":"https://about.gitlab.com/customers/fujitsu/","Severity_Impact":"High. Named exec: Yuichi Saotome (Principal Engineer, Fujitsu Cloud Technologies). Quantified: 8K+ customers; dev cycle from 6 months to few days; deploy frequency from 6-month to weekly; deploy time from 1 day to 5 min; replaced 7 tools; audit firm praised workflow."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 341 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');