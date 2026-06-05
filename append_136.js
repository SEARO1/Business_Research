const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 136. Companies scaling design across diverse geographic markets face a design fragmentation crisis where siloed files with no shared system mean components are rebuilt repeatedly, specs diverge across teams, and even basics like font sizes or corner radii are inconsistent — without a unified design platform that serves as a single source of truth, hyperlocal design at scale becomes impossible
- **Category:** Integration
- **Friction:** Companies scaling design across diverse geographic markets face a design fragmentation crisis where siloed files with no shared system mean components are rebuilt repeatedly, specs diverge across teams, and even basics like font sizes or corner radii are inconsistent. 'What feels intuitive in Singapore might not work in the Philippines, and a layout that fits Thailand may need to shift entirely for users in Indonesia. But the tools the team was using couldn't keep up. Designers worked in siloed files with no shared system, which meant components had to be rebuilt, specs often diverged, and even basics—like font sizes or corner radii—weren't consistent across teams.' Scaling hyperlocal design across 170 designers and 380 engineers without a unified platform means local insights cannot be turned into real products quickly without losing consistency across teams and markets.
- **Source:** https://www.figma.com/customers/how-grab-scales-hyperlocal-experiences-across-southeast-asia-with-figma-and-ai/
- **Severity:** High. Named execs: Suraj Swamy (Head of Engineering and Core Experiences, Grab), Patrick Jean (Head of Design, Grab). Quantified: 170 designers and 380 engineers; 50% adoption of Duxton design system across consumer app; 5 million lines of code in app codebase; 1.7K weekly users of Talk to Figma MCP plugin generating 210K+ events; Dev Mode users from 244 to 353 (45% year-on-year increase); 50 million people served across transport, food, and digital payments. Quote: 'Building a design system and an SDK is complex work, but it's doable. Scaling it to an organisation, now at roughly 50% adoption? That's the real piece of work.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 136 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = `{"Pain_Point_Category":"Integration","Specific_Friction":"Companies scaling design across diverse geographic markets face a design fragmentation crisis where siloed files with no shared system mean components are rebuilt repeatedly, specs diverge across teams, and basics like font sizes or corner radii are inconsistent. Scaling hyperlocal design across 170 designers and 380 engineers without a unified platform means local insights cannot be turned into real products quickly without losing consistency.","Source_URL":"https://www.figma.com/customers/how-grab-scales-hyperlocal-experiences-across-southeast-asia-with-figma-and-ai/","Severity_Impact":"High. Named execs: Suraj Swamy (Head of Engineering and Core Experiences, Grab), Patrick Jean (Head of Design, Grab). Quantified: 170 designers and 380 engineers; 50 percent adoption of Duxton design system; 5 million lines of code in app codebase; 1.7K weekly users of Talk to Figma MCP plugin; 50 million people served."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 136 to jsonl');