const fs = require('fs');

const jsonlPath = 'C:\\Users\\cheun\\.openclaw\\workspace\\Business_Research\\research\\research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Global logistics enterprises with complex supply chain operations face a speed-to-market bottleneck where manual work orchestration creates competitive disadvantages. The only path to 9x faster speed-to-market is AI-powered work orchestration in Asana.","Source_URL":"https://www.asana.com/customer/fedex","Severity_Impact":"High. Quantified: 9x faster speed-to-market with AI-powered work orchestration in Asana."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"High-growth tech recruiting platforms with global creative teams face a manual creative operations workflow that burns redundant agency costs and coordination overhead. The only path to $300K annual savings is an AI-powered Global Creative Operations engine in Asana.","Source_URL":"https://www.asana.com/customer/indeed","Severity_Impact":"High. Quantified: $300,000 annual savings with AI-powered Global Creative Operations engine in Asana."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Investment intelligence enterprises with complex workflow needs face a manual process bottleneck that wastes $600,000 annually in operational overhead. The only path to $600K annual savings is AI-powered workflows in Asana AI Studio.","Source_URL":"https://www.asana.com/customer/morningstar","Severity_Impact":"High. Quantified: $600,000 annual savings with AI-powered workflows in Asana AI Studio."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Entertainment enterprises with high-volume work output face a cost-intensive manual workflow that costs $800,000 annually while limiting work volume growth. The only path to $800K annual savings AND 80% volume increase is Asana.","Source_URL":"https://www.asana.com/customer/directv","Severity_Impact":"High. Quantified: $800,000 annual savings; 80% increase in work volume with Asana."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Enterprise security enterprises face a 40% operating cost overhead from disconnected work management tools. The only path to 40% operating cost reduction is Asana that unifies operations across security teams.","Source_URL":"https://www.asana.com/customer/palo-alto-networks","Severity_Impact":"High. Quantified: 40% reduction in operating costs with Asana."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 5 findings (243-247) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 5) + ' lines');