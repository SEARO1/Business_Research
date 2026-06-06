const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 308. Wealth management firms with $689B AUM, 2,200 advisors, and 26 disconnected systems face a "manual-CRM-updates-and-hour-long-meeting-prep" crisis where advisors spend hours digging through client data instead of connecting with clients, and the only path to 60 minutes saved per meeting and 50% data cost reduction is Salesforce Data 360 + Agentforce that prepares a print-ready one-pager in under a minute by reviewing a year of CRM data
- **Category:** Onboarding & Deployment
- **Friction:** Wealth management firms with $689B AUM, 2,200 advisors, and 26 disconnected systems face a "manual-CRM-updates-and-hour-long-meeting-prep" crisis. "Manual customer relationship management (CRM) updates, portfolio research, meeting prep, and note-taking left little time for the strategic conversations that drive value." "What used to take at least an hour of digging through client data and past interactions now takes less than a minute." The only path to 60-min meeting prep savings is Agentforce + Data 360 + MuleSoft + Financial Services Cloud.
- **Source:** https://www.salesforce.com/customer-stories/rbc-wealth-management
- **Severity:** Critical. Named execs: Rohit Gupta (Head of Digital Advisor Platforms, RBC Wealth Management); Greg Beltzer (Head of Technology, RBC Wealth Management). Quantified: $689B AUM; 2,200 financial advisors; 5th largest US wealth manager; doubled business 2018-2025;26 disconnected systems consolidated; 16 partner apps integrated via MuleSoft; 6,000+ employees on Salesforce; 95% adoption rate (2x previous CRM); 60 min advisor time saved per meeting; 50% reduction in data management costs; Agentforce launched in 6 weeks; 1,000+ flows/day; near-zero hallucination rate via Trust Layer; Anthropic on Amazon Bedrock inside Trust Layer.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 308 to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Wealth management firms with $689B AUM and 26 disconnected systems face manual-CRM-and-hour-long-meeting-prep crisis. The only path to 60 min saved per meeting and 50% data cost reduction is Data 360 + Agentforce + Financial Services Cloud + MuleSoft.","Source_URL":"https://www.salesforce.com/customer-stories/rbc-wealth-management","Severity_Impact":"Critical. Named execs: Rohit Gupta (Head of Digital Advisor Platforms); Greg Beltzer (Head of Technology, RBC WM). Quantified: $689B AUM; 2,200 advisors; 5th largest US wealth manager; 26 systems consolidated; 16 apps via MuleSoft; 6K+ employees; 95% adoption; 60 min saved/meeting; 50% data cost reduction; Agentforce 6-week launch; 1K+ flows/day."}';

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 308 to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 1) + ' lines');