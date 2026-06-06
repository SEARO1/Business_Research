const https = require('https');
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({status: res.statusCode, headers: res.headers, body: data}));
    }).on('error', reject);
  });
}
async function main() {
  // Try Vanta case studies - we know these work
  console.log('=== Vanta Customer Stories ===');
  const vantaPages = [
    'https://www.vanta.com/customers/stripe',
    'https://www.vanta.com/customers/deloitte',
    'https://www.vanta.com/customers/greylock',
    'https://www.vanta.com/customers/sequoia',
    'https://www.vanta.com/customers/lattice',
    'https://www.vanta.com/customers/notion'
  ];
  for(const url of vantaPages) {
    const r = await fetch(url);
    const name = url.split('/').pop();
    console.log(name, ':', r.status, 'Len:', r.body.length);
    if(r.status === 200 && r.body.length > 50000) {
      const paras = r.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
      let count = 0;
      paras.forEach(p => {
        const txt = p.replace(/<[^>]+>/g,'').trim();
        if(txt.length > 150 && count < 4) { console.log('  ', txt.substring(0,300)); count++; }
      });
    }
    await new Promise(r => setTimeout(r, 500));
  }
  
  // Try LaunchDarkly
  console.log('\n=== LaunchDarkly ===');
  const ld = await fetch('https://launchdarkly.com/customers/');
  console.log('Status:', ld.status, 'Len:', ld.body.length);
  if(ld.status === 200) {
    const re = /href="(\/customers\/[^"]+)">([^<]+)/gi;
    const seen = new Set();
    let m;
    while((m = re.exec(ld.body)) !== null) {
      if(!seen.has(m[1])) { seen.add(m[1]); console.log(m[2].trim(), '-', m[1]); }
    }
  }
}
main().catch(console.error);