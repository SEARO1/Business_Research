const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 217. Hyper-growth gamer-communication platforms with 2.4M+ concurrent users and 25M+ registrations face a "websockets-DDoS-spiral" crisis where the only defense was an army of HAProxy boxes that cost six figures annually and still required constant engineer attention, and the only path to scaling is a CDN with built-in L7 attack absorption
- **Category:** Security and Governance
- **Friction:** Hyper-growth gamer-communication platforms with 2.4M+ concurrent users and 25M+ registrations face a "websockets-DDoS-spiral" crisis where the only defense was an army of HAProxy boxes that cost six figures annually and still required constant engineer attention. "Since we are a gamer focused product we attract a lot of users who love to DDoS each other during game matches. As we grew more popular the intensity and occurrences of these DDoS attacks increased to the point where our engineers were constantly dealing with them." Customer retention dropped sharply with every outage because new signups got bad first impressions.
- **Source:** https://www.cloudflare.com/case-studies/discord
- **Severity:** High. Named execs: Stanislav Vishnevskiy (CTO, Discord), Jake Heinz (Software Engineer, Discord). Quantified: 2.4M+ concurrent users (9,000%+ growth in 1 year); 25M+ registrations; 2PB+ traffic/month served from edge cache; $100,000+ monthly savings on Google Cloud bill; 2M websocket events/second peak; L3/L4 reflection attacks + L7 attacks absorbed at edge; HAProxy + DNS load balancing replaced with single CDN + DDoS.

### 218. Insurtech SaaS leaders with 2,500+ employees across 5 countries face a "Zscaler + Cisco + per-app-vendor sprawl" crisis where multiple security vendors block work-critical sites and grant excessive network access, and the only path to default-deny + agility is consolidating onto a unified security and networking stack with ZTNA + Magic Transit
- **Category:** Security and Governance
- **Friction:** Insurtech SaaS leaders with 2,500+ employees across 5 countries face a "Zscaler + Cisco + per-app-vendor sprawl" crisis where multiple security vendors block work-critical sites (forcing policy relaxation that accepts risk) and grant excessive network access (Cisco AnyConnect VPN exposes the whole network, not specific apps). "By consolidating controls onto Cloudflare rather than the many control planes of multiple-vendor systems, my teams can focus on driving the business forward. I don't know of a lot of security teams that can say that."
- **Source:** https://www.cloudflare.com/case-studies/applied-systems
- **Severity:** High. Named exec: Tanner Randolph (CISO, Applied Systems). Quantified: 2,500+ employees; US, UK, Canada, Western Europe, India; Zscaler + Cisco AnyConnect VPN replaced with Cloudflare Zero Trust; Magic Transit + Network Firewall for L3 DDoS protection; default-allow → default-deny posture; Terraform-based universal firewall rules; 2x cost reduction vs. previous vendors; rapid migration to cloud-native SaaS for insurance brokerages; posture checking by user group, device, app risk level.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 217-218 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Hyper-growth gamer-communication platforms with 2.4M+ concurrent users and 25M+ registrations face a websockets-DDoS-spiral crisis where the only defense was an army of HAProxy boxes that cost six figures annually and still required constant engineer attention. Customer retention dropped sharply with every outage.","Source_URL":"https://www.cloudflare.com/case-studies/discord","Severity_Impact":"High. Named execs: Stanislav Vishnevskiy (CTO, Discord), Jake Heinz (Software Engineer, Discord). Quantified: 2.4M+ concurrent users (9,000%+ growth in 1 year); 25M+ registrations; 2PB+ traffic/month served from edge cache; $100,000+ monthly savings on Google Cloud bill; 2M websocket events/second peak; L3/L4 reflection attacks + L7 attacks absorbed at edge."}',
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Insurtech SaaS leaders with 2,500+ employees across 5 countries face a Zscaler + Cisco + per-app-vendor sprawl crisis where multiple security vendors block work-critical sites (forcing policy relaxation that accepts risk) and grant excessive network access (Cisco AnyConnect VPN exposes the whole network, not specific apps).","Source_URL":"https://www.cloudflare.com/case-studies/applied-systems","Severity_Impact":"High. Named exec: Tanner Randolph (CISO, Applied Systems). Quantified: 2,500+ employees; US, UK, Canada, Western Europe, India; Zscaler + Cisco AnyConnect VPN replaced with Cloudflare Zero Trust; Magic Transit + Network Firewall for L3 DDoS; default-allow to default-deny posture; Terraform-based universal firewall rules; 2x cost reduction vs. previous vendors; posture checking by user group, device, app risk level."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (217-218) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');
