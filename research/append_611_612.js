const fs = require('fs');
const lines = [
  JSON.stringify({finding: 611, category: "Security and Governance", friction: "Shopify (millions of merchants across 175+ countries) faced escalating automated attacks including bots, data scraping, credential harvesting, and DDoS attacks that could compromise millions of storefronts - needed simple way to achieve something very complex at scale", url: "https://www.cloudflare.com/case-studies/shopify/", severity: "High", company: "Shopify"}),
  JSON.stringify({finding: 612, category: "Security and Governance", friction: "Discord (2.4M concurrent users, 25M+ registrations) faced constant DDoS attacks from gamers targeting each other during matches - engineers were constantly dealing with attacks that caused customer churn and poor retention", url: "https://www.cloudflare.com/case-studies/discord/", severity: "High", company: "Discord"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 611 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);