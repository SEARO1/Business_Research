const fs = require('fs');

const researchPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/';
const jsonlFile = researchPath + 'research_log.jsonl';
const memoryFile = researchPath + 'MEMORY.md';

// Read current count
const jsonlContent = fs.readFileSync(jsonlFile, 'utf8');
const currentCount = jsonlContent.trim().split('\n').length;
console.log('Current lines:', currentCount);

const findings = [
  {
    id: currentCount + 1,
    category: 'Onboarding & Deployment',
    friction: 'Goldman Sachs engineering teams (35K+ employees) were constrained by toolchain complexity and could only do 1 build every 2 weeks - needed to accelerate DevOps adoption and enable self-service daily builds across dozens of teams',
    source: 'https://about.gitlab.com/customers/goldman-sachs/',
    severity: 'Critical. Named exec: Andrew Knight (Managing Director, Goldman Sachs). Quantified: 1,000+ CI feature branch builds/day (up from 1 build/2 weeks), 52K test cases across 11K test classes, 1,500+ adopters in first two weeks. Quote: "We now see some teams running and merging 1,000+ CI feature branch builds a day!"'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'NVIDIA (11K+ employees, 50+ offices worldwide) with distributed teams needed GitLab Geo for stability, security, and scalable development across multiple geographic locations without wasting engineering time on individual servers',
    source: 'https://about.gitlab.com/customers/nvidia/',
    severity: 'High. Named exec: Patrick Herlihy (Configuration Management Specialist, NVIDIA). Quantified: 51% user growth in 1 year, 99% uptime. Quote: "Without GitLab, we\'d be wasting engineering time with lots of individual little servers being managed around the world."'
  }
];

// Append to jsonl
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
  console.log('jsonl written:', findings.length, 'entries');
  
  // Update MEMORY.md
  const memContent = fs.readFileSync(memoryFile, 'utf8');
  const memLines = memContent.split('\n');
  
  // Find last finding
  let lastFindingLine = -1;
  for(let i = memLines.length - 1; i >= 0; i--) {
    if(memLines[i].match(/^### \d+\./)) { lastFindingLine = i; break; }
  }
  
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
  console.log('MEMORY.md updated');
  console.log('Total now:', currentCount + findings.length);
});