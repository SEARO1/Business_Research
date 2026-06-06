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
  // Try new GitLab customers from the index
  console.log('=== GitLab New Customers ===');
  const gitlabSlugs = [
    'thales', 'deutsche-telekom', 'lockheed-martin', 'fujitsu',
    'iron-mountain', 'fanatics', 'bab', 'carfax'
  ];
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
        console.log('  Preview:', text.substring(idx > -1 ? idx : 0, (idx > -1 ? idx : 0) + 400));
      }
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}
main().catch(console.error);