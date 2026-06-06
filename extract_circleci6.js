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
  // More CircleCI case studies
  console.log('=== CIRCLECI / HONEYCOMB ===');
  const hc = await fetch('https://circleci.com/case-studies/honeycomb/');
  const hcText = extractText(hc.body);
  const hcStart = hcText.indexOf('Honeycomb');
  console.log(hcText.substring(hcStart > -1 ? hcStart : 0, (hcStart > -1 ? hcStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / GREENHOUSE ===');
  const gh = await fetch('https://circleci.com/case-studies/greenhouse/');
  const ghText = extractText(gh.body);
  const ghStart = ghText.indexOf('Greenhouse');
  console.log(ghText.substring(ghStart > -1 ? ghStart : 0, (ghStart > -1 ? ghStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / INCIDENT.IO ===');
  const ii = await fetch('https://circleci.com/case-studies/incident-io/');
  const iiText = extractText(ii.body);
  const iiStart = iiText.indexOf('incident');
  console.log(iiText.substring(iiStart > -1 ? iiStart : 0, (iiStart > -1 ? iiStart : 0) + 3000));
}
main().catch(console.error);