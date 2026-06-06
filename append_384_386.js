const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 384. 3D customization platforms for sports gear (cycling, triathlon, football, soccer) founded in 2019 with frontend and backend team separation face a "need-to-deploy-quickly-and-test-the-market-before-having-a-product" crisis where from day one the company needed to move fast and test the market even before having a product available, and the only path to every update being covered by CI/CD and customers getting preview links on every pull request is CircleCI where frontend teams run unit testing/linting/Cypress and backend teams manage APIs/databases with confidence that every customer experience is covered
- **Category:** Onboarding & Deployment
- **Friction:** 3D customization platforms for sports gear founded in 2019 face a "need-to-deploy-quickly-before-having-product" crisis. "From the beginning, we knew we needed a tool that we could deploy quickly because we needed to move fast. We wanted to test the market and try things out, even before we had a product available." The only path to every update covered by CI/CD is CircleCI.
- **Source:** https://circleci.com/case-studies/brikl/
- **Severity:** High. Named exec: Tobias Meixner (Co-founder and CTO, BRIKL). Quantified: founded 2019; 3D configurator for cycling/triathlon/football/soccer/swimming/hockey; frontend/backend team separation; Cypress testing; preview links per pull request; "every update is covered by the CI/CD pipeline."

### 385. COVID-19 testing companies performing 10% of all US PCR tests/day with 12-person software teams and 1 million tests/week capacity face a "bad-deploy-outage-means-cars-back-up-on-streets-and-labs-cant-process" crisis where software outages mean testing sites back up on streets, labs can't process samples, and people can't make appointments, and the only path to trusted workflows when impacting the world is CircleCI where the small team built auto-interpretation tools for 6,000+ Florida nursing homes on very short notice and can deploy complex workflows that wouldn't have been possible without CircleCI
- **Category:** Onboarding & Deployment
- **Friction:** COVID testing companies doing 10% of US PCR tests face a "bad-deploy-cars-back-up" crisis. "If our software had a bad deploy and caused any kind of outage, labs might not be able to process samples, and people might not be able to make testing appointments." "Cars waiting at testing sites will start backing up on streets if our software stops working even for a minute." The only path to "trust your workflows" is CircleCI.
- **Source:** https://circleci.com/case-studies/curative/
- **Severity:** Critical. Named execs: Colton Pierson (Senior Software Engineer, Curative); Isaac Turner (CIO and Co-founder, Curative). Quantified: 10% of all US COVID-19 PCR tests/day; 1M tests/week capacity; 12-person software team; 10M+ patients tested; 6,000+ Florida nursing homes; sepsis → COVID pivot; "when you're working on something that's impacting the world, you want to be able to trust your workflows."

### 386. Auto insurance claims settlement platforms for totaled vehicles with small dev teams face a "30-day-manual-process-for-settling-claims" crisis where manual processes for settling totaled claims used to take as long as 30 days, and the only path to less-than-one-day settlement and developers spending time coding apps not worrying about infrastructure is CircleCI where the CTO has stuck with CircleCI for many years across multiple businesses, integrated with Bright Security for false-positive-free DAST scanning on every build so developers can detect and fix security issues long before production
- **Category:** Onboarding & Deployment
- **Friction:** Auto insurance claims settlement platforms with small dev teams face a "30-day-manual-process" crisis. "We want to automate the manual processes for settling totaled claims that used to take as long as 30 days, and condense them down to less than one day." The only path to "deploy apps without thinking or worrying about infrastructure" is CircleCI with Bright Security.
- **Source:** https://circleci.com/case-studies/fastlane-neuralegion/
- **Severity:** High. Named exec: Mike Mclaren (CTO, Fastlane). Quantified: 30-day → less than 1 day claims settlement; small dev team; "CircleCI is one of those products I've stuck with for many years across multiple businesses"; Bright Security DAST no false positives; API security testing integrated into pipeline; "we'll remain a tiny shop and use CircleCI to automate testing."
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 3 findings (384-386) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"3D customization platforms for sports gear founded 2019 face need-to-deploy-quickly crisis. The only path to every update covered by CI/CD and preview links is CircleCI.","Source_URL":"https://circleci.com/case-studies/brikl/","Severity_Impact":"High. Named exec: Tobias Meixner (Co-founder and CTO, BRIKL). Quantified: founded 2019; 3D configurator for cycling/triathlon/football/soccer; Cypress testing; every update covered by CI/CD; preview links per PR."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"COVID testing cos doing10% of US PCR tests face bad-deploy-cars-back-up crisis. The only path to trusted workflows is CircleCI enabling complex workflows on short notice.","Source_URL":"https://circleci.com/case-studies/curative/","Severity_Impact":"Critical. Named execs: Colton Pierson (Sr Software Engineer); Isaac Turner (CIO Co-founder, Curative). Quantified: 10% US PCR tests/day; 1M tests/week; 12-person software team; 10M+ patients; 6K+ FL nursing homes; trust workflows."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Auto insurance claims settlement with small dev teams face 30-day-manual-process crisis. The only path to less-than-1-day settlement is CircleCI with Bright Security DAST.","Source_URL":"https://circleci.com/case-studies/fastlane-neuralegion/","Severity_Impact":"High. Named exec: Mike Mclaren (CTO, Fastlane). Quantified: 30-day to less than 1 day; small dev team; CircleCI for years across multiple businesses; Bright Security no false positives; API security on every build."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 3 findings (384-386) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 3) + ' lines');