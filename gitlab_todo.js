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
  // Try more GitLab customers - get full list from index
  console.log('=== GitLab Full Customer Index ===');
  const r = await fetch('https://about.gitlab.com/customers/');
  const text = extractText(r.body);
  
  // Find all customer links
  const linkRe = /\/customers\/([a-z0-9-]+)\//gi;
  const seen = new Set();
  let m;
  while((m = linkRe.exec(r.body)) !== null) {
    if(!seen.has(m[1])) { seen.add(m[1]); }
  }
  console.log('All customer slugs:', [...seen]);
  
  // Try the ones we haven't done yet
  const allSlugs = [...seen];
  const doneSlugs = ['thales', 'ericsson', 'cube', 'deutsche-telekom', 'carfax', 'lockheed-martin', 'siemens', 'hilti', 'fujitsu', 'fanatics', 'dunelm', 'nvidia', 'goldman-sachs', 'iron-mountain', 'bab', 'all'];
  const todoSlugs = allSlugs.filter(s => !doneSlugs.includes(s));
  console.log('\nTo do:', todoSlugs);
  
  // Try a few of the remaining ones
  for(const c of todoSlugs.slice(0, 5)) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r2 = await fetch(url);
    console.log(c, ':', r2.status, 'Len:', r2.body.length);
    if(r2.status === 200 && r2.body.length > 50000) {
      const text2 = extractText(r2.body);
      const hasMetrics = text2.match(/\d+[%x]/) || text2.match(/\d{3,}/);
      if(hasMetrics) console.log('  ** HAS METRICS **');
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}
main().catch(console.error);