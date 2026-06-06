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
  // Try more Cloudflare case studies from the index page
  console.log('=== More Cloudflare Case Studies ===');
  const cfSlugs = [
    'shopify', 'uber', 'lyft', 'airbnb', 'stripe',
    'zendesk', 'salesforce', 'servicenow', 'workday'
  ];
  for(const c of cfSlugs) {
    const url = `https://www.cloudflare.com/case-studies/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 50000) {
      console.log(c, ':', r.status, 'Len:', r.body.length);
      const text = extractText(r.body);
      if(text.match(/\d+[%x]/) || text.match(/\d{3,}/)) {
        console.log('  ** HAS METRICS **');
        // Show preview
        const idx = text.indexOf('We');
        if(idx > -1) console.log('  Preview:', text.substring(idx, idx + 500));
      }
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Try Sumo Logic redirect follow
  console.log('\n=== Sumo Logic Customers ===');
  const sl = await fetch('https://www.sumologic.com/solutions/business-challenges/');
  console.log('Status:', sl.status);
  
  // Try New Relic customers index
  console.log('\n=== New Relic Customers Index ===');
  const nr = await fetch('https://newrelic.com/customers');
  console.log('Status:', nr.status, 'Len:', nr.body.length);
}
main().catch(console.error);