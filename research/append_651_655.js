const fs = require('fs');
const lines = [
  JSON.stringify({finding: 651, category: "Security and Governance", friction: "Shopify (millions of merchants across 175+ countries) faced escalating bot/DDoS attacks, credential stuffing, and data scraping that could compromise millions of storefronts - needed protection for e-commerce platform where even slight delay or complication leads to lost opportunities", url: "https://www.cloudflare.com/case-studies/shopify/", severity: "High", company: "Shopify"}),
  JSON.stringify({finding: 652, category: "Legacy System Integration", friction: "Shopify faced 'complexity-paradox' where 'the real challenge is not about how many different pieces of complex technology we can use but the opposite - Cloudflare helps us find a simple way to achieve something very complex that we can scale and maintain'", url: "https://www.cloudflare.com/case-studies/shopify/", severity: "High", company: "Shopify"}),
  JSON.stringify({finding: 653, category: "Onboarding & Deployment", friction: "Shopify (13,000+ third-party apps, millions of merchants) needed to simplify merchant onboarding and automating essential services like provisioning customer DNS and SSL certificates for e-commerce platform", url: "https://www.cloudflare.com/case-studies/shopify/", severity: "High", company: "Shopify"}),
  JSON.stringify({finding: 654, category: "Security and Governance", friction: "Shopify faced 'chrome-encryption-urgency' when Google Chrome began flagging unencrypted sites - Shopify needed to secure millions of storefronts across 175 countries before the deadline to avoid reputation damage to merchants", url: "https://www.cloudflare.com/case-studies/shopify/", severity: "High", company: "Shopify"}),
  JSON.stringify({finding: 655, category: "Integration", friction: "Shopify (13,000+ apps in app store, global commerce platform) used 'engineering-first-partnership' approach with Cloudflare to drive innovation - Mattie Toia VP Infrastructure: 'It is great to have a partner as invested in their infrastructure as we are in our product'", url: "https://www.cloudflare.com/case-studies/shopify/", severity: "Medium", company: "Shopify"})
];
lines.forEach((l, i) => {
  fs.appendFileSync('research_log.jsonl', l + '\n');
  console.log('Written finding', 651 + i);
});
const after = fs.readFileSync('research_log.jsonl', 'utf8').split('\n').filter(l => l.trim()).length;
console.log('After:', after);