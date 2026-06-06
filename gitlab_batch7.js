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
  console.log('=== GITLAB / KOE ===');
  const ko = await fetch('https://about.gitlab.com/customers/koe/');
  const koText = extractText(ko.body);
  const koStart = koText.indexOf('Koe');
  console.log(koText.substring(koStart > -1 ? koStart : 0, (koStart > -1 ? koStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / HARBOR ===');
  const hb = await fetch('https://about.gitlab.com/customers/harbor/');
  const hbText = extractText(hb.body);
  const hbStart = hbText.indexOf('Harbor');
  console.log(hbText.substring(hbStart > -1 ? hbStart : 0, (hbStart > -1 ? hbStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / IDENTITY ===');
  const id = await fetch('https://about.gitlab.com/customers/identity/');
  const idText = extractText(id.body);
  const idStart = idText.indexOf('Identity');
  console.log(idText.substring(idStart > -1 ? idStart : 0, (idStart > -1 ? idStart : 0) + 3000));
}
main().catch(console.error);