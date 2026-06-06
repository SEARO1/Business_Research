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
    friction: 'Cinnamon AI (global enterprise AI company with offices in Tokyo, US, Vietnam, Taiwan) was using Jenkins requiring "tons of effort to maintain" - needed to reduce operational costs and prevent human mistakes while competing on price and quality',
    source: 'https://circleci.com/case-studies/cinnamon/',
    severity: 'High. Named execs: Sony Huynh (DevSecOps Lead), Luan Pham (Senior Researcher, Cinnamon AI). Quantified: Docker images ~10GB, caching reduces wait time from hours to minutes. Replaced Jenkins after evaluating GitHub Actions, Travis CI, GitLab Runner, TeamCity.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Maze (product design platform) needed CI/CD to free up time for new feature development and more frequent code releases',
    source: 'https://circleci.com/case-studies/maze/',
    severity: 'Medium. Product design platform using CircleCI for speed and automation.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Pantheon (website management platform for Drupal/WordPress, 150K+ websites, billions of pageviews/month) had engineers stop work on high-value projects to test sporadic WordPress/Drupal updates - security updates forced context switching',
    source: 'https://circleci.com/case-studies/pantheon/',
    severity: 'High. Named execs: Greg Anderson (Open Source Contribution Engineer), Steve Persch (Agency and Community Engineer, Pantheon). Quantified: Drupal testing reduced from 8 hours to 2 hours. 150K+ websites, billions of pageviews/month.'
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