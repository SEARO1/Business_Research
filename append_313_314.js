const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 313. Event platforms with 250-engineer orgs and Jenkins-based CI/CD face a "90-minutes-per-developer-per-week-in-downtime" crisis where developers wait for test failures that have no insight, pipeline configs are reinvented each time, and a 6-person platform team serves the entire org, and the only path to $70K annual savings and 28% developer downtime reduction is CircleCI with config policies for hard security fails and private orbs that let developers build within guardrails
- **Category:** Onboarding & Deployment
- **Friction:** Event platforms with 250-engineer orgs and Jenkins-based CI/CD face a "90-minutes-per-developer-per-week-in-downtime" crisis. "Their previous CI/CD tool, Jenkins, didn't have enough insight into why tests would fail, and they needed access to more repeatable tools and configurations to move faster." "If you resolve developer wait time, you effectively get more developers without changing anything else." The only path to $70K savings is CircleCI with config policies, private orbs, and Insights dashboard.
- **Source:** https://circleci.com/case-studies/eventbrite
- **Severity:** High. Named exec: Steven Reynolds (Principal Engineer, Eventbrite). Quantified: 250-engineer org; 6 platform developers; 90 min developer downtime per week (28% reduction); $70K annual savings; Jenkins replacement; config policies with hard fails; private orbs for security; CircleCI Insights dashboard for test coverage.

### 314. Autonomous vehicle companies with GM partnership building self-driving cars face a "unreliable-CI-with-custom-code-maintenance-and-no-build-visibility" crisis where engineers can't see which builds are running, diagnosing failures requires accessing log output and build artifacts, and building custom CI would cost months of engineering time, and the only path to faster road testing and day-1 productivity is CircleCI Enterprise with GPU-accelerated simulations on AWS that run many more tests before every road test
- **Category:** Onboarding & Deployment
- **Friction:** Autonomous vehicle companies with GM partnership face a "unreliable-CI-with-custom-code-maintenance-and-no-build-visibility" crisis. "Their previous tool was unreliable, and had a substantial amount of custom code which their team had to maintain at scale. It was difficult for engineers to see which builds were currently running, and when the team needed to diagnose the cause of failures, they had no easy way to access their log output or build artifacts." "Every piece of code gets a physical road test with an engineer in the car before it is merged into master." The only path to confident pre-road-test simulation is CircleCI Enterprise with AWS GPU instances.
- **Source:** https://circleci.com/case-studies/cruise
- **Severity:** Critical. Named exec: Adrian MacNeil (Director of Infrastructure Engineering, Cruise Automation/GM). Quantified: GM subsidiary building fully autonomous Chevy Bolt; 90 min per developer per week reduction; CircleCI Enterprise + GitHub Enterprise; AWS GPU instances for simulation; many more tests and simulations than before; day-1 productivity for new developers; faster ramp-up time as competitive advantage.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (313-314) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Event platforms with250-engineer org and Jenkins face90-min-per-developer-per-week-downtime crisis. The only path to $70K savings and 28% downtime reduction is CircleCI with config policies and private orbs.","Source_URL":"https://circleci.com/case-studies/eventbrite","Severity_Impact":"High. Named exec: Steven Reynolds (Principal Engineer, Eventbrite). Quantified: 250-engineer org; 6 platform developers; 90 min/dev/week downtime reduction (28%); $70K annual savings; Jenkins replacement."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"AV companies with GM partnership face unreliable-CI-with-custom-code crisis. The only path to confident pre-road-test simulation is CircleCI Enterprise with AWS GPU instances for many more tests.","Source_URL":"https://circleci.com/case-studies/cruise","Severity_Impact":"Critical. Named exec: Adrian MacNeil (Dir Infrastructure Engineering, Cruise/GM). Quantified: CircleCI Enterprise + GitHub Enterprise; AWS GPU instances; many more simulations before road test; day-1 new developer productivity; faster ramp-up as competitive advantage."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (313-314) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');