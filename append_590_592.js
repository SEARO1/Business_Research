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
    friction: 'RepairPal (auto repair platform) was using Jenkins for CI/CD which came with plenty of frustrations - needed customizable compute for more testing options',
    source: 'https://circleci.com/case-studies/repairpal/',
    severity: 'High. Auto repair network. Boosted developer happiness by replacing Jenkins with CircleCI.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Returnalyze (Boston-based retail returns analytics) previously had no streamlined release process - went as long as 2 months without a release, preventing rapid incorporation of user feedback',
    source: 'https://circleci.com/case-studies/returnalyze/',
    severity: 'High. Named exec: Will Plourde (CTO, Returnalyze). Quantified: Multiple releases per day vs 2 months previously. Retail returns domain expert serving largest retailers with hundreds of millions of product variations.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Tunaiku (largest fintech lending platform in Indonesia) previously using Jenkins required a week to set up a new project and a month of iterative testing - "too much time and too much complexity in managing CI/CD"',
    source: 'https://circleci.com/case-studies/tunaiku/',
    severity: 'Critical. Named exec: Ahmad Fikri (Head of Platform, Tunaiku). Quantified: CI/CD management reduced from weeks to <10 minutes/week. Provides loans within 24 hours requiring heavy testing. Indonesia fintech.'
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