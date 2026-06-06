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
    friction: 'Toss (Korea-based personal finance app) had tens of thousands of files in their repository requiring concurrency and parallelism for code deployment - needed to speed up testing which was taking hours',
    source: 'https://circleci.com/case-studies/toss/',
    severity: 'High. Named exec: Park (Toss developer). Korea-based fintech with large codebase requiring Docker layer caching. Quote: "We also have very high coding standards, and every time code changes, we want it to be checked."'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Procore (250+ developers, construction management platform) experienced queuing at peak times with their test suite taking about an hour to run - "that means that your minimum incident resolution time can\'t be faster than an hour"',
    source: 'https://circleci.com/case-studies/procore/',
    severity: 'High. Named exec: Kyle Espinola (Senior Software Engineer Team Lead, Procore). Quantified: Test suite reduced from ~1 hour. Quote: "We never want our team to say, \'the tooling or the process stopped us from meeting our goals.\'"'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Snyk (developer security platform) needed to ship quickly while maintaining security standards across their CI/CD pipeline - their team builds the Snyk deployment orb for other teams to deploy to production',
    source: 'https://circleci.com/case-studies/snyk/',
    severity: 'High. Named exec: Zoé (Snyk). Snyk provides developer security platform and uses CircleCI to build and improve their deployment orb. Quote: "We\'re responsible for building the Snyk deployment orb, which means that we provide other teams with a way to deploy to production."'
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