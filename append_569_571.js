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
    friction: 'Honeycomb (observability tool founded 2016) needed to simplify their build, test, and deploy process as they scaled - needed major improvements in speed, scale, and cost-savings',
    source: 'https://circleci.com/case-studies/honeycomb/',
    severity: 'High. Named exec: (Honeycomb). Observability company using CircleCI and AWS to scale their build/test/deploy. Founded 2016.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Greenhouse (popular hiring platform) needed to manage hyper-growth while keeping developers from context switching - needed to innovate quickly and manage their monolith',
    source: 'https://circleci.com/case-studies/greenhouse/',
    severity: 'High. Hiring platform with CircleCI for CI/CD. Needed to handle hyper-growth while managing monolith architecture.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'incident.io (incident management platform, 7 engineers) needed to spend as much time as possible on customer features rather than infrastructure - small team with tight timelines',
    source: 'https://circleci.com/case-studies/incident-io/',
    severity: 'High. Named exec: (incident.io). 7 engineers, incident management platform. Small team needs maximum efficiency. Building stronger relationships with customers on tight timelines.'
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