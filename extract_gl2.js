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
  console.log('=== GITLAB / FUJITSU ===');
  const f = await fetch('https://about.gitlab.com/customers/fujitsu/');
  const fText = extractText(f.body);
  const fIdx = fText.indexOf('Fujitsu');
  console.log(fText.substring(fIdx, fIdx + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / IRON MOUNTAIN ===');
  const im = await fetch('https://about.gitlab.com/customers/iron-mountain/');
  const imText = extractText(im.body);
  const imIdx = imText.indexOf('Iron');
  console.log(imText.substring(imIdx, imIdx + 3500));
}
main().catch(console.error);