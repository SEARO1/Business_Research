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
    .replace(/\s+/g, ' ')
    .trim();
}
async function main() {
  // CircleCI - Eventbrite
  console.log('=== CIRCLECI / EVENTBRITE ===');
  const eb = await fetch('https://circleci.com/case-studies/eventbrite/');
  const ebText = extractText(eb.body);
  console.log(ebText.substring(0, 3000));
  
  await new Promise(r => setTimeout(r, 500));
  
  // CircleCI - Dollar Shave Club
  console.log('\n\n=== CIRCLECI / DOLLAR SHAVE CLUB ===');
  const dsc = await fetch('https://circleci.com/case-studies/dollar-shave-club/');
  const dscText = extractText(dsc.body);
  console.log(dscText.substring(0, 3000));
}
main().catch(console.error);