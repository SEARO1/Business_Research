const fs = require('fs');
const line = JSON.stringify({finding: 610, category: "Onboarding & Deployment", friction: "Coinbase (3,800 employees, crypto exchange) discovered that 'asking costs nothing but answering is very expensive' - context switching and scattered knowledge across Slack, meeting notes, and spreadsheets created coordination headwind that made companies slow despite fast developers", url: "https://linear.app/customers/coinbase", severity: "High", company: "Coinbase"});
fs.appendFileSync('research_log.jsonl', line + '\n');
console.log('Written finding 610');
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);