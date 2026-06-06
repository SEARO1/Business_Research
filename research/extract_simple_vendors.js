const https = require('https');
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({status: res.statusCode, body: data}));
    }).on('error', reject);
  });
}
function extractText(body) {
  return body
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}
async function main() {
  // Check specific working vendors to see if they have more case study slugs
  const urls = [
    // More CF slugs
    ['https://www.cloudflare.com/case-studies/monday-com/', 'CF monday-com'],
    ['https://www.cloudflare.com/case-studies/notion/', 'CF notion'],
    ['https://www.cloudflare.com/case-studies/figma/', 'CF figma'],
    ['https://www.cloudflare.com/case-studies/vercel/', 'CF vercel'],
    ['https://www.cloudflare.com/case-studies/netlify/', 'CF netlify'],
    ['https://www.cloudflare.com/case-studies/wix/', 'CF wix'],
    ['https://www.cloudflare.com/case-studies/squarespace/', 'CF squarespace'],
    ['https://www.cloudflare.com/case-studies/webflow/', 'CF webflow'],
    ['https://www.cloudflare.com/case-studies/kraken/', 'CF kraken'],
    ['https://www.cloudflare.com/case-studies/coinbase/', 'CF coinbase'],
    ['https://www.cloudflare.com/case-studies/binance/', 'CF binance'],
    ['https://www.cloudflare.com/case-studies/paypal/', 'CF paypal'],
    ['https://www.cloudflare.com/case-studies/square/', 'CF square'],
    ['https://www.cloudflare.com/case-studies/stripe/', 'CF stripe'],
    // PagerDuty more
    ['https://www.pagerduty.com/customers/draftkings/', 'PD draftkings'],
    ['https://www.pagerduty.com/customers/zendesk/', 'PD zendesk'],
    ['https://www.pagerduty.com/customers/shopify/', 'PD shopify'],
    ['https://www.pagerduty.com/customers/twilio/', 'PD twilio'],
    ['https://www.pagerduty.com/customers/dropbox/', 'PD dropbox'],
    ['https://www.pagerduty.com/customers/vodafone/', 'PD vodafone'],
    // Linear more
    ['https://linear.app/customers/coinbase/', 'LIN coinbase'],
    ['https://linear.app/customers/remote/', 'LIN remote'],
    ['https://linear.app/customers/notion/', 'LIN notion'],
    // More HubSpot
    ['https://www.hubspot.com/case-studies/doordash/', 'HS doordash'],
    ['https://www.hubspot.com/case-studies/shopify/', 'HS shopify']
  ];
  for (const [url, name] of urls) {
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log(name + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);