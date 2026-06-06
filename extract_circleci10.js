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
  console.log('=== CIRCLECI / NETGURU ===');
  const ng = await fetch('https://circleci.com/case-studies/netguru/');
  const ngText = extractText(ng.body);
  const ngStart = ngText.indexOf('Netguru');
  console.log(ngText.substring(ngStart > -1 ? ngStart : 0, (ngStart > -1 ? ngStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / OUTFIT7 ===');
  const of = await fetch('https://circleci.com/case-studies/outfit7/');
  const ofText = extractText(of.body);
  const ofStart = ofText.indexOf('Outfit7');
  console.log(ofText.substring(ofStart > -1 ? ofStart : 0, (ofStart > -1 ? ofStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / JOY ===');
  const jy = await fetch('https://circleci.com/case-studies/joy/');
  const jyText = extractText(jy.body);
  const jyStart = jyText.indexOf('Joy');
  console.log(jyText.substring(jyStart > -1 ? jyStart : 0, (jyStart > -1 ? jyStart : 0) + 3000));
}
main().catch(console.error);