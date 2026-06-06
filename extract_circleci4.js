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
  console.log('=== CIRCLECI / TOSS ===');
  const t = await fetch('https://circleci.com/case-studies/toss/');
  const tText = extractText(t.body);
  const tStart = tText.indexOf('Toss');
  console.log(tText.substring(tStart > -1 ? tStart : 0, (tStart > -1 ? tStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / PROCORE ===');
  const pc = await fetch('https://circleci.com/case-studies/procore/');
  const pcText = extractText(pc.body);
  const pcStart = pcText.indexOf('Procore');
  console.log(pcText.substring(pcStart > -1 ? pcStart : 0, (pcStart > -1 ? pcStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / SNYK ===');
  const sn = await fetch('https://circleci.com/case-studies/snyk/');
  const snText = extractText(sn.body);
  const snStart = snText.indexOf('Snyk');
  console.log(snText.substring(snStart > -1 ? snStart : 0, (snStart > -1 ? snStart : 0) + 3000));
}
main().catch(console.error);