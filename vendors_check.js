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
  // Try Akamai case studies
  console.log('=== Akamai Case Studies ===');
  const urls = [
    'https://www.akamai.com/resources/case-studies',
    'https://www.akamai.com/customer-stories',
    'https://www.akamai.com/us/en/about/case-studies/'
  ];
  for(const url of urls) {
    const r = await fetch(url);
    console.log(url.replace('https://www.akamai.com/',''), ':', r.status, r.body.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Checkmarx
  console.log('\n=== Checkmarx ===');
  const cx = await fetch('https://checkmarx.com/customer-success/case-studies/');
  console.log('Status:', cx.status, 'Len:', cx.body.length);
  
  // Try Veracode
  console.log('\n=== Veracode ===');
  const vz = await fetch('https://www.veracode.com/case-studies');
  console.log('Status:', vz.status, 'Len:', vz.body.length);
  
  // Try Snyk customers (we know this worked before)
  console.log('\n=== Snyk Customers ===');
  const sn = await fetch('https://snyk.io/customers/');
  console.log('Status:', sn.status, 'Len:', sn.body.length);
  const re = /href="(\/customers\/[^"]+)">([^<]+)/gi;
  const seen = new Set();
  let m;
  while((m = re.exec(sn.body)) !== null) {
    if(!seen.has(m[1])) { seen.add(m[1]); console.log(m[2].trim(), '-', m[1]); }
  }
}
main().catch(console.error);