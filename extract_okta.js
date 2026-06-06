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
  console.log('=== OKTA / SIEMENS ===');
  const s = await fetch('https://www.okta.com/customers/siemens/');
  const sText = extractText(s.body);
  console.log('Len:', s.body.length);
  console.log(sText.substring(0, 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== OKTA / FEDEX ===');
  const f = await fetch('https://www.okta.com/customers/fedex/');
  const fText = extractText(f.body);
  console.log('Len:', f.body.length);
  console.log(fText.substring(0, 3500));
}
main().catch(console.error);