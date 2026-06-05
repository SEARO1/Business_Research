const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 166. PLG-first companies face a visibility gap where self-signup funnels disconnect website behavior from product behavior — and without a unified view of the end-to-end journey from web traffic to activation, teams rely on hunches instead of facts and redesign messaging based on assumptions rather than evidence
- **Category:** Integration
- **Friction:** PLG-first companies face a visibility gap where self-signup funnels disconnect website behavior from product behavior. 'We couldn't track how users moved from our website into the product, or what they did afterward. We relied on hunches instead of facts, putting the entire user experience and our new strategy at risk.' At Temporal, the team assumed only existing Temporal experts would self-sign up for Temporal Cloud — but Amplitude revealed the opposite: most signups were from people who had never used Temporal before. A single data insight completely changed their email, lifecycle messaging, and sales outreach.
- **Source:** https://amplitude.com/blog/temporal-increased-signups-by-doubling-down-on-plg
- **Severity:** High. Named exec: Director of Growth (Temporal). Quantified: 5x increase in weekly signups for Temporal Cloud; 50% improvement in account activation funnel efficiency; 14-day activation improved; higher long-term adoption, retention, and cross-team expansion; Session Replay + Heatmaps guided content improvements; AI Visibility tracked LLM search landscape. Quote: 'One of the longest-held beliefs at Temporal was that only existing Temporal experts would sign up for Temporal Cloud. Amplitude revealed the opposite: most initial signups were from people who had never used Temporal before. That single insight forced us to completely redesign our emails, lifecycle messaging, and sales outreach.'

### 167. Companies with fragmented productivity tools face a trust crisis where simple questions like 'who owns this?' or 'what is the latest policy?' become scavenger hunts across docs, tickets, and chat threads — and without a single system of record that both humans and AI can navigate, teams waste hours hunting context and AI can only summarize fragments rather than synthesize answers
- **Category:** Integration
- **Friction:** Companies with fragmented productivity tools face a trust crisis where simple questions become scavenger hunts. 'A question as simple as "What is the latest policy?" or "Who owns this?" could turn into a scavenger hunt across docs, tickets, and chat threads. And without a reliable system of record, AI could not do much more than summarize fragments.' At Ramp, work was spread across too many duplicate and legacy tools and too many tabs — and without a reliable system of record, AI couldn't help.
- **Source:** https://www.notion.com/customers/ramp
- **Severity:** High. Named execs: Ben Levick (Head of Operations & Internal AI, Ramp), Cameron Leavenworth (Manager of Corporate IT). Quantified: ~70% cut in productivity-tool costs; 3x faster team velocity; 300+ active Notion custom agents; 3 minutes to build a custom agent; valuation $32B; $1B annualized revenue (10x faster than median SaaS); output per employee kept rising while headcount scaled more modestly. Quote: 'Agents get created in three minutes between meetings, then hours of manual operational work disappear.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended findings 166 and 167 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = `{"Pain_Point_Category":"Integration","Specific_Friction":"PLG-first companies face a visibility gap where self-signup funnels disconnect website behavior from product behavior. 'We couldn't track how users moved from our website into the product, or what they did afterward. We relied on hunches instead of facts.' Without unified journey data, teams redesign messaging based on assumptions rather than evidence.","Source_URL":"https://amplitude.com/blog/temporal-increased-signups-by-doubling-down-on-plg","Severity_Impact":"High. Named exec: Director of Growth (Temporal). Quantified: 5x weekly signups; 50% activation funnel improvement; 14-day activation improved; Session Replay + Heatmaps; AI Visibility for LLM search; cross-team expansion tracked."}
{"Pain_Point_Category":"Integration","Specific_Friction":"Companies with fragmented productivity tools face a trust crisis where simple questions become scavenger hunts. 'A question as simple as "What is the latest policy?" or "Who owns this?" could turn into a scavenger hunt across docs, tickets, and chat threads. Without a reliable system of record, AI could not do much more than summarize fragments.'","Source_URL":"https://www.notion.com/customers/ramp","Severity_Impact":"High. Named execs: Ben Levick (Head of Ops & Internal AI), Cameron Leavenworth (Manager of Corporate IT), Ramp. Quantified: ~70% cut in productivity-tool costs; 3x faster teams; 300+ active Notion agents; 3 min to build agent; $32B valuation; $1B ARR; output per employee kept rising."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.split('\n').join('\n') + '\n');
console.log('Appended findings 166 and 167 to jsonl');