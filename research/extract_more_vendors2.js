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
  // Try more Cloudflare customers with different patterns
  const cf = ['cdn', 'blog', 'learn', 'customers', 'customers-list', 'customers/stack-overflow', 'case-studies'];
  console.log('=== CLOUDFLARE PATTERNS ===');
  for (const slug of cf) {
    const url = 'https://www.cloudflare.com/' + slug + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Freshdesk customers - different URL
  const freshdesk = ['spotify', 'shopify', ' uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid'];
  console.log('\n=== FRESHDESK V2 ===');
  for (const slug of freshdesk) {
    const url = 'https://www.freshdesk.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('FD2/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Help Scout customers
  const helpscout = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  console.log('\n=== HELPSCOUT ===');
  for (const slug of helpscout) {
    const url = 'https://www.helpscout.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('HS/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Groove HQ customers
  const groove = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash'];
  console.log('\n=== GROOVE ===');
  for (const slug of groove) {
    const url = 'https://www.groovehq.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('GRV/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Front customers
  const front = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'lyft', 'groupon', 'yelp', ' Eventbrite'];
  console.log('\n=== FRONT ===');
  for (const slug of front) {
    const url = 'https://front.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('FRONT/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Groove (customer success tool) case studies
  const groovv = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest'];
  console.log('\n=== FRESHSALES ===');
  for (const slug of groovv) {
    const url = 'https://www.freshsales.io/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('FRS/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);