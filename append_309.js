const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 309. Wealth management firms founded in 2016 with three separate systems (case management, help desk, sales tracking) face a "constantly-toggling-between-systems" crisis where advisors track everything manually and client interactions slip through the cracks, and the only path to 10% busywork reduction and 50% forecast accuracy improvement is Salesforce Pro Suite that centralizes client data, case management, and reporting in one platform with 60+ automated touchpoints per month
- **Category:** Integration
- **Friction:** Wealth management firms with three separate systems (case management, help desk, sales tracking) face a "constantly-toggling-between-systems" crisis where nothing lives in one place. "The biggest problem it solves for us is we had a case management tool, a help desk system, and a separate tool to track sales — but since they weren't connected, advisors were constantly toggling between systems." "Client interactions and opportunities slipped through the cracks — and advisors were stuck tracking everything manually." The only path to unified platform is Salesforce Pro Suite.
- **Source:** https://www.salesforce.com/customer-stories/figtree-financial-success-pro-suite
- **Severity:** Medium-High. Named exec: Rameez Ishmael (IT Operations Manager, FigTree Financial). Quantified: Founded2016; 10% busywork reduction from3-system consolidation; 50% forecast accuracy improvement; 60+ client touchpoints automated monthly; 10% faster response times; automated routing.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 309 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Integration","Specific_Friction":"Wealth management firms with3 separate systems face constantly-toggling-between-systems crisis. The only path to 10% busywork reduction and 50% forecast improvement is Salesforce Pro Suite unifying client data, case management, and reporting.","Source_URL":"https://www.salesforce.com/customer-stories/figtree-financial-success-pro-suite","Severity_Impact":"Medium-High. Named exec: Rameez Ishmael (IT Operations Manager, FigTree Financial). Quantified: 10% busywork reduction; 50% forecast accuracy improvement; 60+ touchpoints automated/month; 10% faster response times."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 309 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');