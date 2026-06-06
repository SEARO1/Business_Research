const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 306. AI-driven wellness startups scaling globally with engineers across multiple time zones face a "spreadsheets-WhatsApp-email-scattered-data" crisis where important details are scattered across multiple tools and board meeting prep consumes countless hours chasing notes and status updates, and the only path to 5x faster engagement tracking and 30-minute onboarding is Salesforce Starter Suite + Slack that centralizes client data and automates notifications
- **Category:** Onboarding & Deployment
- **Friction:** AI-driven wellness startups scaling globally with engineers across multiple time zones face a "spreadsheets-WhatsApp-email-scattered-data" crisis where data is scattered across tools. "Important details and data were scattered across spreadsheets, WhatsApp, and emails. The team struggled to keep everything organized, especially when preparing materials and updates for multiple board meetings." "We had information everywhere, and it slowed us down." The only path to 5x faster tracking and 30-min onboarding is Salesforce Starter Suite + Slack.
- **Source:** https://www.salesforce.com/customer-stories/cloudfit-ai-driven-wellness-salesforce-slack
- **Severity:** High. Named execs: Kristian Phillips (CEO & Co-Founder, CloudFit); Reisli Hysa (CTO & Co-Founder, CloudFit); Inid Leksina (COO, CloudFit). Quantified: 5x faster engagement tracking (2 days to 10 minutes); 30-minute product and engineering onboarding; UK-based global wellness startup; engineers in Indonesia, leadership in UK; 12-month pilot with biggest US client; pre-seed funding secured.

### 307. Global enterprises with 100,000+ employees formed via merger face an "antiquated-telephony-based-HR-system" crisis where significant percentage of staff use old telephony systems and legacy HR processes vary by region, and the only path to 17-week global go-live and 2x annual system support cost savings is ServiceNow HR Service Delivery that provides intelligent routing and eliminates tier-one support group
- **Category:** Onboarding & Deployment
- **Friction:** Global enterprises with 100,000+ employees formed via merger face an "antiquated-telephony-based-HR-system" crisis where legacy HR systems are expensive and don't deliver employee experience. "A significant percentage of DXC staff were still using an antiquated telephony-based system. We wanted to make HR services consistent and easy to use, creating a 'one DXC' experience for everyone." "Our existing HR support systems were too expensive and didn't deliver the experience that our employees deserved." The only path to 17-week go-live is ServiceNow HRSD.
- **Source:** https://www.servicenow.com/customers/dxc-technology.html
- **Severity:** Critical. Named exec: Manish Gurnani (Director of HR Shared Services, DXC Technology). Quantified: 100,000+ employees; 6,000 clients in 70 countries; 17 weeks first go-live + 14 weeks worldwide extension; saving twice annual system support costs; 1,500 tickets/day on single topic reduced to negligible; intelligent routing eliminates tier-one support group; GDPR compliant.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 2 findings (306-307) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"AI-driven wellness startups with global engineers across time zones face spreadsheets-WhatsApp-email-scattered-data crisis. The only path to 5x faster engagement tracking and 30-min onboarding is Salesforce Starter Suite + Slack.","Source_URL":"https://www.salesforce.com/customer-stories/cloudfit-ai-driven-wellness-salesforce-slack","Severity_Impact":"High. Named execs: Kristian Phillips (CEO & Co-Founder); Reisli Hysa (CTO & Co-Founder); Inid Leksina (COO, CloudFit). Quantified: 5x faster tracking (2 days to 10 min); 30-min onboarding; UK-based global startup; engineers Indonesia + UK leadership."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global100K+ employee enterprises formed via merger face antiquated-telephony-based-HR crisis. The only path to 17-week go-live and 2x cost savings is ServiceNow HRSD with intelligent routing.","Source_URL":"https://www.servicenow.com/customers/dxc-technology.html","Severity_Impact":"Critical. Named exec: Manish Gurnani (Dir HR Shared Services, DXC Technology). Quantified: 100K+ employees; 6K clients/70 countries; 17-week go-live; 14-week worldwide rollout; 2x annual system support cost savings; 1,500 tickets/day reduced to negligible; eliminates tier-one support."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (306-307) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');