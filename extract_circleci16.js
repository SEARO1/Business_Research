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
  console.log('=== CIRCLECI / BITPRO ===');
  const bp = await fetch('https://circleci.com/case-studies/bitpro/');
  const bpText = extractText(bp.body);
  const bpStart = bpText.indexOf('Bitpro');
  console.log(bpText.substring(bpStart > -1 ? bpStart : 0, (bpStart > -1 ? bpStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / COHERE ===');
  const co = await fetch('https://circleci.com/case-studies/cohere/');
  const coText = extractText(co.body);
  const coStart = coText.indexOf('Cohere');
  console.log(coText.substring(coStart > -1 ? coStart : 0, (coStart > -1 ? coStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / CRN ===');
  const crn = await fetch('https://circleci.com/case-studies/crn/');
  const crnText = extractText(crn.body);
  const crnStart = crnText.indexOf('CRN');
  console.log(crnText.substring(crnStart > -1 ? crnStart : 0, (crnStart > -1 ? crnStart : 0) + 3000));
}
main().catch(console.error);