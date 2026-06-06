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
  console.log('=== CIRCLECI / CREDICULO ===');
  const cr = await fetch('https://circleci.com/case-studies/crediculo/');
  const crText = extractText(cr.body);
  const crStart = crText.indexOf('Credic');
  console.log(crText.substring(crStart > -1 ? crStart : 0, (crStart > -1 ? crStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / BLUECHERE ===');
  const bh = await fetch('https://circleci.com/case-studies/bluecher/');
  const bhText = extractText(bh.body);
  const bhStart = bhText.indexOf('Blue');
  console.log(bhText.substring(bhStart > -1 ? bhStart : 0, (bhStart > -1 ? bhStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / AUTOINTENSIVE ===');
  const ai = await fetch('https://circleci.com/case-studies/autointensive/');
  const aiText = extractText(ai.body);
  const aiStart = aiText.indexOf('Auto');
  console.log(aiText.substring(aiStart > -1 ? aiStart : 0, (aiStart > -1 ? aiStart : 0) + 3000));
}
main().catch(console.error);