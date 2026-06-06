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
    friction: 'Adwerx (digital advertising platform, 25 engineers) needed consistent CI/CD features and performance as team grew from a few people - previously used Codeship but needed better test parallelization',
    source: 'https://circleci.com/case-studies/adwerx/',
    severity: 'High. Named execs: Josh Bielick (VP Infrastructure), Cole Faloon (Infrastructure Engineer), Nick Iovino (Infrastructure Engineer, Adwerx). Quantified: Test feedback in ~10 minutes vs 1+ hour in serial, no queue times, 90% green deployments.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Procurify (business spending management solutions) needed to bring DevOps culture to their engineering team and slash deployment times during rapid growth',
    source: 'https://circleci.com/case-studies/procurify/',
    severity: 'High. Named exec: (Procurify). Quantified: 64X boost in deployments. Brought DevOps culture to engineering team.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Rollbar (error tracking/monitoring software for developers) was mid-technical transformation and needed to turn around fixes faster while improving customer satisfaction',
    source: 'https://circleci.com/case-studies/rollbar/',
    severity: 'High. Named exec: (Rollbar). Quantified: 2,000 hours of developer time saved, 50% less time for fixes, improved customer satisfaction.'
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