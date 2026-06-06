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
  // Try Imperva customer case studies
  console.log('=== Imperva Main ===');
  const r = await fetch('https://www.imperva.com/resources/case-studies/');
  console.log('Status:', r.status, 'Len:', r.body.length);
  
  // Extract case study links
  const re = /href="(\/resources\/case-studies\/[^"]+)">([^<]+)/gi;
  const seen = new Set();
  let m;
  while((m = re.exec(r.body)) !== null) {
    if(!seen.has(m[1])) { seen.add(m[1]); console.log(m[2].trim(), '-', m[1]); }
  }
  
  // Try specific Imperva pages
  const pages = [
    'https://www.imperva.com/resources/case-studies/gartner/',
    'https://www.imperva.com/resources/case-studies/comcast/',
    'https://www.imperva.com/resources/case-studies/redhat/'
  ];
  console.log('\n=== Specific Pages ===');
  for(const url of pages) {
    const r2 = await fetch(url);
    console.log(url.split('/').slice(-2,-1)[0], ':', r2.status);
    if(r2.status === 200) {
      const paras = r2.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
      paras.slice(0,8).forEach(p => {
        const txt = p.replace(/<[^>]+>/g,'').trim();
        if(txt.length > 80) console.log('  ', txt.substring(0,200));
      });
    }
    await new Promise(r => setTimeout(r, 500));
  }
}
main().catch(console.error);