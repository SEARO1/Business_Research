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
    friction: 'Contentful (30% of Fortune 500, thousands of brands) had growing complexity as they replaced monolithic apps with microservices - needed solid CI/CD practices to onboard new engineers and deploy confidently across larger teams',
    source: 'https://circleci.com/case-studies/contentful/',
    severity: 'High. Named exec: James Bourne (Software Engineer, Contentful). Quantified: "CircleCI is 90% of the approval we need." Replaced Travis CI with CircleCI in 2015. Berlin-founded, global CMS platform.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'LaunchDarkly (feature flag management platform, deploys multiple times per day, hundreds of tests daily) needed CI to handle circular dependencies between their own product and testing - as a developer tool maker, any production issue directly impacts their credibility',
    source: 'https://circleci.com/case-studies/launchdarkly/',
    severity: 'High. Named execs: Adam Zimman (VP Platform), Andrew Brown (Senior Software Engineer, LaunchDarkly). Quote: "It\'s an absolute imperative to be able to have continuous integration testing to deliver software at the pace we do."'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Outreach ($1B+ valuation, 150+ engineers across a dozen teams) needed to maintain efficiency across projects with different data stores, frameworks, and languages while supporting explosive COVID-driven growth',
    source: 'https://circleci.com/case-studies/outreach/',
    severity: 'High. Named exec: Jon Anderson (Senior Software Engineer, Outreach). Quantified: 80% success rate target on all projects. Customers include Zoom, Snowflake, DocuSign. Forbes Cloud 100. CircleCI is their "testing platform of choice."'
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