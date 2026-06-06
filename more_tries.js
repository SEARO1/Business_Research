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
  // GitLab remaining customers
  console.log('=== GitLab Remaining Customers ===');
  const gitlabSlugs = ['cube', 'dunelm', 'bab'];
  for(const c of gitlabSlugs) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status, 'Len:', r.body.length);
    if(r.status === 200 && r.body.length > 50000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      if(hasMetrics) {
        console.log('  ** HAS METRICS **');
        const idx = text.indexOf('Customer');
        console.log('  Preview:', text.substring(idx > -1 ? idx : 0, (idx > -1 ? idx : 0) + 500));
      }
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Try other vendors - Qualys, Tenable, Rapid7
  console.log('\n=== Security Vendors ===');
  const secVendors = [
    ['qualys', 'https://www.qualys.com/case-studies/'],
    ['tenable', 'https://www.tenable.com/case-studies'],
    ['rapid7', 'https://www.rapid7.com/case-studies/']
  ];
  for(const [name, url] of secVendors) {
    const r = await fetch(url);
    console.log(name, ':', r.status, 'Len:', r.body.length);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Try Sumo Logic
  console.log('\n=== Sumo Logic ===');
  const sl = await fetch('https://www.sumologic.com/solutions/case-studies/');
  console.log('Status:', sl.status, 'Len:', sl.body.length);
  
  // Try Elastic Cloud customers
  console.log('\n=== Elastic Cloud Customers ===');
  const ec = await fetch('https://www.elastic.co/cloud/users/');
  console.log('Status:', ec.status, 'Len:', ec.body.length);
}
main().catch(console.error);