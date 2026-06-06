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
    friction: 'Bolt (checkout experience platform for retailers like Forever 21, Badgley Mischka) needed engineers to own and optimize build pipelines - "we don\'t want to build something that\'s not core to our business"',
    source: 'https://circleci.com/case-studies/bolt/',
    severity: 'High. E-commerce checkout/fraud detection platform. Reduced breaks in master branch using CircleCI orbs.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Branch (deep-linking infrastructure for mobile apps) needed fast iterations with weekly releases while avoiding maintenance overhead - "CircleCI works perfectly for us" and new engineers can get started in minutes',
    source: 'https://circleci.com/case-studies/branch/',
    severity: 'High. Named exec: Javeria Khan (Systems Engineer, Branch). Quantified: Deploy directly to production in minutes. "CircleCI is the easiest continuous integration tool to get up and running fast; it just works magically."'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Iterable (AI-powered MarTech platform, 1200+ customers in 50+ countries) struggled with flaky tests leading to lower confidence in releasing features and excess time rerunning tests',
    source: 'https://circleci.com/case-studies/iterable/',
    severity: 'High. Named exec: Mark Palestine (Sr. Engineering Manager for Platform, Iterable). Quantified: 530% increase in build success rate in 6 months, 37 new features in 2023, 99% customer satisfaction. Quote: "We can ship code to production with more confidence, recover from incidents faster."'
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