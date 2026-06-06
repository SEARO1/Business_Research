const fs = require('fs');
const lines = [
  JSON.stringify({finding: 647, category: "Security and Governance", friction: "Mitsubishi Gas Chemical (Japanese specialty chemicals manufacturer with global operations) faced 'egress-ip-frustration' where previous security provider couldn't issue a global egress IP, forcing employees to route through corporate network or use unprotected residential connections, and sometimes go to the office just to reach work-specific websites", url: "https://www.cloudflare.com/case-studies/mitsubishi-gas-chemical/", severity: "High", company: "Mitsubishi Gas Chemical"}),
  JSON.stringify({finding: 648, category: "Security and Governance", friction: "Mitsubishi Gas Chemical faced 'security-client-neglect' where employees forgot to start the security client after boot, leaving web traffic temporarily unprotected and generating higher volume of support tickets", url: "https://www.cloudflare.com/case-studies/mitsubishi-gas-chemical/", severity: "Medium", company: "Mitsubishi Gas Chemical"}),
  JSON.stringify({finding: 649, category: "Onboarding & Deployment", friction: "HubSpot (40,000+ customers, 90+ countries) faced 'ssl-provisioning-bottleneck' where manually bundling SSL certificates for each customer took as long as 5 days from request to deployment, creating massive operational burden for marketing platform at scale", url: "https://www.cloudflare.com/case-studies/hubspot/", severity: "High", company: "HubSpot"}),
  JSON.stringify({finding: 650, category: "Onboarding & Deployment", friction: "HubSpot needed SSL for 40,000+ domains before Google Chrome deadline but manually bundling certificates took 5 days per customer - Cloudflare's edge SSL propagated in 90 seconds enabling automatic SSL provisioning for 47,000 sites in just 5 days", url: "https://www.cloudflare.com/case-studies/hubspot/", severity: "High", company: "HubSpot"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 647 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);