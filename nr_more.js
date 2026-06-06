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
  // More New Relic pages
  console.log('=== New Relic More Pages ===');
  const nrSlugs = ['verizon', 'shutterstock', 'toyota', 'mercadolibre', 'toykopedia'];
  for(const c of nrSlugs) {
    const url = `https://newrelic.com/customers/${c}`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 100000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      console.log(c, ':', r.status, 'Len:', r.body.length, hasMetrics ? '**METRICS**' : '');
      if(hasMetrics) {
        const idx = text.indexOf('We') > -1 ? text.indexOf('We') : text.indexOf('The');
        console.log('  Preview:', text.substring(idx > -1 ? idx : 0, (idx > -1 ? idx : 0) + 300));
      }
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try different Cloudflare pages
  console.log('\n=== Cloudflare More Case Studies ===');
  const cfSlugs = ['godaddy', 'mailchimp', 'wpengine', 'namecheap', 'squarespace'];
  for(const c of cfSlugs) {
    const url = `https://www.cloudflare.com/case-studies/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try more CircleCI (different pattern)
  console.log('\n=== CircleCI Alternative ===');
  const circleciAlt = [
    'https://circleci.com/customers',
    'https://circleci.com/enterprise/customers'
  ];
  for(const url of circleciAlt) {
    const r = await fetch(url);
    console.log(url.replace('https://circleci.com/',''), ':', r.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
}
main().catch(console.error);