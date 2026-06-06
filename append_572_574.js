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
    category: 'Integration',
    friction: 'Kajabi (platform for entrepreneurs to build/Scale online businesses) switched from CircleCI to Harness for cost savings but faced stability issues - "The migration took three times longer than expected" and success rates dropped to low-to-mid 80s',
    source: 'https://circleci.com/case-studies/kajabi/',
    severity: 'Critical. Named exec: Paul Simpson (Platform Engineering Manager, Kajabi). Quantified: 45 test suites in parallel, build times went from <10 min to 15-20 min on competitor, MTTR = "mean cost" when customer checkouts are down. Returned to CircleCI after 1 year.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: '17LIVE (Taiwan-based live streaming and social networking platform) faced CI/CD toil with infrastructure management - needed to reduce overhead as they developed more microservices',
    source: 'https://circleci.com/case-studies/17live/',
    severity: 'High. Named exec: Lin (17LIVE). Quantified: "pipeline can scale easily as we grow, with no added effort." Live streaming platform in Taiwan.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Baracoda (AIoT platform for consumer health products) had Jenkins issues where "one teammate was running Jenkins in the morning, checking, breaking everything, and asking us to fix the issues he introduced"',
    source: 'https://circleci.com/case-studies/baracoda/',
    severity: 'High. Named exec: Timothy Nibeaudeau (Head of Software Engineering, Baracoda). Quantified: Build time cut by more than half. Health tech company creating connected bathroom products.'
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