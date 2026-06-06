const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 387. Feature flag management platforms serving Microsoft, IBM, Atlassian and 1,000+ organizations with real-time streaming architecture and circular dependencies (using own tool to test own tool) face a "high-stakes-circular-dependencies-and-constant-test-coverage-expansion" crisis where the stakes are particularly high whenever code is pushed to production because the platform tests itself, and the only path to hundreds of daily deployments and 4-5 minute test suites is CircleCI where individual developers can merge code confidently knowing it's already been tested and won't cause downstream problems, because "LaunchDarkly was built on CircleCI — it would have been very difficult to get to where we are now without its simplicity and power"
- **Category:** Onboarding & Deployment
- **Friction:** Feature flag management platforms with circular dependencies face a "high-stakes-circular-dependencies" crisis. "Like many developer tools, the company uses its own tool to run its product. The circular dependencies this creates mean the stakes are particularly high whenever code is pushed to production." The only path to hundreds of daily deploys and 4-5 minute test suites is CircleCI.
- **Source:** https://circleci.com/case-studies/launchdarkly/
- **Severity:** High. Named execs: Adam Zimman (VP Platform, LaunchDarkly); Andrew Brown (Senior Software Engineer, LaunchDarkly). Quantified: Microsoft/IBM/Atlassian customers; 1,000+ organizations; deploys hundreds of times daily; test suites run in 4-5 minutes; "LaunchDarkly was built on CircleCI"; released CircleCI orb for Code References; ease of use the main reason for choosing CircleCI.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 387 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Feature flag platforms with circular dependencies (using own tool to test own tool) face high-stakes-circular-dependencies crisis. The only path to hundreds of daily deploys and 4-5 min test suites is CircleCI where devs merge confidently knowing tests already passed.","Source_URL":"https://circleci.com/case-studies/launchdarkly/","Severity_Impact":"High. Named execs: Adam Zimman (VP Platform); Andrew Brown (Sr Software Engineer, LaunchDarkly). Quantified: Microsoft/IBM/Atlassian customers; 1K+ orgs; deploys hundreds/day; test suites 4-5 min; LaunchDarkly built on CircleCI; released orb for Code References."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 387 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');