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
    friction: 'SevenRooms (hospitality management platform) needed to manage complexity of software as they rapidly scaled after pandemic recovery',
    source: 'https://circleci.com/case-studies/sevenrooms/',
    severity: 'High. Hospitality platform managing booming industry post-pandemic. Rapid scaling with CircleCI.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'PolicyMe (Toronto insurance provider) needed to uncomplicate life insurance buying while accelerating product innovation',
    source: 'https://circleci.com/case-studies/policyme/',
    severity: 'Medium. Named exec: (PolicyMe). Quantified: 12 hours of dev time saved every week. Toronto-based insurance tech.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Travelex (foreign currency exchange company, founded 1976 in England) needed scale and speed for digital transformation',
    source: 'https://circleci.com/case-studies/travelex/',
    severity: 'High. Named exec: (Travelex). Quantified: £300K cost savings, hundreds of thousands in additional savings through speed and flexibility. Legacy company digital transformation.'
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