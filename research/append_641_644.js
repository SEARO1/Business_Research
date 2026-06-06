const fs = require('fs');
const lines = [
  JSON.stringify({finding: 641, category: "Security and Governance", friction: "Hutchison Telecommunications (Hong Kong) consolidated security and performance to reduce attacks, save costs, and deliver faster digital experiences across multiple markets", url: "https://www.cloudflare.com/case-studies/hutchison-telecom/", severity: "High", company: "Hutchison Telecom HK"}),
  JSON.stringify({finding: 642, category: "Security and Governance", friction: "Mitsubishi Gas Chemical streamlined secure global access with Cloudflare Zero Trust, gaining dedicated egress IPs and simplifying day-to-day operations across global operations", url: "https://www.cloudflare.com/case-studies/mitsubishi-gas-chemical/", severity: "High", company: "Mitsubishi Gas Chemical"}),
  JSON.stringify({finding: 643, category: "Security and Governance", friction: "NYC government agency faced multi-week password-guessing attack with 500M malicious requests blocked and platform stability disrupted - needed unified security to restore operations quickly", url: "https://www.cloudflare.com/case-studies/nyc-government/", severity: "High", company: "NYC Government Agency"}),
  JSON.stringify({finding: 644, category: "Security and Governance", friction: "Taiwan National Medical Institutions needed to raise defenses against increasing cyber threats and unify security posture across multiple hospital systems and healthcare networks", url: "https://www.cloudflare.com/case-studies/taiwan-medical/", severity: "High", company: "Taiwan Medical Institutions"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 641 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);