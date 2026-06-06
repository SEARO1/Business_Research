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
  console.log('=== CLOUDFLARE / HUBSPOT ===');
  const cf = await fetch('https://www.cloudflare.com/case-studies/hubspot/');
  const text = extractText(cf.body);
  console.log('Len:', cf.body.length);
  console.log(text.substring(0, 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Also check what the Cloudflare main case-studies page has
  console.log('\n\n=== CLOUDFLARE CASE STUDIES INDEX (extract slugs) ===');
  const idx = await fetch('https://www.cloudflare.com/case-studies/');
  const idxText = extractText(idx.body);
  // Look for customer names
  const matches = idxText.match(/[A-Z][a-z]+ [A-Z][a-z]+/g) || [];
  console.log('Company names found:', [...new Set(matches)].slice(0, 50));
}
main().catch(console.error);