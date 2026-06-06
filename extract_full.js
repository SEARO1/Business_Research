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
  // CircleCI - Eventbrite - full text
  console.log('=== CIRCLECI / EVENTBRITE (FULL) ===');
  const eb = await fetch('https://circleci.com/case-studies/eventbrite/');
  const ebText = extractText(eb.body);
  // Find the main content
  const idx = ebText.indexOf('Eventbrite saves');
  if(idx > -1) console.log(ebText.substring(idx, idx + 2000));
  
  await new Promise(r => setTimeout(r, 500));
  
  // Dollar Shave Club - full
  console.log('\n\n=== CIRCLECI / DOLLAR SHAVE CLUB (FULL) ===');
  const dsc = await fetch('https://circleci.com/case-studies/dollar-shave-club/');
  const dscText = extractText(dsc.body);
  const idx2 = dscText.indexOf('Dollar Shave Club');
  if(idx2 > -1) console.log(dscText.substring(idx2, idx2 + 2000));
  
  await new Promise(r => setTimeout(r, 500));
  
  // GitLab Hilti - full
  console.log('\n\n=== GITLAB / HILTI (FULL) ===');
  const hilti = await fetch('https://about.gitlab.com/customers/hilti/');
  const hiltiText = extractText(hilti.body);
  console.log(hiltiText.substring(0, 3000));
}
main().catch(console.error);