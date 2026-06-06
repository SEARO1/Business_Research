const fs = require('fs');
const lines = [
  JSON.stringify({finding: 605, category: "Onboarding & Deployment", friction: "Zendesk (100K+ customers, 4M agents, 160+ countries) needed incident analysis that was less manual and more informative for their customer service operations across billions of interactions", url: "https://www.pagerduty.com/customer/zendesk/", severity: "High", company: "Zendesk"}),
  JSON.stringify({finding: 606, category: "Legacy System Integration", friction: "FOX Corporation (10,000+ employees, media & entertainment, Los Angeles) needed digital operational transformation across legacy systems to achieve operational integrity, reduce costs, and accelerate innovation", url: "https://www.pagerduty.com/customer/fox/", severity: "High", company: "FOX Corporation"}),
  JSON.stringify({finding: 607, category: "Onboarding & Deployment", friction: "Vodafone (global telecom with millions of customers) needed real-time operational visibility to better understand their operations across multiple countries and network infrastructure", url: "https://www.pagerduty.com/customer/vodafone/", severity: "High", company: "Vodafone"}),
  JSON.stringify({finding: 608, category: "Onboarding & Deployment", friction: "TUI Group (world's leading tourism group) needed outstanding digital experience for customers while managing complex travel operations across hundreds of aircraft and cruise ships", url: "https://www.pagerduty.com/customer/tui/", severity: "High", company: "TUI Group"}),
  JSON.stringify({finding: 609, category: "Onboarding & Deployment", friction: "Remote (2,800 employees, global HR platform for distributed workforces) switched from a complicated tool to Linear to move faster as they scaled from startup to 1,000 person company - their old tool 'couldn't manage their scale or workload and started to slow them down'", url: "https://linear.app/customers/remote", severity: "High", company: "Remote"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 605 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);