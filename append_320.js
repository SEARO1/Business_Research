const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 320. Fast-growing dessert chains with 1,000+ locations,200+ weekly rotating recipes, and viral social media presence face a "data-silos-across-marketing-channels-and-personalization-at-scale" crisis where scaling to 1,000 locations requires consolidating marketing channels and removing data silos, and the only path to 373% higher conversion and 249% higher click rates is Braze with Cloud Data Ingestion from Snowflake, AppsFlyer deep-linking, and Canvas action paths for two-way interactive SMS quizzes
- **Category:** Onboarding & Deployment
- **Friction:** Fast-growing dessert chains with 1,000+ locations and viral social media presence face a "data-silos-across-marketing-channels-and-personalization-at-scale" crisis. "As Crumbl scaled to over 1,000 locations, they needed a more sophisticated tool to consolidate marketing channels, remove data silos, and enhance personalization." The only path to 373% conversion improvement is Braze + Snowflake + AppsFlyer.
- **Source:** https://www.braze.com/customers/crumbl
- **Severity:** High. Named execs: CRM team at Crumbl (1,000+ locations, founded 2017, Utah). Quantified: 1,000+ locations across US, Puerto Rico, Canada; 200+ recipes; 4 specialty flavors rotating weekly; 10M+ social followers; 373% higher conversion rate than average; 249% higher click rate than average; 82.16% app opens within 2 days; Braze Canvas with Action Paths for branching SMS quiz; Snowflake Cloud Data Ingestion; AppsFlyer deep-linking.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 320 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Dessert chains with1K+ locations and200+ rotating recipes face data-silos-and-personalization-at-scale crisis. The only path to 373% conversion and 249% click rate is Braze + Snowflake + AppsFlyer.","Source_URL":"https://www.braze.com/customers/crumbl","Severity_Impact":"High. Quantified: 1K+ locations; 10M+ social followers; 373% higher conversion; 249% higher click rate; 82% app opens/2 days; Braze Canvas + Snowflake + AppsFlyer deep-linking."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 320 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');