const fs = require('fs');

const memPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 150. Large pharmaceutical companies with aggressive drug development timelines face a manual administrative bottleneck where scientists spend significant time on repetitive tasks like laboratory supply ordering — and without workflow automation, the time lost compounds across every researcher, every day, across millions of essential materials
- **Category:** Onboarding
- **Friction:** Large pharmaceutical companies with aggressive drug development timelines face a manual administrative bottleneck where scientists spend significant time on repetitive tasks like laboratory supply ordering. 'Bringing just one new medication to market can require millions of test tubes during the development phases. AstraZeneca discovered that employees were handwriting supply orders in a notebook, a process that took up to 30 minutes each time.' With 60,000+ requests flowing through manual processes annually, and scientists whose time is worth hundreds of dollars per hour being consumed by administrative work, the compounding cost is measured not just in dollars but in delayed medicines for patients who need them.
- **Source:** https://www.servicenow.com/customers/astrazeneca.html
- **Severity:** High. Named execs: Cindy Hoots (Chief Digital Officer and CIO, AstraZeneca), Dinesh Krishnan (Global Head of Enterprise Platforms, AstraZeneca), Jackie Crockford (VP of Global Business Services, AstraZeneca). Quantified: 30,000 hours/year cumulative time saved (supply ordering alone); 60,000+ requests/year across 400+ categories flowing through ServiceNow; managers spending 50+ hours onboarding employees, automating 10% saves 90,000+ hours; goal: 20 new medicines by 2030. Quote: 'Given the boldness of our ambition, IT and the use of technology are critical to achieving these results. At AstraZeneca, Every Minute Matters, because it's crucial that we get lifesaving medicines to patients as quickly as possible.'
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended finding 150 to MEMORY.md');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLine = `{"Pain_Point_Category":"Onboarding","Specific_Friction":"Large pharmaceutical companies with aggressive drug development timelines face a manual administrative bottleneck where scientists spend significant time on repetitive tasks like laboratory supply ordering. 'Bringing just one new medication to market can require millions of test tubes during the development phases. AstraZeneca discovered that employees were handwriting supply orders in a notebook, a process that took up to 30 minutes each time.' With 60,000+ requests flowing through manual processes annually, and scientists whose time is worth hundreds of dollars per hour being consumed by administrative work, the compounding cost is measured not just in dollars but in delayed medicines for patients who need them.","Source_URL":"https://www.servicenow.com/customers/astrazeneca.html","Severity_Impact":"High. Named execs: Cindy Hoots (CDO/CIO, AstraZeneca), Dinesh Krishnan (Global Head of Enterprise Platforms), Jackie Crockford (VP Global Business Services). Quantified: 30,000 hours/year saved from supply ordering; 60,000+ requests/year across 400+ categories; managers spending 50+ hrs onboarding, automating 10% saves 90,000+ hours; goal: 20 new medicines by 2030."}`;

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLine + '\n');
console.log('Appended finding 150 to jsonl');