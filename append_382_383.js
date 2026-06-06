const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 382. DevOps service companies recommending CI/CD platforms to clients since 2015 face a "jenkins-outdated-lagging-behind-and-clients-stumbling-on-same-mistakes" crisis where Jenkins is outdated, been around too long, and clients keep stumbling on the same mistakes, resource consumption problems, and outdated patterns, and the only path to recommending a CI/CD platform with the best caching flow and YAML syntax simplicity is CircleCI where smart caching works smoothly not just at introducing and setting dependencies but throughout the entire flow, enabling clients to cache and reuse many things with way faster time to market
- **Category:** Onboarding & Deployment
- **Friction:** DevOps service companies since 2015 face a "jenkins-outdated-lagging" crisis. "Jenkins was crossed off Denis's CI/CD recommendation list a long time ago. It's outdated, it's been there for too long, and it's lagging behind. But people still keep using it and stumbling on the same mistakes and problems and resource consumption." The only path to best-in-class recommendations is CircleCI.
- **Source:** https://circleci.com/case-studies/corewide/
- **Severity:** High. Named exec: Denis Prysukhin (Co-founder and CTO, Corewide). Quantified: DevOps service since 2015; "best caching flow" of all solutions tried; IoT client: 4 failures all of 2021 across nightly builds; backup system with max 1 hour data loss; infrastructure-as-code stress tests; YAML anchors for parallelism.

### 383. Enterprise mobile platforms serving 225+ brands in 70 countries with Ruby on Rails monoliths and 10,000+ specs face a "single-mac-mini-teamcity-30-minute-builds-and-star-wars-siren-failure-alerts" crisis where builds ran on a single Mac mini using TeamCity taking 30+ minutes with no real-time feedback (failure announced by Imperial siren from Star Wars), iOS provisioning was a mess with one developer at a time responsible, and the only path to iOS updates every 2 weeks (Apple's max speed), 1 web release/day, and sub-15-minute production deployment is CircleCI with fully automated pipeline where QA pulls the trigger and production-ready build goes to App Store without manual intervention
- **Category:** Onboarding & Deployment
- **Friction:** Enterprise mobile platforms with 225+ brands and 10K+ specs face a "single-mac-mini-30min-builds-star-wars-siren" crisis. "Each build took over 30 minutes, and there was no real-time feedback at all — if a build failed, the team found out when the computer played the Imperial siren from Star Wars." "It used to be that pushing to production was a really big deal." The only path to daily releases and removing fear of deployment is CircleCI.
- **Source:** https://circleci.com/case-studies/gospotcheck/
- **Severity:** Critical. Named exec: Nick Wilson (VP Technical Operations, GoSpotCheck). Quantified: 225+ enterprise brands in 70 countries; 10,000+ Ruby on Rails specs; 30+ min builds → under 15 min; iOS update every 2 weeks; web release 1/day; 6 engineers for Android + iOS; 12 projects ported in under 3 months; "sea change: removing the fear of deployments."
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (382-383) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"DevOps service cos recommending CI/CD since 2015 face Jenkins-outdated-lagging crisis. The only path to best caching and YAML simplicity for clients is CircleCI where caching works smoothly end-to-end.","Source_URL":"https://circleci.com/case-studies/corewide/","Severity_Impact":"High. Named exec: Denis Prysukhin (Co-founder and CTO, Corewide). Quantified: DevOps service since 2015; best caching flow; IoT client 4 failures all 2021; backup system max 1hr data loss; YAML anchors for parallelism."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Enterprise mobile cos with225+ brands and 10K+ specs face single-Mac-mini-30min-builds-Star-Wars-siren crisis. The only path to iOS every 2 weeks and daily web deploys is CircleCI removing fear of deployment.","Source_URL":"https://circleci.com/case-studies/gospotcheck/","Severity_Impact":"Critical. Named exec: Nick Wilson (VP Technical Operations, GoSpotCheck). Quantified: 225+ brands/70 countries; 10K+ specs; 30+ min to under 15 min builds; iOS update every 2 weeks; web 1/day; 6 engineers for Android+iOS; 12 projects ported in 3 months."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (382-383) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');