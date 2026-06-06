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
    category: 'Security and Governance',
    friction: 'Discord (2.4M concurrent users, 25M+ registrations) faced constant DDoS attacks from gamers targeting each other during matches - engineers were constantly dealing with attacks that caused customer churn and poor retention',
    source: 'https://www.cloudflare.com/case-studies/discord/',
    severity: 'Critical. Named exec: Stanislav Vishnevskiy (CTO, Discord). Quantified: 9000% growth in one year, saved over $100K/month on Google Cloud bill, 2.4M concurrent users. Previous hardware solution cost 6 figures annually. Quote: "Every single outage would result in frustrated customers."'
  },
  {
    id: currentCount + 2,
    category: 'Legacy System Integration',
    friction: 'Shutterstock (700M+ content items, 1,300+ employees) engineers spent hours generating reports on fraud patterns from logs - needed faster visibility into security threats and better monitoring across complex tech stack',
    source: 'https://newrelic.com/customers/shutterstock',
    severity: 'High. Named exec: Christian Bobadilla (Director of Product & Application Security, Shutterstock). Quantified: 60% reduction in logging spend, 75% decrease in time generating reports, 400M+ content items. Previous tool took hours/days for fraud reports, New Relic does it in minutes.'
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