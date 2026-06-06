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
  console.log('=== NEWRELIC / NCR ===');
  const nr = await fetch('https://newrelic.com/customers/ncr/');
  const nrText = extractText(nr.body);
  console.log(nrText.substring(0, 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== NEWRELIC / COUPA ===');
  const cp = await fetch('https://newrelic.com/customers/coupa/');
  const cpText = extractText(cp.body);
  console.log(cpText.substring(0, 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== NEWRELIC / CARDIFF ===');
  const cd = await fetch('https://newrelic.com/customers/cardiff/');
  const cdText = extractText(cd.body);
  console.log(cdText.substring(0, 4000));
}
main().catch(console.error);