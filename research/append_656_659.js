const fs = require('fs');
const lines = [
  JSON.stringify({finding: 656, category: "Security and Governance", friction: "Canva (260M monthly users, 190 countries) faced 'AI-asset-scraping-paradox' where upset users and content partners reported finding their images on other sites scraped by AI bots, but Canva lacked the internal capacity to stop the problem - needed bot management to protect visual assets at scale", url: "https://www.cloudflare.com/case-studies/canva/", severity: "High", company: "Canva"}),
  JSON.stringify({finding: 657, category: "Legacy System Integration", friction: "Canva (acquiring multiple companies, cloud-native to legacy VPN) faced 'acquisition-infrastructure-mismatch' where each acquisition had different starting points - from cloud-native tech startups to organizations with legacy VPNs and on-premise infrastructure, making unified security difficult", url: "https://www.cloudflare.com/case-studies/canva/", severity: "High", company: "Canva"}),
  JSON.stringify({finding: 658, category: "Developer Experience", friction: "Canva (hundreds of microservices across dozens of teams) needed 'edge-routing-control' for Layer 7 logic like redirects, security headers, and filters - Cloudflare Workers lets them blur the line between edge and internal network, promoting developer velocity without coordinating complex backend changes", url: "https://www.cloudflare.com/case-studies/canva/", severity: "Medium", company: "Canva"}),
  JSON.stringify({finding: 659, category: "Performance and Reliability", friction: "Canva deployed Cloudflare Bot Management to stop malicious scraping and asset appropriation - bandwidth consumption dropped overnight without affecting legitimate traffic, solving a problem they had no internal capacity to address before", url: "https://www.cloudflare.com/case-studies/canva/", severity: "High", company: "Canva"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 656 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);