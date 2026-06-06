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
    .replace(/\s+/g, ' ')
    .trim();
}
async function main() {
  // CircleCI Cruise
  console.log('=== CIRCLECI / CRUISE ===');
  const cruise = await fetch('https://circleci.com/case-studies/cruise/');
  const cText = extractText(cruise.body);
  const idx = cText.indexOf('Cruise');
  if(idx > -1) console.log(cText.substring(idx, idx + 3000));
  
  await new Promise(r => setTimeout(r, 500));
  
  // Get Eventbrite full content
  console.log('\n\n=== EVENTBRITE FULL ===');
  const eb = await fetch('https://circleci.com/case-studies/eventbrite/');
  const ebText = extractText(eb.body);
  const idx2 = ebText.indexOf('90 min');
  if(idx2 > -1) console.log(ebText.substring(idx2 - 200, idx2 + 1500));
}
main().catch(console.error);