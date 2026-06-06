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
  console.log('=== CIRCLECI / KAJABI ===');
  const k = await fetch('https://circleci.com/case-studies/kajabi/');
  const kText = extractText(k.body);
  const kStart = kText.indexOf('Kajabi');
  console.log(kText.substring(kStart > -1 ? kStart : 0, (kStart > -1 ? kStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / 17LIVE ===');
  const l = await fetch('https://circleci.com/case-studies/17live/');
  const lText = extractText(l.body);
  const lStart = lText.indexOf('17');
  console.log(lText.substring(lStart > -1 ? lStart : 0, (lStart > -1 ? lStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / BARACODA ===');
  const b = await fetch('https://circleci.com/case-studies/baracoda/');
  const bText = extractText(b.body);
  const bStart = bText.indexOf('Baracoda');
  console.log(bText.substring(bStart > -1 ? bStart : 0, (bStart > -1 ? bStart : 0) + 3000));
}
main().catch(console.error);