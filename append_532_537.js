const fs = require('fs');
const path = require('path');

const researchPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/';

// Current count - check before append
const jsonlFile = researchPath + 'research_log.jsonl';
const memoryFile = researchPath + 'MEMORY.md';

// Read current line count
const jsonlContent = fs.readFileSync(jsonlFile, 'utf8');
const lines = jsonlContent.trim().split('\n');
const currentCount = lines.length;
console.log('Current jsonl lines:', currentCount);

// New findings
const findings = [
  {
    id: currentCount + 1,
    category: 'Onboarding & Deployment',
    friction: 'Eventbrite platform developers (6 people serving 250-engineer org) faced 90 min/developer/week CI/CD downtime with Jenkins, requiring them to wait around when systems were down',
    source: 'https://circleci.com/case-studies/eventbrite/',
    severity: 'High. Named exec: Steven Reynolds (Principal Engineer). Quantified: 90 min/developer/week = 28% reduction in developer downtime, $70K/year savings. 6 platform developers serving 250 engineers.'
  },
  {
    id: currentCount + 2,
    category: 'Onboarding & Deployment',
    friction: 'Dollar Shave Club engineers ran single spec files instead of whole test suites before committing code with Jenkins because managing multiple environments on the Jenkins box required significant time and effort - one buggy commit could break entire suite',
    source: 'https://circleci.com/case-studies/dollar-shave-club/',
    severity: 'High. Named exec: Jason Bosco (VP of Engineering). Quantified: Jenkins required significant time/effort for environment management; engineers committed single spec files rather than full suite.'
  },
  {
    id: currentCount + 3,
    category: 'Onboarding & Deployment',
    friction: 'Cruise Automation (GM subsidiary building self-driving cars) needed CI/CD capable of handling complex testing for autonomous vehicle software that must obey traffic laws, follow map directions, and respond instantaneously to road situations',
    source: 'https://circleci.com/case-studies/cruise/',
    severity: 'Critical. Self-driving car software requires rigorous testing for safety-critical systems. Chose CircleCI Enterprise + GitHub Enterprise to move quickly and safely.'
  },
  {
    id: currentCount + 4,
    category: 'Onboarding & Deployment',
    friction: 'Hilti (global construction services, 30K employees) needed to bring code in-house with proper SDLC governance, security scanning, and compliance across different regions - required robust SCM, CI/CD, and security scanning in one suite',
    source: 'https://about.gitlab.com/customers/hilti/',
    severity: 'High. Named exec: Daniel Widerin (Head of Software Delivery, Hilti). Quantified: 400% increase in code checks, 50% shorter feedback loops, 12x faster deployment time. Location: Schaan, Liechtenstein.'
  },
  {
    id: currentCount + 5,
    category: 'Onboarding & Deployment',
    friction: 'Ericsson OSS/BSS (100K employees, Stockholm Sweden) had deployment cycles of 3-4 months for telecom billing systems that must never fail - cloud-native architecture demanded faster innovation cycles but legacy methodology was optimized for stability',
    source: 'https://about.gitlab.com/customers/ericsson/',
    severity: 'Critical. Named exec: Daniel Costa Soares (Head of Software Automation and Support, Ericsson OSS/BSS). Quantified: 50% faster deployments, 130,000 hours saved over 6 months, 10x increase in testing scenarios. Telecom billing failure = revenue stops immediately.'
  },
  {
    id: currentCount + 6,
    category: 'Onboarding & Deployment',
    friction: 'Siemens Smart Infrastructure (25K+ employees, 190 countries) needed to create open source DevOps culture across massive global organization with millions of builds per month',
    source: 'https://about.gitlab.com/customers/siemens/',
    severity: 'High. Named exec: Fabio Huser (Software Architect, Siemens Smart Infrastructure). Quantified: 40,000+ GitLab users, 6.4M+ builds per month. Quote: "The whole culture has completely changed."'
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
jsonlStream.on('finish', () => console.log('jsonl written:', findings.length, 'entries'));

// Read MEMORY.md to find position for append
const memContent = fs.readFileSync(memoryFile, 'utf8');
const memLines = memContent.split('\n');

// Find last finding line
let lastFindingLine = -1;
for(let i = memLines.length - 1; i >= 0; i--) {
  if(memLines[i].match(/^### \d+\./)) { lastFindingLine = i; break; }
}
console.log('Last finding at line:', lastFindingLine);

// Build new MEMORY.md section
const sessionHeader = `\n\n## Session 13 - CircleCI + GitLab Case Studies (2026-06-06)`;
let newSection = sessionHeader + '\n\n';
findings.forEach(f => {
  newSection += `### ${f.id}. ${f.category}\n`;
  newSection += `- **Category:** ${f.category}\n`;
  newSection += `- **Friction:** ${f.friction}\n`;
  newSection += `- **Source:** ${f.source}\n\n`;
});

// Insert before the last blank lines at end
const endMarker = memLines.length - 10;
let insertAt = memLines.length;
for(let i = memLines.length - 1; i >= endMarker; i--) {
  if(memLines[i].trim() === '' && insertAt === memLines.length) {
    insertAt = i;
  }
}

const newMemContent = memLines.slice(0, insertAt).join('\n') + newSection + '\n' + memLines.slice(insertAt).join('\n');
fs.writeFileSync(memoryFile, newMemContent, 'utf8');
console.log('MEMORY.md updated at line', insertAt);
console.log('\nDone! Written findings #' + (currentCount + 1) + ' to #' + (currentCount + findings.length));