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
    category: 'Security and Governance',
    friction: 'SolarWinds (observability product) needed to standardize security processes with self-hosted runners and private orbs - "Secure by design is our guiding principle"',
    source: 'https://circleci.com/case-studies/solarwinds/',
    severity: 'High. SolarWinds observability product using CircleCI for security processes. Self-hosted runners and private orbs for security compliance.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Pitch (presentation SaaS for Slack, Framer, MetaLab) had 60+ developers in a monorepo with feedback cycles getting longer using Travis - bottlenecks slowed down feedback and innovation',
    source: 'https://circleci.com/case-studies/pitch/',
    severity: 'High. Named exec: Adam Renklint (Co-founder and CTO, Pitch). Quantified: 60+ developers in monorepo, 65 engineers. "The overall stability of CircleCI is remarkable in comparison to previously used CI providers."'
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