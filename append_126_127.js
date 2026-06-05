const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 126. Enterprises with legacy HCM systems face a daily adoption gap where Workday serves as a system of record but lacks the intuitive interface that drives employee and manager engagement — resulting in low participation rates that undermine the entire performance management process
- **Category:** Onboarding
- **Friction:** Enterprises with legacy HCM systems face a daily adoption gap where Workday serves as a system of record but lacks the intuitive interface that drives employee and manager engagement. 'Workday is strong for HCM, but when it came to performance cycles and engagement, we needed a tool that our people would actually want to use day-to-day.' Without a performance platform that employees find intuitive and engaging, check-in cycles fail, goals don't cascade properly, and managers lack real-time visibility into team participation. The result is a performance management system that exists in the HR system but not in the daily workflow of the people it's supposed to serve.
- **Source:** https://lattice.com/customers/liveramp
- **Severity:** High. Named exec: Steven Pham (Senior Talent Enablement Partner, LiveRamp). Quantified: 3.5x completion rate vs Workday; some teams reached 80% participation; goals cascade from company to department to individual; reviews anchored in goals, check-ins, 1:1s. Quote: 'Having Lattice integrate with Workday gave us the best of both worlds. Workday as our system of record, and Lattice as the tool that powers performance, goals, and manager effectiveness.'

### 127. Global organizations with legacy HR processes face a manual reporting bottleneck where preparing survey results for leadership requires screenshotting, cropping in Paint, and manually assembling PowerPoint presentations — consuming an entire extra day's work per cycle and stealing weekends from HR teams
- **Category:** Onboarding
- **Friction:** Global organizations with legacy HR processes face a manual reporting bottleneck where preparing survey results for leadership requires screenshotting, cropping in Paint, and manually assembling PowerPoint presentations. 'I was screenshotting, putting the screenshot into Paint, cropping it, and then putting it back into PowerPoint. It was easily an extra day's work. Now I can enjoy my weekend. I can enjoy my life.' Without a continuous feedback platform with automated reporting, HR teams spend more time assembling data than acting on it — and the feedback loop closes too slowly to drive real change. 'Without a continuous feedback loop, you're just shouting in the dark.'
- **Source:** https://lattice.com/customers/guinness-world-records
- **Severity:** High. Named exec: Stephanie Lunn (Global People & Culture Director, Guinness World Records). Quantified: 6 hours saved per survey cycle; 90% peak engagement survey participation; 76% adjudicator survey participation (freelancers); 510 comments across two engagement surveys; process from survey close to insights shared: under 2 weeks (previously twice as long); 264 comments first survey, 246 comments second. Quote: 'Lattice is an integral part of our annual engagement calendar. And it gives me back my weekend.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 126 and 127 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = `{"Pain_Point_Category":"Onboarding","Specific_Friction":"Enterprises with legacy HCM systems face a daily adoption gap where Workday serves as a system of record but lacks the intuitive interface that drives employee and manager engagement. Without a performance platform that employees find intuitive and engaging, check-in cycles fail, goals don't cascade properly, and managers lack real-time visibility into team participation.","Source_URL":"https://lattice.com/customers/liveramp","Severity_Impact":"High. Named exec: Steven Pham (Senior Talent Enablement Partner, LiveRamp). Quantified: 3.5x completion rate vs Workday; some teams reached 80% participation; goals cascade from company to department to individual."}
{"Pain_Point_Category":"Onboarding","Specific_Friction":"Global organizations with legacy HR processes face a manual reporting bottleneck where preparing survey results requires screenshotting, cropping in Paint, and manually assembling PowerPoint presentations — consuming an entire extra day's work per cycle. Without a continuous feedback platform with automated reporting, HR teams spend more time assembling data than acting on it.","Source_URL":"https://lattice.com/customers/guinness-world-records","Severity_Impact":"High. Named exec: Stephanie Lunn (Global People & Culture Director, Guinness World Records). Quantified: 6 hours saved per survey cycle; 90% peak engagement survey participation; 76% adjudicator survey participation; process from survey close to insights shared under 2 weeks."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.split('\n').join('\n') + '\n');
console.log('Appended findings 126 and 127 to jsonl');