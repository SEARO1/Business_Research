const fs = require('fs');
const lines = [
  JSON.stringify({finding: 633, category: "Onboarding & Deployment", friction: "DraftKings (daily fantasy sports and betting platform) faced 'gronk-spike' events where fans open and refresh apps within seconds of events starting, often doubling platform traffic and stressing infrastructure - key people were tied to laptops monitoring systems all day", url: "https://www.pagerduty.com/customer/draftkings/", severity: "High", company: "DraftKings"}),
  JSON.stringify({finding: 634, category: "Onboarding & Deployment", friction: "Zendesk (5,000+ employees, San Francisco) incident managers spent 5-6 hours manually analyzing incidents by combing through countless Slack channels, watching Zoom recordings, checking logs, and putting tiny pieces together into long Word docs", url: "https://www.pagerduty.com/customer/zendesk/", severity: "High", company: "Zendesk"}),
  JSON.stringify({finding: 635, category: "Onboarding & Deployment", friction: "DoorDash (millions of merchants, food delivery platform) needed to shorten time to produce email campaigns by 3 days using HubSpot marketing automation but marketing teams often lack direct developer access making campaign changes slow", url: "https://www.hubspot.com/case-studies/doordash", severity: "Medium", company: "DoorDash"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 633 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);