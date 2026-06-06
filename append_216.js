const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 216. Global car-rental and mobility platforms with €3.31B+ revenue across 110 countries face a "daily-bot-attack-4am" crisis where price-scraping bots degrade website + app performance and prevent overnight system upgrades, and the only path to zero-downtime is edge-native bot management that differentiates malicious bots from legitimate partner automation
- **Category:** Security and Governance
- **Friction:** Global car-rental and mobility platforms with €3.31B+ revenue across 110 countries face a "daily-bot-attack-4am" crisis where price-scraping bots degrade website + app performance and prevent overnight system upgrades. "My engineers no longer have to get up at 4:00 a.m., and we no longer have to run specific clusters just to handle bot traffic. We are also able to perform upgrades and testing in the overnight hours without worrying about our infrastructure being overtaxed." The previous solution couldn't differentiate between malicious bots and legitimate traffic from the partner network — so even approved partners got blocked.
- **Source:** https://www.cloudflare.com/case-studies/sixt
- **Severity:** High. Named execs: Anthony Davis (Senior Engineering Manager, IT Software Operations, SIXT), Klaus Kolitz (Chief Technology Officer, SIXT). Quantified: ~110 countries; €2.49B Mobility revenue + €3.31B total group (2019); daily early-morning bot attacks eliminated; zero downtime since Cloudflare deployment; engineers no longer paged at 4 a.m.; legitimate partner traffic differentiated via Bot Management bot score + Cloudflare Workers; large bot attack stopped immediately; WAF + Bot Management + Workers + Rate Limiting + CDN combined.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 216 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Global car-rental and mobility platforms with €3.31B+ revenue across 110 countries face a daily-bot-attack-4am crisis where price-scraping bots degrade website + app performance and prevent overnight system upgrades. The previous solution could not differentiate between malicious bots and legitimate partner traffic.","Source_URL":"https://www.cloudflare.com/case-studies/sixt","Severity_Impact":"High. Named execs: Anthony Davis (Senior Engineering Manager, IT Software Operations, SIXT), Klaus Kolitz (Chief Technology Officer, SIXT). Quantified: ~110 countries; €2.49B Mobility revenue + €3.31B total group (2019); daily early-morning bot attacks eliminated; zero downtime since Cloudflare; engineers no longer paged at 4 a.m.; legitimate partner traffic differentiated via Bot Management bot score + Cloudflare Workers."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 1 finding (216) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');
