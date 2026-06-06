const fs = require('fs');
const lines = [
  JSON.stringify({finding: 636, category: "Legacy System Integration", friction: "Anadolu Efes (10th largest beer producer globally, 750M+ consumers, 70+ countries) faced 'network-complexity-drag' where their network structure had become too complex to support the speed the business required - when connectivity slowed, it directly affected sales operations and business continuity", url: "https://www.cloudflare.com/case-studies/anadolu-efes/", severity: "High", company: "Anadolu Efes"}),
  JSON.stringify({finding: 637, category: "Onboarding & Deployment", friction: "Kaizen Gaming (Betano sports betting, 13M customers, 19 markets) faced 'real-time-betting-pressure' where 'if you see a goal scored and you want to bet, there is no time to lose, so everything has to be real-time' - creating major traffic load for their software with 600K concurrent connections", url: "https://www.cloudflare.com/case-studies/kaizen-gaming/", severity: "High", company: "Kaizen Gaming"}),
  JSON.stringify({finding: 638, category: "Onboarding & Deployment", friction: "Coinbase (3,800 employees, crypto exchange) discovered 'coordination-headwind' where asking questions is free but answering is very expensive - context switching burns focus that is hard to recover, and at companies of thousands, small rituals compress time available for deep work", url: "https://linear.app/customers/coinbase", severity: "High", company: "Coinbase"}),
  JSON.stringify({finding: 639, category: "Onboarding & Deployment", friction: "Remote (2,800 employees, global HR platform for distributed workforces) faced 'tool-scale-mismatch' where their old issue tracking tool couldn't manage their scale or workload and started to slow them down as they grew from startup to 1,000 person company", url: "https://linear.app/customers/remote", severity: "High", company: "Remote"}),
  JSON.stringify({finding: 640, category: "Onboarding & Deployment", friction: "DoorDash shortened time to produce email campaigns by 3 days with HubSpot marketing automation, addressing the common pain of marketing teams lacking direct developer access for campaign changes", url: "https://www.hubspot.com/case-studies/doordash", severity: "Medium", company: "DoorDash"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 636 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);