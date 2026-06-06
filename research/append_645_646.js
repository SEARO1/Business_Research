const fs = require('fs');
const lines = [
  JSON.stringify({finding: 645, category: "Security and Governance", friction: "Mitsubishi Gas Chemical (Japanese multinational, specialty chemicals) needed secure global access with dedicated egress IPs and simplified day-to-day operations across their global operations spanning multiple countries", url: "https://www.cloudflare.com/case-studies/mitsubishi-gas-chemical/", severity: "High", company: "Mitsubishi Gas Chemical"}),
  JSON.stringify({finding: 646, category: "Security and Governance", friction: "HubSpot (marketing SaaS platform with millions of users) used Cloudflare to protect their marketing platform infrastructure from DDoS attacks and bots while maintaining fast page loads for customers", url: "https://www.cloudflare.com/case-studies/hubspot/", severity: "High", company: "HubSpot"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 645 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);