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
  // PagerDuty customers - extract customer links
  console.log('=== PagerDuty Customer Stories ===');
  const pd = await fetch('https://www.pagerduty.com/customers/');
  console.log('Len:', pd.body.length);
  
  // Find customer links
  const linkRe = /\/customers\/([a-z0-9-]+)/gi;
  const seen = new Set();
  let m;
  while((m = linkRe.exec(pd.body)) !== null) {
    if(!seen.has(m[1])) { seen.add(m[1]); }
  }
  console.log('Customer slugs:', [...seen].slice(0, 30));
  
  // Try some of the PagerDuty customer pages
  const pdSlugs = [...seen].slice(0, 10);
  for(const c of pdSlugs) {
    const url = `https://www.pagerduty.com/customers/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 50000) {
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
}
main().catch(console.error);