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
  // Try more Snyk customer pages
  const snykCust = [
    'snyk.io/customers/zanui',
    'snyk.io/customers/babbel',
    'snyk.io/customers/citrix',
    'snyk.io/customers/shopify',
    'snyk.io/customers/automattic',
    'snyk.io/customers/groupon',
    'snyk.io/customers/revolut',
    'snyk.io/customers/stripe'
  ];
  console.log('=== Snyk Customer Pages ===');
  for(const c of snykCust) {
    const r = await fetch('https://' + c);
    console.log(c.split('/').pop(), ':', r.status);
    if(r.status === 200) {
      const paras = r.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
      let count = 0;
      paras.forEach(p => {
        const txt = p.replace(/<[^>]+>/g,'').trim();
        if(txt.length > 100 && count < 3) { console.log('  ', txt.substring(0,250)); count++; }
      });
    }
    await new Promise(r => setTimeout(r, 400));
  }
  
  // Try Sumo Logic customers
  console.log('\n=== Sumo Logic ===');
  const sl = await fetch('https://www.sumologic.com/customers/');
  console.log('Status:', sl.status, 'Len:', sl.body.length);
  
  // Try New Relic (more pages)
  console.log('\n=== New Relic More ===');
  const nrPages = [
    'https://newrelic.com/customers/shopify',
    'https://newrelic.com/customers/adobe',
    'https://newrelic.com/customers/ea',
    'https://newrelic.com/customers/lyft'
  ];
  for(const url of nrPages) {
    const r = await fetch(url);
    const name = url.split('/').pop();
    console.log(name, ':', r.status);
    await new Promise(r2 => setTimeout(r2, 400));
  }
  
  // Try Trend Micro customers
  console.log('\n=== Trend Micro ===');
  const tm = await fetch('https://www.trendmicro.com/en_us/business/customer-stories.html');
  console.log('Status:', tm.status, 'Len:', tm.body.length);
}
main().catch(console.error);