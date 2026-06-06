const fs = require('fs');

const memPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/MEMORY.md';
let memData = fs.readFileSync(memPath, 'utf8');

const newFindings = `
### 321. Public healthcare organizations with 200+ NHS trusts and Ruby on Rails legacy authentication face a "legacy-platform-that-didn't-follow-industry-standards" crisis where aging authentication didn't follow industry standards and was hard to integrate with the vast suite of applications across trusts, and the only path to regular product iteration and self-enabled users is Auth0 with well-built APIs, developer-friendly libraries, and breached password detection
- **Category:** Security and Governance
- **Friction:** Public healthcare organizations with 200+ NHS trusts face a "legacy-platform-that-didn't-follow-industry-standards" crisis. "The first version of the NHS Leadership Academy used the Ruby on Rails framework... Single Sign-On was absent because it proved challenging to integrate with other applications. As it aged, it became harder to maintain. It didn't follow any of the industry authentication and authorization standards." "Every NHS trust is different and there's a lot of legacy technology at play." The only path to regular iteration and self-enabled users is Auth0.
- **Source:** https://auth0.com/case-studies/nhs-leadership-academy.md
- **Severity:** High. Named exec: Ishani Vardhan (Digital Delivery Lead, NHS Leadership Academy). Quantified: 200+ NHS trusts across England and Wales; Laravel framework + Auth0; decreased support calls about access; reduced password reset time; self-enabled end-users; DevOps engineers happy to onboard Auth0; gradual decrease in support calls.

### 322. Furniture retailers with 170+ UK superstores and a homegrown identity solution face an "in-house-identity-that-just-didn't-span" crisis where the in-house solution required multiple teams to work on it and developers found it really hard to work around, and the only path to saving the equivalent of 8-10 security experts is Auth0 with M2M authentication for millions of connections, B2B supplier portals, and B2E staff logins
- **Category:** Onboarding & Deployment
- **Friction:** Furniture retailers with 170+ UK superstores and a homegrown identity solution face an "in-house-identity-that-just-didn't-span" crisis. "Our in-house solution just didn't span, and the developers found it really hard to work around. A couple of teams needed to work on it. It just ended up being really difficult to maintain, make sure that it's always secure, make sure that it's patched, make sure it's up to date." The only path to saving 8-10 security experts is Auth0.
- **Source:** https://auth0.com/case-studies/dunelm.md
- **Severity:** High. Named exec: Antony Sohal (Head of Data Platforms, Dunelm). Quantified: 170+ UK superstores; millions of M2M connections; AWS cloud platform; saves 8-10 dedicated security experts and developers; Auth0 plumbed into ADFS for B2E; developer focus on core business functionality; supplier external portals via Auth0.

### 323. Global optical retailers with 7,000+ stores in 40+ countries and 33 distinct retail brands face an "omnichannel-customer-experience-with-sensitive-payment-and-medical-data" crisis where customers input sensitive payment and medical information that needs protection while requiring seamless optional account creation, and the only path to invisible authentication and customer-friendly checkout is Auth0 with passwordless optional account creation that lets customers check out anonymously or create accounts during checkout with one click
- **Category:** Security and Governance
- **Friction:** Global optical retailers with 7,000+ stores in 40+ countries and 33 brands face an "omnichannel-customer-experience-with-sensitive-payment-and-medical-data" crisis. "Customers can create an account in order to check their history, edit profile information, re-order items with one click, and book or reschedule eye exam appointments." "Digital services change the way you look at customer privacy and security." The only path to invisible authentication is Auth0 with passwordless optional account creation.
- **Source:** https://auth0.com/case-studies/grandvision.md
- **Severity:** High. Named exec: Kunal Chakraborty (Global Vice President for Customer Experience and Digital, GrandVision). Quantified: 7,000+ stores; 40+ countries; 33 distinct retail brands; millions of customers; passwordless optional account creation; "The sign of a good product is it's invisible"; best-of-breed authentication vs. buying everything from one vendor.
`;

fs.writeFileSync(memPath, memData + newFindings);
console.log('Appended 3 findings (321-323) to MEMORY.md');

const jsonlPath = 'C:/Users/cheun/.openclaw/workspace/Business_Research/research/research_log.jsonl';
let jsonlData = fs.readFileSync(jsonlPath, 'utf8');

const newLines = [
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Healthcare orgs with200+ NHS trusts face legacy-Ruby-on-Rails-auth-that-didnt-follow-standards crisis. The only path to regular iteration and self-enabled users is Auth0 with well-built APIs.","Source_URL":"https://auth0.com/case-studies/nhs-leadership-academy.md","Severity_Impact":"High. Named exec: Ishani Vardhan (Digital Delivery Lead, NHS Leadership Academy). Quantified: 200+ NHS trusts; Laravel + Auth0; decreased support calls; self-enabled end-users; gradual decrease in access-related support calls."}',
  '{"Pain_Point_Category":"Onboarding & Deployment","Specific_Friction":"Furniture retailers with170+ stores face in-house-identity-that-just-didnt-span crisis. The only path to saving 8-10 security experts is Auth0 for M2M (millions of connections), B2B suppliers, B2E staff.","Source_URL":"https://auth0.com/case-studies/dunelm.md","Severity_Impact":"High. Named exec: Antony Sohal (Head of Data Platforms, Dunelm). Quantified: 170+ UK superstores; millions of M2M connections; saves 8-10 security experts; AWS + Auth0; developer focus on core functionality."}',
  '{"Pain_Point_Category":"Security and Governance","Specific_Friction":"Global optical retailers with7K+ stores and sensitive medical data face omnichannel-customer-experience crisis. The only path to invisible auth and seamless checkout is Auth0 passwordless optional account creation.","Source_URL":"https://auth0.com/case-studies/grandvision.md","Severity_Impact":"High. Named exec: Kunal Chakraborty (Global VP Customer Experience and Digital, GrandVision). Quantified: 7K+ stores; 40+ countries; 33 brands; millions of customers; passwordless optional checkout; anonymous checkout option."}'
];

fs.writeFileSync(jsonlPath, jsonlData.trim() + '\n' + newLines.join('\n') + '\n');
console.log('Appended 3 findings (321-323) to jsonl');
console.log('jsonl now: ' + (jsonlData.trim().split('\n').length + 3) + ' lines');