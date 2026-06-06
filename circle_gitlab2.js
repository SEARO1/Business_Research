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
  // CircleCI - known working slugs from memory
  console.log('=== CircleCI Known Working ===');
  const circleci = [
    'eventbrite',
    'cruise',
    'dollar-shave-club',
    'buzzfeed',
    'shopify'  // try without trailing slash
  ];
  for(const c of circleci) {
    const url = `https://circleci.com/case-studies/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status, 'Len:', r.body.length);
    if(r.status === 200 && r.body.length > 30000) {
      const paras = r.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
      let count = 0;
      paras.forEach(p => {
        const txt = p.replace(/<[^>]+>/g,'').trim();
        if(txt.length > 150 && count < 3) { console.log('  ', txt.substring(0,300)); count++; }
      });
    }
    await new Promise(r => setTimeout(r, 500));
  }
  
  // GitLab - known working slugs
  console.log('\n=== GitLab Known Working ===');
  const gitlab = [
    'hilti',
    'ericsson', 
    'siemens'
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
        if(txt.length > 150 && count < 3) { console.log('  ', txt.substring(0,300)); count++; }
      });
    }
    await new Promise(r => setTimeout(r, 500));
  }
  
  // Try Contentful
  console.log('\n=== Contentful ===');
  const cf = await fetch('https://www.contentful.com/customers/');
  console.log('Status:', cf.status, 'Len:', cf.body.length);
  if(cf.status === 200) {
    const re = /href="(\/customers\/[^"]+)">([^<]+)/gi;
    const seen = new Set();
    let m;
    while((m = re.exec(cf.body)) !== null) {
      if(!seen.has(m[1])) { seen.add(m[1]); console.log(m[2].trim(), '-', m[1]); }
    }
  }
}
main().catch(console.error);