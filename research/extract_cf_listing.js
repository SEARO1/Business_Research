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
  const res = await fetch('https://www.cloudflare.com/case-studies/');
  const t = extractText(res.body);
  console.log('STATUS:', res.status, 'LEN:', t.length);
  // Find all case study URLs
  const matches = t.match(/[\/case-studies\/][a-z0-9\-]+/gi);
  const unique = [...new Set(matches || [])];
  console.log('Found slugs:', unique.slice(0, 100));
  console.log('\nFull text excerpt:');
  console.log(t.substring(0, 5000));
}
main().catch(console.error);