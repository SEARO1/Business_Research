const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 334. Content platforms with 700M+ content items and millions of creators face a "hours-or-days-to-generate-fraud-reports-and-low-visibility" crisis where engineers spend hours generating reports on fraud patterns, traditional tools can't keep pace with malicious IP attempts, and bad actors target customer accounts at scale, and the only path to 60% logging cost reduction and 75% faster report generation is New Relic with logs in context, GeoIP enrichment, JOINs, and Lookups that surface suspicious activities in minutes
- **Category:** Security and Governance
- **Friction:** Content platforms with 700M+ content items and millions of creators face a "hours-or-days-to-generate-fraud-reports-and-low-visibility" crisis. "The previous tool took hours or days to generate reports on fraud patterns. New Relic can do this in minutes." "Malicious IPs attempt to access accounts for fraud." The only path to 60% logging cost reduction is New Relic with logs in context and advanced query capabilities.
- **Source:** https://newrelic.com/customers/shutterstock
- **Severity:** High. Named exec: Christian Bobadilla (Director of Product and Application Security, Shutterstock). Quantified: 700M+ content items; 60% reduction in spend on logging; 75% decrease in time generating reports; GeoIP enrichment; JOINs for comparing current vs. known bad actors; Lookups for combining external data; subqueries for suspicious activity detection; fraud patterns in minutes not days.

### 335. E-commerce ecosystems with 550M+ people in 13 countries, 500-engineer payment teams, and hundreds of deployments per week face a "scalability-performance-downtime-and-decentralized-team-visibility" crisis where decentralized business teams lack application performance visibility, payment SLAs are critical, and JavaScript errors go undetected until they impact customers, and the only path to <50ms response time, 0% error rate, and 20% VM reduction is New Relic that identifies issues throughout the lifecycle from design to production
- **Category:** Onboarding & Deployment
- **Friction:** E-commerce ecosystems with 550M+ people in 13 countries and hundreds of weekly deployments face a "scalability-performance-downtime-and-decentralized-team-visibility" crisis. "We were having more issues with scalability, performance, and downtime. In payments, it's critical for us to meet our service level agreements." "We found many JavaScript errors that we didn't know existed." The only path to <50ms response and 0% error rate is New Relic APM.
- **Source:** https://newrelic.com/customers/mercadolibre
- **Severity:** Critical. Named execs: Hernan Di Chello (Product Development Director, MercadoPago, Mercado Libre); Matias Kusznir (Technical Leader of QA, Mercado Libre); Fernando Scasserra (Senior Product Development Manager, Mercado Libre); Gabriela Segura (Project Leader, Mercado Envios, Mercado Libre). Quantified: 550M+ people in 13 countries; 500 engineers in MercadoPago alone; hundreds of deployments/week; <50ms response time per request; 0% error rate; 20% reduction in virtual machines; "New Relic is an essential tool for not only developers and engineers but also executives."
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (334-335) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Content platforms with700M+ items face hours-or-days-fraud-report crisis. The only path to 60% logging cost reduction and 75% faster reports is New Relic with GeoIP, JOINs, Lookups for instant fraud pattern detection.","Source_URL":"https://newrelic.com/customers/shutterstock","Severity_Impact":"High. Named exec: Christian Bobadilla (Dir Product & Application Security, Shutterstock). Quantified: 700M+ content items; 60% logging cost reduction; 75% report time reduction; fraud in minutes not days; GeoIP + JOINs + Lookups for security."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"E-commerce with550M people in 13 countries and hundreds of deployments/week face scalability-downtime crisis. The only path to <50ms response and 0% error rate is New Relic identifying issues throughout lifecycle.","Source_URL":"https://newrelic.com/customers/mercadolibre","Severity_Impact":"Critical. Named execs: Hernan Di Chello (Product Dev Director, MercadoPago); Matias Kusznir (Tech Leader QA); Fernando Scasserra (Sr Product Dev Manager); Gabriela Segura (Project Leader, Mercado Envios, Mercado Libre). Quantified: 550M people/13 countries; 500 engineers MercadoPago; hundreds deployments/week; <50ms response; 0% error rate; 20% VM reduction."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (334-335) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');