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
    friction: 'Shopify (millions of merchants, 175+ countries) needed to protect e-commerce from bot/DDoS attacks while maintaining fast page loads and simple merchant experience - complex technology creates friction in commerce',
    source: 'https://www.cloudflare.com/case-studies/shopify/',
    severity: 'High. Named execs: Duncan Davidson (VP Developer Productivity), Mattie Toia (VP Infrastructure). Company: millions of merchants, 175+ countries, 13K+ third-party apps. Quote: "The real challenge is not how many different pieces of complex technology we can use but the opposite."'
  },
  {
    id: currentCount + 2,
    category: 'Security and Governance',
    friction: 'Zendesk (100K+ customers, 4M agents, 160+ countries) serving billions of customer interactions faced increasingly virulent attacks threatening to disrupt services - needed dynamic threat detection and response',
    source: 'https://www.cloudflare.com/case-studies/zendesk/',
    severity: 'Critical. Named exec: Nan Guo (SVP Engineering, Zendesk). Quantified: 100K+ customers, 4M+ agents in 160+ countries, billions of interactions. Quote: "The Internet is an extremely dynamic threatscape." Bot management, DDoS protection, WAF deployed.'
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