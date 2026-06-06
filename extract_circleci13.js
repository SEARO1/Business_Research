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
  console.log('=== CIRCLECI / REPAIRPAL ===');
  const rp = await fetch('https://circleci.com/case-studies/repairpal/');
  const rpText = extractText(rp.body);
  const rpStart = rpText.indexOf('RepairPal');
  console.log(rpText.substring(rpStart > -1 ? rpStart : 0, (rpStart > -1 ? rpStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / RETURNALYZE ===');
  const ra = await fetch('https://circleci.com/case-studies/returnalyze/');
  const raText = extractText(ra.body);
  const raStart = raText.indexOf('Returnalyze');
  console.log(raText.substring(raStart > -1 ? raStart : 0, (raStart > -1 ? raStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / TUNAIKU ===');
  const tn = await fetch('https://circleci.com/case-studies/tunaiku/');
  const tnText = extractText(tn.body);
  const tnStart = tnText.indexOf('Tunaiku');
  console.log(tnText.substring(tnStart > -1 ? tnStart : 0, (tnStart > -1 ? tnStart : 0) + 3000));
}
main().catch(console.error);