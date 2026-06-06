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
    .replace(/\s+/g, ' ')
    .trim();
}
async function main() {
  // Try more GitLab customers
  console.log('=== More GitLab Customers ===');
  const gitlabSlugs = [
    'maersk', 'idemia', 'british-telecom', 'tokyu-lands',
    'cvs', 'telenor', 'canon', 'sony', 'goldman-sachs',
    'nvidia', '吸水', '抵打'
  ];
  for(const c of gitlabSlugs) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status, 'Len:', r.body.length);
    if(r.status === 200 && r.body.length > 50000) {
      const text = extractText(r.body);
      // Check if it has metrics
      if(text.match(/\d+[%x]/)) {
        console.log('  HAS METRICS!');
        console.log('  Preview:', text.substring(text.indexOf('Customer'), text.indexOf('Customer') + 500));
      }
    }
    await new Promise(r => setTimeout(r, 400));
  }
  
  // Try more CircleCI
  console.log('\n=== More CircleCI ===');
  const circleciSlugs = [
    'shopify', 'datadog', 'trivago', 'mozilla', 'segment',
    'sentry', 'coinbase', 'cloudflare', 'twilio', 'stripe'
  ];
  for(const c of circleciSlugs) {
    const url = `https://circleci.com/case-studies/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status, 'Len:', r.body.length);
    await new Promise(r => setTimeout(r, 400));
  }
}
main().catch(console.error);