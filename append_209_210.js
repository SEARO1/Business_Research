const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 209. Major professional sports leagues running 1,300+ games per season face a "32-arena-game-day-coordination" crisis where pregame tasks, staffing, and puck management are tracked over chat messages — and the only path to real-time operational dashboards for league leadership is a mobile-first FSM app delivered in 10 weeks
- **Category:** Onboarding & Deployment
- **Friction:** Major professional sports leagues running 1,300+ games per season face a "32-arena-game-day-coordination" crisis where pregame tasks, staffing, and puck management are tracked over chat messages. "Across 32 arenas, NHL technical coordinators were previously using chat messages to communicate and track pregame tasks, but they needed a mobile-friendly app to effectively monitor, track, and create a real-time dashboard for NHL leadership." The only path to real-time operational dashboards for league leadership is a mobile-first Field Service Management app delivered in 10 weeks.
- **Source:** https://www.servicenow.com/customers/nhl.html
- **Severity:** High. Named entity: National Hockey League. Quantified: 32 clubs; up to 16 games/day; 1,300+ games/season; FSM live in 10 weeks; mobile Game Operations app; real-time dashboard for NHL leadership; tracks time, staffing, puck management, pregame tasks; integrated with NHL Expert Services team.

### 210. Global automotive conglomerates with 14 iconic brands across 130 countries face a "hundreds-of-thousands-of-employees-multi-brand-tech-ops" crisis where each brand previously ran its own IT service delivery stack — and the only path to AI-driven unified technology operations is a single platform backbone from manufacturing plants to global headquarters
- **Category:** Integration
- **Friction:** Global automotive conglomerates with 14 iconic brands across 130 countries face a "hundreds-of-thousands-of-employees-multi-brand-tech-ops" crisis where each brand previously ran its own IT service delivery stack. "What does it take to connect 14 legendary automotive brands and hundreds of thousands of employees across 130 countries? For Stellantis, the answer is clear: go all in on a single platform." Without a single platform, technology operations are fragmented, silos block cross-brand innovation, and AI cannot scale across the enterprise.
- **Source:** https://www.servicenow.com/customers/stellantis.html
- **Severity:** High. Named entity: Stellantis N.V. (NYSE: STLA / Euronext Milan: STLAM / Euronext Paris: STLAP). Quantified: 14 automotive brands (Abarth, Alfa Romeo, Chrysler, Citroën, Dodge, DS Automobiles, FIAT, Jeep, Lancia, Maserati, Opel, Peugeot, Ram, Vauxhall + Free2move + Leasys); 130 countries; hundreds of thousands of employees; ServiceNow AI Platform as single backbone from manufacturing plants to global HQ; automation + AI + unified data driving global innovation.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 209-210 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Major professional sports leagues running 1,300+ games per season face a 32-arena-game-day-coordination crisis where pregame tasks, staffing, and puck management are tracked over chat messages. The only path to real-time operational dashboards for league leadership is a mobile-first FSM app delivered in 10 weeks.","Source_URL":"https://www.servicenow.com/customers/nhl.html","Severity_Impact":"High. Named entity: National Hockey League. Quantified: 32 clubs; up to 16 games/day; 1,300+ games/season; FSM live in 10 weeks; mobile Game Operations app; real-time dashboard for NHL leadership; tracks time, staffing, puck management, pregame tasks."}',
  '{"Pain_Point_Category":"Integration","Specific_Friction":"Global automotive conglomerates with 14 iconic brands across 130 countries face a hundreds-of-thousands-of-employees-multi-brand-tech-ops crisis where each brand previously ran its own IT service delivery stack. Without a single platform, technology operations are fragmented and AI cannot scale across the enterprise.","Source_URL":"https://www.servicenow.com/customers/stellantis.html","Severity_Impact":"High. Named entity: Stellantis N.V. (NYSE: STLA / Euronext Milan: STLAM / Euronext Paris: STLAP). Quantified: 14 automotive brands (Abarth, Alfa Romeo, Chrysler, Citroën, Dodge, DS Automobiles, FIAT, Jeep, Lancia, Maserati, Opel, Peugeot, Ram, Vauxhall + Free2move + Leasys); 130 countries; hundreds of thousands of employees; ServiceNow AI Platform as single backbone."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 2 findings (209-210) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 2) + ' lines');
