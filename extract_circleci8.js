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
  console.log('=== CIRCLECI / BOLT ===');
  const bt = await fetch('https://circleci.com/case-studies/bolt/');
  const btText = extractText(bt.body);
  const btStart = btText.indexOf('Bolt');
  console.log(btText.substring(btStart > -1 ? btStart : 0, (btStart > -1 ? btStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / BRANCH ===');
  const br = await fetch('https://circleci.com/case-studies/branch/');
  const brText = extractText(br.body);
  const brStart = brText.indexOf('Branch');
  console.log(brText.substring(brStart > -1 ? brStart : 0, (brStart > -1 ? brStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / ITERABLE ===');
  const it = await fetch('https://circleci.com/case-studies/iterable/');
  const itText = extractText(it.body);
  const itStart = itText.indexOf('Iterable');
  console.log(itText.substring(itStart > -1 ? itStart : 0, (itStart > -1 ? itStart : 0) + 3000));
}
main().catch(console.error);