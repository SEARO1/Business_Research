const fs = require('fs');
const lines = [
  JSON.stringify({finding: 629, category: "Onboarding & Deployment", friction: "Australian Bank needed to supercharge deployments and automate compliance measures while operating as a large financial institution with complex regulatory requirements across multiple systems", url: "https://www.pagerduty.com/customer/australian-bank/", severity: "High", company: "Australian Bank"}),
  JSON.stringify({finding: 630, category: "Onboarding & Deployment", friction: "TUI Group (world's leading tourism company) needed outstanding digital experience for customers while managing complex travel operations across hundreds of aircraft, cruise ships, and hotels", url: "https://www.pagerduty.com/customer/tui/", severity: "High", company: "TUI Group"}),
  JSON.stringify({finding: 631, category: "Legacy System Integration", friction: "FOX Corporation (10,000+ employees, media & entertainment) needed operational integrity transformation to reduce costs, accelerate innovation, and drive revenue growth at scale across legacy media systems", url: "https://www.pagerduty.com/customer/fox/", severity: "High", company: "FOX Corporation"}),
  JSON.stringify({finding: 632, category: "Security and Governance", friction: "Vodafone (global telecom with millions of customers) needed better understanding of real-time operations to manage complex network infrastructure across multiple countries with increasing security threats", url: "https://www.pagerduty.com/customer/vodafone/", severity: "High", company: "Vodafone"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 629 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);