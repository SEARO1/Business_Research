const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 211. Public-sector agencies with 300,000+ constituents face a "multi-week credential-stuffing" crisis where scraped employee user-IDs are used to mount sustained password-guessing attacks, and the only sustainable defense is edge-native WAF + DDoS protection that blocks 500M+ malicious requests/month without manual IP blocking
- **Category:** Security and Governance
- **Friction:** Public-sector agencies with 300,000+ constituents face a "multi-week credential-stuffing" crisis where scraped employee user-IDs are used to mount sustained password-guessing attacks, and the only sustainable defense is edge-native WAF + DDoS protection. "We called Cloudflare because our security team was up every night for a couple of weeks looking at the activity. Cloudflare deployment freed us from that unsustainable, manual work." Manual IP blocking at the existing firewall risks blocking legitimate IPs if attackers use public cloud infrastructure to host their attacks.
- **Source:** https://www.cloudflare.com/case-studies/nyc-government-financial-agency
- **Severity:** High. Named exec: CISO for the NYC Government Agency. Quantified: 300,000+ constituents served; multi-week credential-stuffing attack with scraped user IDs; 500M+ malicious requests blocked/month; attack volume dropped 90%+ immediately; 76%+ of attacks now blocked; 53% of total attack from non-US IPs; 45% of additional malicious web traffic (DDoS, scans, XSS) blocked; ZTNA planned for workforce + contractor access.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 211 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Public-sector agencies with 300,000+ constituents face a multi-week credential-stuffing crisis where scraped employee user-IDs are used to mount sustained password-guessing attacks. Manual IP blocking at the existing firewall risks blocking legitimate IPs if attackers use public cloud infrastructure to host their attacks.","Source_URL":"https://www.cloudflare.com/case-studies/nyc-government-financial-agency","Severity_Impact":"High. Named exec: CISO for the NYC Government Agency. Quantified: 300,000+ constituents served; multi-week credential-stuffing attack with scraped user IDs; 500M+ malicious requests blocked/month; attack volume dropped 90%+ immediately; 76%+ of attacks now blocked; 53% of total attack from non-US IPs; 45% of additional malicious web traffic blocked; ZTNA planned for workforce + contractor access."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (211) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
