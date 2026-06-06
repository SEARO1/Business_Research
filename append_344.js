const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 344. Data governance companies with 25,000+ employees and fragmented open source tooling face a "plugin-troubleshooting-and-late-security-discovery" crisis where on-premises Jira plugin issues block development, Veracode only finds coding issues late in the cycle causing resource-intensive rework, and operations must support Kubernetes with no unified platform, and the only path to 240 automated GCP deployments and $150K+ annual savings is GitLab Ultimate SaaS on Google Cloud with shift-left security scanning (DAST/SAST) and single orchestration environment
- **Category:** Onboarding & Deployment
- **Friction:** Data governance companies with 25,000+ employees and fragmented open source tooling face a "plugin-troubleshooting-and-late-security-discovery" crisis. "Existing on-premises Jira software incurred management complexity in the form of plugin troubleshooting, and with Veracode security software, teams were only able to discover coding issues late in the development cycle, causing resource-intensive rework." The only path to 240 automated deployments and $150K+ savings is GitLab Ultimate SaaS.
- **Source:** https://about.gitlab.com/customers/iron-mountain/
- **Severity:** High. Named execs: Hayelom Tadesse (VP Enterprise Technology, Iron Mountain); Jason Monoharan (VP Technology, Iron Mountain). Quantified: 25,000+ employees; 240 automated cloud deployments on GCP/GKE; VMs halved saving $60,000+/year maintenance; $90,000+/year labor savings; shift-left security with DAST and SAST; single pane of glass for capacity planning; Epic governance model for multi-year initiatives.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 344 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Data governance cos with25K employees and fragmented tooling face plugin-troubleshooting-and-late-security-discovery crisis. The only path to 240 automated GCP deployments and $150K+ annual savings is GitLab Ultimate SaaS with shift-left security.","Source_URL":"https://about.gitlab.com/customers/iron-mountain/","Severity_Impact":"High. Named execs: Hayelom Tadesse (VP Enterprise Technology); Jason Monoharan (VP Technology, Iron Mountain). Quantified: 25K+ employees; 240 automated GCP/GKE deployments; VMs halved; $60K+/year maintenance savings; $90K+/year labor savings; DAST/SAST; Epic governance."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 344 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');