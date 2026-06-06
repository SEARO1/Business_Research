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
  // Try PagerDuty with specific company names
  console.log('=== PagerDuty Specific Companies ===');
  const pdSlugs = ['shopify', 'netflix', 'slack', 'airbnb', 'uber', 'lyft', 'spotify', 'twilio', 'stripe', 'square'];
  for(const c of pdSlugs) {
    const url = `https://www.pagerduty.com/customers/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 50000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      console.log(c, ':', r.status, 'Len:', r.body.length, hasMetrics ? '**METRICS**' : '');
      if(hasMetrics) {
        const idx = text.indexOf('We') > -1 ? text.indexOf('We') : text.indexOf('PagerDuty');
        console.log('  Preview:', text.substring(idx > -1 ? idx : 0, (idx > -1 ? idx : 0) + 400));
      }
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try CircleCI customers page
  console.log('\n=== CircleCI Customers Page ===');
  const cc = await fetch('https://circleci.com/customers/');
  console.log('Status:', cc.status, 'Len:', cc.body.length);
  if(cc.status === 200) {
    const text = extractText(cc.body);
    const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
    if(hasMetrics) console.log('** HAS METRICS **');
    console.log('Preview:', text.substring(0, 1500));
  }
}
main().catch(console.error);