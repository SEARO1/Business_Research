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
    friction: 'Cube (European tech company, 40 employees, Netherlands) needed to drive secure software with AI across the entire SDLC - was using GitLab but wanted AI features to increase efficiency and speed',
    source: 'https://about.gitlab.com/customers/cube/',
    severity: 'High. Named exec: Mans Booijink (Operations Manager, Cube). Quantified: 50% faster release cycles, 50% faster vulnerability detection, 40 hours saved per week. Software dev company for mobile apps, websites, e-commerce across energy, real estate, wellness, food delivery.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Hilti (global construction services provider, 30,000 employees, Liechtenstein) needed to bring code in-house with proper SCM, CI/CD, and security scanning - previously lacked streamlined code management and delivery',
    source: 'https://about.gitlab.com/customers/hilti/',
    severity: 'Critical. Named exec: Daniel Widerin (Head of Software Delivery, Hilti). Quantified: 400% increase in code checks, 50% shorter feedback loops, 12x faster deployment time. Construction tech company creating software for tool solutions with governance, risk, compliance requirements.'
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