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
    friction: 'Fanatics cloud team (20 members, 10K employees) was burdened with ongoing CI issues, patches, and firefighting - previous CI tool had poor support and required constant maintenance for 300+ online/offline stores',
    source: 'https://about.gitlab.com/customers/fanatics/',
    severity: 'High. Named exec: Guilherme Goncalves (Cloud Tech Lead, Fanatics). Quantified: 800 projects migrated in 3 months, 300 users, 95% user happiness rating. Sports retailer with 300+ stores.'
  },
  {
    id: currentCount + 2,
    category: 'Security and Governance',
    friction: 'CARFAX (1,200 employees, 31B records, 139K+ data sources) was spending too much time and money supporting DevOps toolchain instead of delivering features - needed to trim toolchain while improving security',
    source: 'https://about.gitlab.com/customers/carfax/',
    severity: 'High. Named exec: Mark Portofe (Director of Platform Engineering, CARFAX). Quantified: 20% boost in deployments YoY, 30% of vulnerabilities found earlier in SDLC. Vehicle history database with 31B records.'
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