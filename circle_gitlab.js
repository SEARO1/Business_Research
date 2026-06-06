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
async function main() {
  // More CircleCI case studies
  console.log('=== CircleCI Case Studies ===');
  const circleci = [
    'shopify', 'datadog', 'trivago', 'mozilla', 'segment',
    'ghost', 'netlify', 'jfrog', 'klarna', 'stripe',
    'sentry', 'coinbase', 'cloudflare', 'twilio'
  ];
  for(const c of circleci) {
    const url = `https://circleci.com/case-studies/${c}/`;
    const r = await fetch(url);
    const name = c;
    console.log(name, ':', r.status, 'Len:', r.body.length);
    if(r.status === 200 && r.body.length > 30000) {
      const paras = r.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
      let count = 0;
      paras.forEach(p => {
        const txt = p.replace(/<[^>]+>/g,'').trim();
        if(txt.length > 150 && count < 2) { console.log('  ', txt.substring(0,250)); count++; }
      });
    }
    await new Promise(r => setTimeout(r, 400));
  }
  
  // More GitLab customer pages
  console.log('\n=== GitLab Customers ===');
  const gitlab = [
    'idemia', 'so-sure', 'british-telecom', 'maersk', 'idemia',
    'tuxguitar', '抵打', '抵打3'
  ];
  for(const c of gitlab) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status, 'Len:', r.body.length);
    if(r.status === 200 && r.body.length > 30000) {
      const paras = r.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
      let count = 0;
      paras.forEach(p => {
        const txt = p.replace(/<[^>]+>/g,'').trim();
        if(txt.length > 150 && count < 2) { console.log('  ', txt.substring(0,250)); count++; }
      });
    }
    await new Promise(r => setTimeout(r, 400));
  }
}
main().catch(console.error);