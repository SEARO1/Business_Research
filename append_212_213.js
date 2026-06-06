const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 212. Global device-as-a-service (DaaS) providers with 400+ enterprise customers across 180 countries face a "tiered-onboarding + per-customer-pain" crisis where the customer onboarding process is bespoke for every region, churn rises when customers can't get the catalogs they expect, and the only way to scale is a TPSM platform with Service Bridge + Workflow Data Fabric
- **Category:** Onboarding & Deployment
- **Friction:** Global device-as-a-service (DaaS) providers with 400+ enterprise customers across 180 countries face a "tiered-onboarding + per-customer-pain" crisis where the customer onboarding process is bespoke for every region, churn rises when customers can't get the catalogs they expect, and the only way to scale is a TPSM platform with Service Bridge + Workflow Data Fabric. "We recognize that we service customers across different market segments and geographies, and this requires different tiers of service. ServiceNow AI Platform enables us to deliver and connect with customers in different ways and deal with complexities."
- **Source:** https://www.servicenow.com/customers/lenovo.html
- **Severity:** High. Named execs: Damo Srinivasan (Director, SSG International Sales & Presales), Sujo Joseph (Director of Global IT Engineering & Product Development), Lenovo. Quantified: 400+ enterprise customers; 180 countries; 40% faster enterprise-customer onboarding; 95% of customers onboarded within 12 weeks; 4-week target; 20% reduction in customer churn; 25% increase in Net Promoter Score; 120,000 devices delivered to a Fortune 500 customer in 99 countries; 60% of incidents resolved before reaching a support agent via AI; 5,000 devices Singapore office in 23 days; integrations: Absolute, DocuSign, Kafka, Microsoft Dynamics.

### 213. Global technology conglomerates with 400+ group companies and 120,000 staff across 180 countries face a "20-year-old paper-approval-system" crisis where each group company runs its own email-based or custom workflow, and the only path to unified agile management is a single App Engine platform with shared instances across all group companies
- **Category:** Integration
- **Friction:** Global technology conglomerates with 400+ group companies and 120,000 staff across 180 countries face a "20-year-old paper-approval-system" crisis where each group company runs its own email-based or custom workflow. "The current approval system basically just takes a paper version of a circular, and digitizes and distributes it. As a result, we haven't been able to effectively meet the demands of globalization or mobilization." Without a single App Engine platform, true unification is effectively impossible and global standards cannot be enforced.
- **Source:** https://www.servicenow.com/customers/fujitsu.html
- **Severity:** High. Named execs: Kanna Kimura (Manager, Enterprise Service Management Dept, Digital System Platform Division), Takeshi Horikawa (Senior Manager, Corporate Governance Legal Dept, Legal/IP/Internal Control Advancement Division), Fujitsu. Quantified: 400+ group companies; 120,000 staff; 180 countries; 20-year-old approval system replaced; approval lead time cut 30%+; system accessed 128 times/day by ~8,700 users; targets 61 domestic + 44 overseas group companies in Step 1; One Fujitsu Program; data-driven continuous process reform cycle on App Engine.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 212-213 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global device-as-a-service (DaaS) providers with 400+ enterprise customers across 180 countries face a tiered-onboarding + per-customer-pain crisis where customer onboarding is bespoke for every region, churn rises when customers cant get the catalogs they expect, and the only way to scale is a TPSM platform with Service Bridge + Workflow Data Fabric.","Source_URL":"https://www.servicenow.com/customers/lenovo.html","Severity_Impact":"High. Named execs: Damo Srinivasan (Director, SSG International Sales & Presales), Sujo Joseph (Director of Global IT Engineering & Product Development), Lenovo. Quantified: 400+ enterprise customers; 180 countries; 40% faster onboarding; 95% of customers onboarded within 12 weeks; 4-week target; 20% reduction in customer churn; 25% increase in NPS; 120,000 devices delivered to Fortune 500 customer in 99 countries; 60% of incidents AI-resolved; integrations: Absolute, DocuSign, Kafka, Microsoft Dynamics."}',
  '{"Pain_Point_Category":"Integration","Specific_Friction":"Global technology conglomerates with 400+ group companies and 120,000 staff across 180 countries face a 20-year-old paper-approval-system crisis where each group company runs its own email-based or custom workflow. Without a single App Engine platform, true unification is effectively impossible.","Source_URL":"https://www.servicenow.com/customers/fujitsu.html","Severity_Impact":"High. Named execs: Kanna Kimura (Manager, Enterprise Service Management Dept), Takeshi Horikawa (Senior Manager, Corporate Governance Legal Dept), Fujitsu. Quantified: 400+ group companies; 120,000 staff; 180 countries; 20-year-old approval system replaced; approval lead time cut 30%+; system accessed 128 times/day by ~8,700 users; targets 61 domestic + 44 overseas group companies in Step 1; One Fujitsu Program; data-driven continuous process reform."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (212-213) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');
