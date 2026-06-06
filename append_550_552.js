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
    friction: 'Cube (40 employees, Netherlands tech company) needed to increase efficiency and speed in creating secure software using AI across the entire SDLC',
    source: 'https://about.gitlab.com/customers/cube/',
    severity: 'Medium. Named exec: Mans Booijink (Operations Manager, Cube). Quantified: 50% faster release cycles, 50% faster vulnerability detection, 40 hours saved per week. Using GitLab Duo AI.'
  },
  {
    id: currentCount + 2,
    category: 'Integration',
    friction: 'Bendigo and Adelaide Bank (7K employees, 2M+ customers) had complex toolchain with GitHub on-premise requiring significant operational resources - needed to replace GitHub, Jenkins, and Checkmarx with single platform',
    source: 'https://about.gitlab.com/customers/bab/',
    severity: 'High. Named exec: Caio Trevisan (Head of DevOps Enablement, Bendigo and Adelaide Bank). Quantified: 4 weeks to rapid migration, 3-to-1 tool simplification (replaces GitHub+Jenkins+Checkmarx), 32 apps in 30 days. Australian bank with 160+ years history.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Dunelm (3,300+ employees, 178 stores, 12M online transactions/year) had CI/CD tooling gaps for serverless/cloud-first architecture - needed to shift security left and accelerate deployment',
    source: 'https://about.gitlab.com/customers/dunelm/',
    severity: 'High. Named exec: Chintan Parmar (Principal Platform Engineer, Dunelm). Quantified: 75-85 deployments/week (from 10-20), hours for onboarding instead of days. UK homewares retailer with 12M online transactions/year.'
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