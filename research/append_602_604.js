const fs = require('fs');
const lines = [
  JSON.stringify({finding: 602, category: "Onboarding & Deployment", friction: "DoorDash (millions of merchants across 30+ countries) needed to shorten email campaign production time by 3 days using HubSpot marketing automation", url: "https://www.hubspot.com/case-studies/doordash", severity: "High", company: "DoorDash"}),
  JSON.stringify({finding: 603, category: "Onboarding & Deployment", friction: "DraftKings (daily fantasy sports and betting platform) faced 'gronk-spike' events where fans open and refresh apps doubling platform traffic within seconds, requiring real-time incident response for peak traffic events", url: "https://www.pagerduty.com/customer/draftkings/", severity: "High", company: "DraftKings"}),
  JSON.stringify({finding: 604, category: "Security and Governance", friction: "Australian Bank needed to automate compliance measures and supercharge deployments while managing10,000+ employees across regulated financial services", url: "https://www.pagerduty.com/customer/australian-bank/", severity: "High", company: "Australian Bank"})
];
const current = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('Current lines:', current);
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding',602 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);