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
  // Try CircleCI case studies - from their main page
  console.log('=== CircleCI Case Studies Index ===');
  const idx = await fetch('https://circleci.com/case-studies/');
  console.log('Status:', idx.status, 'Len:', idx.body.length);
  
  // Extract case study links
  const linkRe = /\/case-studies\/([a-z0-9-]+)\/"/gi;
  const seen = new Set();
  let m;
  while((m = linkRe.exec(idx.body)) !== null) {
    if(!seen.has(m[1])) { seen.add(m[1]); }
  }
  console.log('Slugs found:', [...seen].slice(0, 30));
  
  // Try the ones we know work
  console.log('\n=== CircleCI Individual Pages ===');
  const circleci = [
    'buzzfeed', 'shopify', 'datadog', 'trivago', 'mozilla',
    'segment', 'ghost', 'netlify', 'jfrog', 'klarna',
    'sentry', 'coinbase', 'cloudflare', 'twilio', 'stripe'
  ];
  for(const c of circleci) {
    const url = `https://circleci.com/case-studies/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 100000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      console.log(c, ':', r.status, 'Len:', r.body.length, hasMetrics ? '**METRICS**' : '');
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
}
main().catch(console.error);