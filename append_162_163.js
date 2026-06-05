const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 162. Regulated financial services companies face a compliance-AI tension where vendor AI solutions feel untrustworthy and potentially unsafe — and without an AI agent that has documented safety mechanisms, transparent data handling, and verifiable accuracy, teams default to manual processes even when they desperately need automation
- **Category:** Onboarding
- **Friction:** Regulated financial services companies face a compliance-AI tension where vendor AI solutions feel untrustworthy and potentially unsafe. 'Our experience with Zendesk's AI wasn't reassuring; it didn't feel bulletproof.' With FCA regulation, GDPR compliance, and Ofgem oversight, the team needed an AI they could trust — not just configure. Every detail in financial services support had to be right, and a solution that hallucinated or handled data improperly wasn't just risky, it was a career-ending problem.
- **Source:** https://fin.ai/customers/mony-group
- **Severity:** High. Named exec: Lee Burkhill (Project Manager, MONY Group). Quantified: 98% Fin involvement rate; 64% Fin resolution rate; >25,000 conversations/month; Zendesk → Intercom migration with zero data loss; never seen Fin hallucinate in production; Fin connected to live rewards API for real-time personalized answers; secure document upload via SendSafely; FCA audited every6 months. Quote: 'I've never seen Fin hallucinate – not once. That's a huge deal. We constantly test it, throw new questions at it, analyze variations, and it holds up. That level of accuracy in an AI agent is rare.'

### 163. Growing subscription ecommerce brands face a contact rate explosion where more subscribers means proportionally more support contacts — and without an AI agent that can absorb volume growth without headcount increases, the choice is between slowing growth or destroying team culture with rapid hiring
- **Category:** Onboarding
- **Friction:** Growing subscription ecommerce brands face a contact rate explosion where more subscribers means proportionally more support contacts. 'We were struggling with high contact rates at the end of 2022. Anywhere from 30-40% of our subscribers were seeking support every month, which was a lot.' Without AI, the only way to maintain service levels while growing is constant hiring — which the CS leader deliberately avoids because team culture and genuine human connection disappear at scale.
- **Source:** https://fin.ai/customers/nuuly
- **Severity:** High. Named exec: Natalie Hurst (Sr. Director of Customer Success, Nuuly). Quantified: 95% CSAT maintained; 49% Fin resolution rate; 20% reduction in response times; 40% slower projected headcount growth; 11% drop in contact rate (from 30-40% to 19-29%); contact rate reduced despite subscriber growth; knowledge management investment was key prerequisite. Quote: 'I think a big contributing factor to our high CSAT scores – which are consistently at 95% or above – is that our support team have a genuine connection to our customers. That's very rare, particularly for the fashion and ecommerce industries.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 162 and 163 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = `{"Pain_Point_Category":"Onboarding","Specific_Friction":"Regulated financial services companies face a compliance-AI tension where vendor AI solutions feel untrustworthy and potentially unsafe. 'Our experience with Zendesk's AI wasn't reassuring; it didn't feel bulletproof.' With FCA regulation, GDPR compliance, and Ofgem oversight, the team needed an AI they could trust — not just configure.","Source_URL":"https://fin.ai/customers/mony-group","Severity_Impact":"High. Named exec: Lee Burkhill (Project Manager, MONY Group). Quantified: 98% Fin involvement; 64% Fin resolution rate; >25k conv/month; zero data loss Zendesk→Intercom migration; never seen Fin hallucinate; rewards API connected; SendSafely document upload; FCA audited every 6 months."}
{"Pain_Point_Category":"Onboarding","Specific_Friction":"Growing subscription ecommerce brands face a contact rate explosion where more subscribers means proportionally more support contacts. 'Anywhere from 30-40% of our subscribers were seeking support every month, which was a lot.' Without AI, constant hiring is the only path — which destroys team culture and human connection at scale.","Source_URL":"https://fin.ai/customers/nuuly","Severity_Impact":"High. Named exec: Natalie Hurst (Sr. Director of CS, Nuuly). Quantified: 95% CSAT; 49% Fin resolution rate; 20% faster response; 40% slower headcount growth; 11% drop in contact rate; contact rate reduced despite subscriber growth."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.split('\n').join('\n') + '\n');
console.log('Appended findings 162 and 163 to jsonl');