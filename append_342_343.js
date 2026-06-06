const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 342. Technology companies with 13,000+ employees and 50+ offices worldwide face a "decentralized-tool-selection-and-scattered-servers" crisis where teams organically choose their own tools creating a "marketplace for ideas" that results in scattered individual servers managed around the world and inconsistent workflows, and the only path to ~100% uptime and unified Git management is GitLab Geo with read-only mirrors that keep data close to users and zero-downtime upgrades for distributed teams
- **Category:** Onboarding & Deployment
- **Friction:** Technology companies with 13,000+ employees and 50+ offices worldwide face a "decentralized-tool-selection-and-scattered-servers" crisis. "We'd be wasting a lot of NVIDIA engineering time with lots of individual little servers being managed around the world. We need something more modern." "We have a very decentralized model where groups get to choose their own way of doing things. And eventually they'll grow big enough where that becomes unworkable and then they'll come to the central groups to help them manage it." The only path to ~100% uptime is GitLab with Geo.
- **Source:** https://about.gitlab.com/customers/nvidia/
- **Severity:** High. Named execs: Patrick Herlihy (Configuration Management Specialist, NVIDIA); Kevin Sage (SCM Manager, NVIDIA). Quantified: 13,000+ employees; 50+ offices worldwide; ~100% uptime for last 6 months; GitLab Geo for distributed teams; read-only mirrors; zero downtime upgrades; Kubernetes integration; disaster recovery with Geo.

### 343. Investment banks with 35,000+ employees and custom toolchains face a "1-build-every-2-weeks-and-toolchain-complexity" crisis where previous build systems can't handle concurrent development, tool confusion slows adoption, and feature design to production takes too long, and the only path to 1,000+ daily builds and dozens of teams pushing to production in <24 hours is GitLab Premium replacing the custom toolchain with a single ecosystem for source control, CI/CD, QA, and production
- **Category:** Onboarding & Deployment
- **Friction:** Investment banks with 35,000+ employees and custom toolchains face a "1-build-every-2-weeks-and-toolchain-complexity" crisis. "We wanted a modern toolset for managing code that developers coming into the firm would likely already be familiar with." "We're bringing into the firm a platform that our engineers actually want to use." The only path to 1,000+ daily builds is GitLab replacing the custom toolchain.
- **Source:** https://about.gitlab.com/customers/goldman-sachs/
- **Severity:** Critical. Named exec: Goldman Sachs Engineering Division. Quantified: 35,000+ employees; 1 build/2 weeks → 1,000+ CI feature branch builds/day; dozens of teams pushing to production in <24 hours; release cycle from 1-2 weeks to a few minutes; Kubernetes; GitLab as complete ecosystem for development, source code control, reviews, builds, testing, QA, production.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (342-343) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Tech cos with13K employees and 50+ offices face decentralized-tool-selection-and-scattered-servers crisis. The only path to ~100% uptime and unified Git is GitLab Geo with read-only mirrors and zero-downtime upgrades.","Source_URL":"https://about.gitlab.com/customers/nvidia/","Severity_Impact":"High. Named execs: Patrick Herlihy (Config Management Specialist); Kevin Sage (SCM Manager, NVIDIA). Quantified: 13K+ employees; 50+ offices; ~100% uptime; GitLab Geo; read-only mirrors; zero downtime upgrades; distributed teams."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Investment banks with35K employees and custom toolchain face 1-build-every-2-weeks crisis. The only path to 1,000+ daily builds and <24hr production pushes is GitLab replacing custom toolchain.","Source_URL":"https://about.gitlab.com/customers/goldman-sachs/","Severity_Impact":"Critical. Named exec: Goldman Sachs Engineering Division. Quantified: 35K+ employees; 1 build/2 weeks to 1,000+ builds/day; dozens of teams pushing to production in <24hrs; release from 1-2 weeks to minutes; complete DevOps ecosystem."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (342-343) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');