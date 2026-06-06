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
  console.log('=== CIRCLECI / SOFY ===');
  const sy = await fetch('https://circleci.com/case-studies/sofy/');
  const syText = extractText(sy.body);
  const syStart = syText.indexOf('Sofy');
  console.log(syText.substring(syStart > -1 ? syStart : 0, (syStart > -1 ? syStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / CHATWORK ===');
  const cw = await fetch('https://circleci.com/case-studies/chatwork/');
  const cwText = extractText(cw.body);
  const cwStart = cwText.indexOf('Chat');
  console.log(cwText.substring(cwStart > -1 ? cwStart : 0, (cwStart > -1 ? cwStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / PLANETIDENTITY ===');
  const pi = await fetch('https://circleci.com/case-studies/planetidentity/');
  const piText = extractText(pi.body);
  const piStart = piText.indexOf('Planet');
  console.log(piText.substring(piStart > -1 ? piStart : 0, (piStart > -1 ? piStart : 0) + 3000));
}
main().catch(console.error);