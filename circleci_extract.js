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
  // CircleCI customers page - extract case study links
  console.log('=== CircleCI Customers Page Extract ===');
  const cc = await fetch('https://circleci.com/customers/');
  const ccText = extractText(cc.body);
  
  // Find case study links - different patterns
  const linkRe1 = /\/customers\/([a-z0-9-]+)\/?/gi;
  const linkRe2 = /case-studies\/([a-z0-9-]+)/gi;
  const seen = new Set();
  let m;
  while((m = linkRe1.exec(cc.body)) !== null) { if(!seen.has(m[1])) seen.add(m[1]); }
  while((m = linkRe2.exec(cc.body)) !== null) { if(!seen.has(m[1])) seen.add(m[1]); }
  console.log('Case study slugs:', [...seen]);
  
  // Try some specific CircleCI case study pages we haven't done
  const circleciSlugs = ['medium', 'kickstarter', 'buzzfeed', 'fabric', 'instacart', 'doordash'];
  for(const c of circleciSlugs) {
    const url = `https://circleci.com/case-studies/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 100000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      console.log(c, ':', r.status, 'Len:', r.body.length, hasMetrics ? '**METRICS**' : '');
      if(hasMetrics) {
        const idx = text.indexOf('We') > -1 ? text.indexOf('We') : text.indexOf('CircleCI');
        console.log('  Preview:', text.substring(idx > -1 ? idx : 0, (idx > -1 ? idx : 0) + 400));
      }
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
}
main().catch(console.error);