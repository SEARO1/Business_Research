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
  console.log('=== CIRCLECI / SEVENROOMS ===');
  const sr = await fetch('https://circleci.com/case-studies/sevenrooms/');
  const srText = extractText(sr.body);
  const srStart = srText.indexOf('Sevenrooms');
  console.log(srText.substring(srStart > -1 ? srStart : 0, (srStart > -1 ? srStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / POLICYME ===');
  const pm = await fetch('https://circleci.com/case-studies/policyme/');
  const pmText = extractText(pm.body);
  const pmStart = pmText.indexOf('PolicyMe');
  console.log(pmText.substring(pmStart > -1 ? pmStart : 0, (pmStart > -1 ? pmStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / TRAVELEX ===');
  const tx = await fetch('https://circleci.com/case-studies/travelex/');
  const txText = extractText(tx.body);
  const txStart = txText.indexOf('Travelex');
  console.log(txText.substring(txStart > -1 ? txStart : 0, (txStart > -1 ? txStart : 0) + 3000));
}
main().catch(console.error);