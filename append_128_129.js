const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 128. Global platforms at scale face a support ecosystem complexity problem where scaling from dozens of city teams to 1,000+ dedicated agents across 450+ cities requires a customer service platform that can flexibly deploy with each new city launch — and manual processes become existential bottlenecks at that growth rate
- **Category:** Onboarding
- **Friction:** Global platforms at scale face a support ecosystem complexity problem where scaling from dozens of city teams to 1,000+ dedicated agents across 450+ cities requires a customer service platform that can flexibly deploy with each new city launch. 'We went from a few dozen city team members to 1,000+ dedicated customer service staff in 2-3 years.' With millions of weekly trips and expanding product lines (rides, eats, rush, for business), the complexity compounds. Without a scalable support platform that grows with the business, maintaining consistent service quality across cities and products becomes a coordination nightmare that directly impacts customer satisfaction.
- **Source:** https://www.zendesk.hk/customer/uber/
- **Severity:** High. Named execs: Michael Mizrahi (Community Operations, Uber), Ashley Bradford (Global Conversation Support Program Manager, Uber), Michael York (Customer Experience Team Product Manager, Uber). Quantified: <30 secs chat first response time SLA; 30K+ new driver conversations/week (US); 95% chat CSAT score; 10+ support languages; 1,000+ dedicated customer service agents; 10M+ conversation milestone; scaling from city teams to centralized global organization in 2-3 years.

### 129. Online marketplaces with multi-language user bases face a ticket deflection challenge where manual response processes and slow manual tagging create response time bottlenecks that cascade into low CSAT scores — and without AI-powered self-service, a 45-person team cannot scale to handle monthly ticket volumes
- **Category:** Integration
- **Friction:** Online marketplaces with multi-language user bases face a ticket deflection challenge where manual response processes and slow manual tagging create response time bottlenecks that cascade into low CSAT scores. 'Response times were slow and customer satisfaction scores were lagging, compounded by error-prone manual tagging processes.' Without AI-powered self-service that handles common queries in multiple languages, a 45-person team faces an impossible task: 30,000 tickets per month with manual triage. 'We needed a tool that could scale, with more automation possibilities, more customization, and more ways to collect customer data.'
- **Source:** https://www.zendesk.hk/customer/carousell/
- **Severity:** High. Named execs: Chloe Ng (Internal Product Expert, Carousell), Lavone Toh (Business Process Improvement Manager, Carousell). Quantified: 45-person support team; 30,000 tickets/month; 77% tickets replied within 24 hours; 24% general inquiries deflected by Answer Bot; 22% Answer Bot click-through rate; 1.1 million help center views/month; 6 languages; 21 agents in Philippines, outsourced BPO in Malaysia. Quote: 'Zendesk allows our customer service team to be faster, more efficient, and happier.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 128 and 129 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = `{"Pain_Point_Category":"Onboarding","Specific_Friction":"Global platforms at scale face a support ecosystem complexity problem where scaling from dozens of city teams to 1,000+ dedicated agents across 450+ cities requires a customer service platform that can flexibly deploy with each new city launch. Without a scalable support platform, maintaining consistent service quality across cities and products becomes a coordination nightmare.","Source_URL":"https://www.zendesk.hk/customer/uber/","Severity_Impact":"High. Named execs: Michael Mizrahi (Community Operations, Uber), Ashley Bradford (Global Conversation Support Program Manager, Uber), Michael York (Customer Experience Team Product Manager, Uber). Quantified: less than 30 secs chat first response time SLA; 30K+ new driver conversations per week (US); 95% chat CSAT score; 10+ support languages; 1,000+ dedicated customer service agents."}
{"Pain_Point_Category":"Integration","Specific_Friction":"Online marketplaces with multi-language user bases face a ticket deflection challenge where manual response processes and slow manual tagging create response time bottlenecks that cascade into low CSAT scores. Without AI-powered self-service, a 45-person team cannot scale to handle monthly ticket volumes.","Source_URL":"https://www.zendesk.hk/customer/carousell/","Severity_Impact":"High. Named execs: Chloe Ng (Internal Product Expert, Carousell), Lavone Toh (Business Process Improvement Manager, Carousell). Quantified: 45-person support team; 30,000 tickets per month; 77% tickets replied within 24 hours; 24% general inquiries deflected by Answer Bot; 1.1 million help center views per month; 6 languages."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.split('\n').join('\n') + '\n');
console.log('Appended findings 128 and 129 to jsonl');