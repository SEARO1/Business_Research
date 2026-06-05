const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 158. High-volume financial services platforms with24/7 trading operations face a coverage gap where overnight and weekend support creates a 'window of opportunity' for scammers to target frustrated customers — and without an AI agent that provides 24/7 coverage across multiple channels, support delays become a security and fraud risk
- **Category:** Onboarding
- **Friction:** High-volume financial services platforms with 24/7 trading operations face a coverage gap where overnight and weekend support creates a 'window of opportunity' for scammers to target frustrated customers. 'If we don't answer fast, they go elsewhere. And that's exactly how scammers strike. I was reading the stories of people who got scammed – people losing a lot of money, sometimes their life savings. It became clear to me that we needed to reduce that window of opportunity for scammers to attack.' With 150,000 monthly conversations across chat, email, WhatsApp, SMS, and phone, manual coverage simply cannot be everywhere at once.
- **Source:** https://fin.ai/customers/topstep
- **Severity:** High. Named exec: Dennis O'Connor (Former Director of Support, Topstep). Quantified: 97% Fin involvement rate; 65% Fin resolution rate (exceeded 50% goal); 150,000 monthly conversations; <1 hour resolution time (down from 2+ hours); Fin Voice for24/7 phone coverage; multiple channels: chat, email, WhatsApp, SMS, phone; CSAT scores increased. Quote: 'The fact that somebody in Asia Pacific can reach out to us in their native language, at what is two o'clock in the morning for us, and get a response instantly has been huge.'

### 159. Web3 and crypto platforms face a unique trust challenge where millions of pseudonymous users manage real financial assets without KYC identity verification — and without an AI agent that can deliver secure, accurate support to anonymous users 24/7, slow support creates fraud opportunities and erodes trust in a no-margin-for-error industry
- **Category:** Onboarding
- **Friction:** Web3 and crypto platforms face a unique trust challenge where millions of pseudonymous users manage real financial assets without KYC identity verification. 'We have millions and millions of monthly customers in Consensys, very high support volumes, and many of our users are pseudonymous. They do not want to give us information about themselves, and we do not want to know it. That makes delivering secure, reliable support an extraordinary challenge.' Slow support creates a 'window of opportunity' for scammers targeting frustrated users — and legacy systems with rigid bots couldn't keep pace with the volume or adapt to Web3 privacy requirements.
- **Source:** https://fin.ai/customers/consensys
- **Severity:** High. Named execs: Dror Avieli (Managing Director & VP CS), Yair Gal (Support Lead), Consensys. Quantified: ~20,000 Fin resolutions/month; 90% Fin involvement rate; >70% Fin resolution rate (growing); 200 countries served; real-time translation across dozens of languages; bake-off win: 20% better resolution, 15% better CSAT vs competitors; went live in 8 weeks; customer satisfaction consistently high with Fin; 5-star reviews where users believe they're talking to humans. Quote: 'Fin didn't just perform better. It gave us the power to move fast and own the outcomes. And the pricing model backed that up – we only pay when Fin actually resolves something.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 158 and 159 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = `{"Pain_Point_Category":"Onboarding","Specific_Friction":"High-volume financial services platforms with 24/7 trading operations face a coverage gap where overnight and weekend support creates a 'window of opportunity' for scammers to target frustrated customers. 'If we don't answer fast, they go elsewhere. And that's exactly how scammers strike. I was reading the stories of people who got scammed – people losing a lot of money, sometimes their life savings.' With 150,000 monthly conversations across5 channels, manual coverage cannot be everywhere at once.","Source_URL":"https://fin.ai/customers/topstep","Severity_Impact":"High. Named exec: Dennis O'Connor (Former Director of Support, Topstep). Quantified: 97% Fin involvement; 65% resolution rate; 150k monthly conversations; <1hr resolution time (from 2+ hrs); Fin Voice for 24/7 phone; CSAT increased."}
{"Pain_Point_Category":"Onboarding","Specific_Friction":"Web3 and crypto platforms face a unique trust challenge where millions of pseudonymous users manage real financial assets without KYC. 'We have millions of monthly customers... users are pseudonymous. They do not want to give us information about themselves, and we do not want to know it. That makes delivering secure, reliable support an extraordinary challenge.' Slow support creates fraud opportunities and erodes trust.","Source_URL":"https://fin.ai/customers/consensys","Severity_Impact":"High. Named execs: Dror Avieli (Managing Director & VP CS), Yair Gal (Support Lead), Consensys. Quantified: ~20k resolutions/month; 90% involvement; >70% resolution rate; 200 countries; bake-off win: 20% better resolution, 15% better CSAT; 8 weeks to live."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.split('\n').join('\n') + '\n');
console.log('Appended findings 158 and 159 to jsonl');