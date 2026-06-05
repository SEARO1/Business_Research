const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 142. Enterprise software companies launching AI products face a security questionnaire surge that can bottleneck sales cycles and slow AI adoption — and without automated questionnaire handling, each new AI feature triggers a wave of customer due diligence that consumes trust team bandwidth disproportionate to deal size
- **Category:** Security
- **Friction:** Enterprise software companies launching AI products face a security questionnaire surge that can bottleneck sales cycles and slow AI adoption. 'The launch of GitHub Copilot triggered a wave of security questionnaires with the potential to bottleneck GitHub's sales cycles.' Customers wanted clear explanations of how AI handles data, prompts, caching, and retention — resulting in a surge of more than 300 questionnaires in a short timeframe. Without automated handling, each AI feature launch becomes a trust team bottleneck that slows revenue adoption.
- **Source:** https://www.vanta.com/customers/github
- **Severity:** High. Named exec: Megan Snyder (Director of Customer Assurance, GitHub). Quantified: 93% of inbound questionnaires automated in 6 months (surpassed GitHub's goal of automating in 12 months); hundreds of questionnaires managed automatically; reduced customer wait times and sales cycle friction. Quote: 'Vanta helped us unblock our sales cycle for security questionnaires in a scalable, sustainable way.'

### 143. Growing companies pursuing ISO 27001 or SOC 2 certification face a manual compliance process where control language is overly complicated, evidence is spread across documents and spreadsheets, and without a single source of truth, certification timelines balloon and audit communications become chaotic — and without automation, compliance becomes a full-time job that distracts from strategic security work
- **Category:** Security
- **Friction:** Growing companies pursuing ISO 27001 or SOC 2 certification face a manual compliance process where control language is overly complicated, evidence is spread across documents and spreadsheets. 'Our process was extremely manual and we did not have a single source of truth that we could point to for all of our compliance information policies. It was also difficult for me to easily describe our posture to auditors and other third parties.' Without a unified platform, security teams manually map complex control language, chase engineering for evidence, and communicate with auditors through fragmented email threads — creating certification timelines that stretch months beyond what they should.
- **Source:** https://www.vanta.com/customers/duolingo
- **Severity:** High. Named exec: Mandy Matthew (Lead Security Risk Program Manager, Duolingo). Quantified: ISO 27001 certified in 2024; 12 hours per week saved (480+ hours/year); achieved without hiring additional staff or spending on professional services; streamlined vendor risk management with AI-powered documentation parsing. Quote: 'As a rapidly growing security program, Vanta has saved me personally up to 12 hours per week, which lets me put that time towards developing other high priority security objectives that are mission critical for us as a business.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 142 and 143 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = `{"Pain_Point_Category":"Security","Specific_Friction":"Enterprise software companies launching AI products face a security questionnaire surge that can bottleneck sales cycles and slow AI adoption. 'The launch of GitHub Copilot triggered a wave of security questionnaires with the potential to bottleneck GitHub's sales cycles.' Customers wanted clear explanations of how AI handles data, prompts, caching, and retention — resulting in a surge of more than 300 questionnaires in a short timeframe. Without automated handling, each AI feature launch becomes a trust team bottleneck that slows revenue adoption.","Source_URL":"https://www.vanta.com/customers/github","Severity_Impact":"High. Named exec: Megan Snyder (Director of Customer Assurance, GitHub). Quantified: 93% of inbound questionnaires automated in 6 months; hundreds of questionnaires managed automatically; reduced customer wait times and sales cycle friction."}
{"Pain_Point_Category":"Security","Specific_Friction":"Growing companies pursuing ISO 27001 or SOC 2 certification face a manual compliance process where control language is overly complicated, evidence is spread across documents and spreadsheets. 'Our process was extremely manual and we did not have a single source of truth that we could point to for all of our compliance information policies.' Without a unified platform, security teams manually map complex control language, chase engineering for evidence, and communicate with auditors through fragmented email threads — creating certification timelines that stretch months beyond what they should.","Source_URL":"https://www.vanta.com/customers/duolingo","Severity_Impact":"High. Named exec: Mandy Matthew (Lead Security Risk Program Manager, Duolingo). Quantified: ISO 27001 certified in 2024; 12 hours/week saved (480+ hours/year); achieved without hiring additional staff or professional services."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.split('\n').join('\n') + '\n');
console.log('Appended findings 142 and 143 to jsonl');