const fs = require('fs');

const researchPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/';
const jsonlFile = researchPath + 'research_log.jsonl';
const memoryFile = researchPath + 'MEMORY.md';

const jsonlContent = fs.readFileSync(jsonlFile, 'utf8');
const currentCount = jsonlContent.trim().split('\n').length;
console.log('Current lines:', currentCount);

const findings = [
  {
    id: currentCount + 1,
    category: 'Onboarding & Deployment',
    friction: 'Domino\'s UK (high-technology digital platform business) needed to future-proof with composable architecture and best-in-breed technologies - needed observability to track SLI/SLO compliance',
    source: 'https://newrelic.com/customers/dominos',
    severity: 'High. Named exec: Patrick Hyland (Senior Engineering Manager, Domino\'s Pizza UK & Ireland). Quantified: 99.6% availability. Observability for SRE with golden signals and customer journey tracking.'
  },
  {
    id: currentCount + 2,
    category: 'Legacy System Integration',
    friction: 'William Hill (5.2M online transactions/day, 5.1M price changes/day) had multiple failing monitoring tools - needed real-time observability because "if we lose a minute, we lose thousands of customers"',
    source: 'https://newrelic.com/customers/william-hill',
    severity: 'Critical. Named exec: Stephen Wild (Engineering Manager, Observability and Automation, William Hill). Quantified: 80% MTTR improvement, 25% improvement in resolving P1 incidents within 60 minutes. 5.2M transactions/day, 74% more price changes than Amazon UK peak day.'
  }
];

const jsonlStream = fs.createWriteStream(jsonlFile, { flags: 'a' });
findings.forEach(f => {
  const entry = JSON.stringify({
    Pain_Point_Category: f.category,
    Specific_Friction: f.friction,
    Source_URL: f.source,
    Severity_Impact: f.severity
  });
  jsonlStream.write(entry + '\n');
});
jsonlStream.end();

jsonlStream.on('finish', () => {
  console.log('jsonl written:', findings.length);
  
  const memContent = fs.readFileSync(memoryFile, 'utf8');
  const memLines = memContent.split('\n');
  let insertAt = memLines.length;
  for(let i = memLines.length - 1; i >= memLines.length - 15; i--) {
    if(memLines[i].trim() === '' && insertAt === memLines.length) insertAt = i;
  }
  let newSection = '\n';
  findings.forEach(f => {
    newSection += `### ${f.id}. ${f.category}\n`;
    newSection += `- **Category:** ${f.category}\n`;
    newSection += `- **Friction:** ${f.friction}\n`;
    newSection += `- **Source:** ${f.source}\n\n`;
  });
  const newMemContent = memLines.slice(0, insertAt).join('\n') + newSection + '\n' + memLines.slice(insertAt).join('\n');
  fs.writeFileSync(memoryFile, newMemContent, 'utf8');
  console.log('MEMORY.md updated. Total now:', currentCount + findings.length);
});