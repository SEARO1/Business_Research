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
  console.log('=== CIRCLECI / ADWERX ===');
  const aw = await fetch('https://circleci.com/case-studies/adwerx/');
  const awText = extractText(aw.body);
  const awStart = awText.indexOf('Adwerx');
  console.log(awText.substring(awStart > -1 ? awStart : 0, (awStart > -1 ? awStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / PROCURIFY ===');
  const pr = await fetch('https://circleci.com/case-studies/procurify/');
  const prText = extractText(pr.body);
  const prStart = prText.indexOf('Procurify');
  console.log(prText.substring(prStart > -1 ? prStart : 0, (prStart > -1 ? prStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / ROLLBAR ===');
  const rb = await fetch('https://circleci.com/case-studies/rollbar/');
  const rbText = extractText(rb.body);
  const rbStart = rbText.indexOf('Rollbar');
  console.log(rbText.substring(rbStart > -1 ? rbStart : 0, (rbStart > -1 ? rbStart : 0) + 3000));
}
main().catch(console.error);