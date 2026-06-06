const fs = require('fs');
const lines = [
  JSON.stringify({finding: 683, category: "Performance and Reliability", friction: "Goldman Sachs (72,000 people, 10,000+ developers) faced 'microservice-scale-complexity' with1,000+ microservices and 30+ million lines of code - needed to deploy to multiple environments (dev, test, prod) with hundreds of deploys per day while maintaining stability for financial trading operations", url: "https://about.gitlab.com/customers/goldman-sachs/", severity: "High", company: "Goldman Sachs"}),
  JSON.stringify({finding: 684, category: "Security and Governance", friction: "Goldman Sachs faced 'compliance-at-scale' where 72,000 people including developers, traders, and compliance officers all need to work together - shipping software in regulated environment requires rigorous controls across all deployments", url: "https://about.gitlab.com/customers/goldman-sachs/", severity: "High", company: "Goldman Sachs"}),
  JSON.stringify({finding: 685, category: "Performance and Reliability", friction: "CERN (particle physics research, 100,000 users) faced 'legacy-CI-startup-latency' where job startup was slow due to legacy infrastructure - needed90x faster job startup to handle massive particle collision data processing workloads", url: "https://about.gitlab.com/customers/cern/", severity: "High", company: "CERN"}),
  JSON.stringify({finding: 686, category: "Legacy System Integration", friction: "CERN faced 'scale-gap-paradox' where 'when you have 100 users you can manage that yourself, when you have 100,000 users you cannot' - computing resources at particle physics labs require massive scale that outgrows traditional management approaches", url: "https://about.gitlab.com/customers/cern/", severity: "High", company: "CERN"}),
  JSON.stringify({finding: 687, category: "Performance and Reliability", friction: "CERN (particle physics research lab) runs large hadron collider producing petabytes of data from particle collisions that must be processed quickly - computing grid must handle extreme workloads from physics experiments", url: "https://about.gitlab.com/customers/cern/", severity: "High", company: "CERN"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 683 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);