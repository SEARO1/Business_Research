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
  // Extract Canva content from Cloudflare case study
  const res = await fetch('https://www.cloudflare.com/case-studies/canva/');
  const t = extractText(res.body);
  const start = t.indexOf('Canva');
  console.log('CANVA STATUS:', res.status, 'LEN:', t.length);
  console.log(t.substring(start > -1 ? start : 0, start > -1 ? start + 6000 : 6000));
}
main().catch(console.error);