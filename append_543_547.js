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
    friction: 'Thales (81K employees, 68 countries, 5K+ DevSecOps members) faced thousands of work silos preventing collaboration - needed single DevSecOps platform to break down silos for in-flight entertainment systems on 2,300 aircraft serving 1.6M passengers/day',
    source: 'https://about.gitlab.com/customers/thales/',
    severity: 'High. Named exec: Jordan Dubié (Chief Product Owner, Thales). Quantified: 8x faster software updates, 40x faster project setups, 90% reduction in build infrastructure costs. 2,300 aircraft, 80 airlines, 1.6M passengers/day.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Deutsche Telekom (216K employees, 240M mobile customers) had release cycles of nearly 18 months in some cases - needed to dramatically reduce time to market while maintaining security',
    source: 'https://about.gitlab.com/customers/deutsche-telekom/',
    severity: 'Critical. Named exec: Thorsten Bastian (Business Owner IT, CI/CD Hub, Telekom IT). Quantified: 6x faster time to market, 13,000 active GitLab users. Reduced release cycles from 18 months to ~3 months.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Lockheed Martin (114K employees, $26.7B sales) defense contractor had thousands of programs with fragmented toolchains - needed to shrink toolchains, speed production, and improve security for aerospace/defense software',
    source: 'https://about.gitlab.com/customers/lockheed-martin/',
    severity: 'Critical. Named exec: Alan Hohn (Director of Software Strategy, Lockheed Martin). Quantified: 80x faster CI pipeline builds, 1,000s of Jenkins servers retired, 90% less time on system maintenance. Moved from weekly/monthly to daily deployments.'
  },
  {
    id: currentCount + 4,
    category: 'Integration',
    friction: 'Fujitsu Cloud Technologies (8K customers, Tokyo Japan) had separate Git and SVN tools per project with external developers brought in project-by-project - difficult to share knowledge and manage authorization across projects',
    source: 'https://about.gitlab.com/customers/fujitsu/',
    severity: 'High. Named exec: Yuichi Saotome (Principal Engineer, Cloud Infra Division). Company: 8,000+ customers, NIFCLOUD public cloud. Japanese business practice of external developers per project created authorization and knowledge-sharing challenges.'
  },
  {
    id: currentCount + 5,
    category: 'Integration',
    friction: 'Iron Mountain (25K+ employees, 225K customers worldwide) had fragmented DevOps tooling with no single view - needed foundation for scaled Agile framework with visibility across enterprise IT teams',
    source: 'https://about.gitlab.com/customers/iron-mountain/',
    severity: 'Medium. Named exec: Hayelom Tadesse (VP Enterprise Technology, Iron Mountain). Quantified: $150K cost savings/year, 20 hours saved onboarding time per project. Global data governance company.'
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