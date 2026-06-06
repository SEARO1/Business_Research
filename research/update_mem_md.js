const fs = require('fs');
const data = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim());
let output = '\n\n';
for (const line of data) {
  try {
    const entry = JSON.parse(line);
    if (entry.finding >= 602 && entry.finding <= 700) {
      output += `### ${entry.finding}. ${entry.category}\n`;
      output += `- **Category:** ${entry.category}\n`;
      output += `- **Friction:** ${entry.friction}\n`;
      output += `- **Source:** ${entry.url}\n\n`;
    }
  } catch(e) {}
}
fs.appendFileSync('MEMORY.md', output);
console.log('Appended findings602-700 to MEMORY.md');
const lines = fs.readFileSync('MEMORY.md', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('MEMORY.md now has', lines, 'lines');