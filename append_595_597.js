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
    friction: 'Wave Financial (finance startup, subsidiary of H&R Block) needed best-in-class CI/CD to handle rapid scaling through acquisition stages',
    source: 'https://circleci.com/case-studies/wave-financial/',
    severity: 'Medium. Finance startup scaling through acquisition. Subsidiary of H&R Block. Best-in-class CI/CD for growth stages.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'SaleCycle (UK-based behavioral marketing firm) had legacy infrastructure slowing down development - needed to ship features faster',
    source: 'https://circleci.com/case-studies/salecycle/',
    severity: 'High. Named exec: (SaleCycle). Quantified: Deploys every 8 minutes. UK-based behavioral marketing company.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Brandfolder (digital asset management platform) needed quick turnaround on integration testing to respond rapidly to customer feedback about features or bugs',
    source: 'https://circleci.com/case-studies/brandfolder/',
    severity: 'High. Named exec: Jim Hanifen (Head of Product, Brandfolder). Quantified: #1 in industry for customer satisfaction. "CircleCI gives us an easy platform to run tests, so we can be efficient and move fast." Rapid response to customer feedback driving brand love and retention.'
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