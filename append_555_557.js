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
    category: 'Legacy System Integration',
    friction: 'Verizon 5G Edge (AWS Wavelength Zones) had developers unable to debug workloads on edge nodes due to architectural constraints of traditional APM tools in resource-constrained edge environments requiring three-level architecture',
    source: 'https://newrelic.com/customers/verizon',
    severity: 'High. Named exec: Robert Belson (Developer Relations Lead, Corporate Strategy, Verizon). Edge computing with Kubernetes clusters across 19 AWS Wavelength Zones. Solution: Pixie integration with eBPF for automatic observability.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Toyota (once-in-century transformation from car manufacturer to mobility company) had software projects accelerating across the entire company but no standard environment for all teams to quickly develop and launch services',
    source: 'https://newrelic.com/customers/toyota',
    severity: 'Critical. Named exec: Mitsuhiro Mabuchi (Group Manager, Cloud Data PF Group, AI Management Department, Toyota). Company-wide Cloud CoE formed to enable all teams to develop applications regardless of software expertise. "TORO" initiative for full model change.'
  },
  {
    id: currentCount + 3,
    category: 'Legacy System Integration',
    friction: 'MercadoLibre (550M people market, 13 countries, MercadoPago with 500 engineers) faced scalability, performance, and downtime issues as rapid growth stressed decentralized application architecture with hundreds of deployments per week',
    source: 'https://newrelic.com/customers/mercadolibre',
    severity: 'Critical. Named execs: Hernán Di Chello (Product Development Director, MercadoPago), Matias Kusznir (Technical Leader QA). Quantified: 1M+ users/month search, 500 engineers on MercadoPago, hundreds of deployments/week. "In payments, it\'s critical to meet SLAs."'
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