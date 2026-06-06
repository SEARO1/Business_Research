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
  console.log('=== CIRCLECI / SOLARWINDS ===');
  const sw = await fetch('https://circleci.com/case-studies/solarwinds/');
  const swText = extractText(sw.body);
  const swStart = swText.indexOf('SolarWinds');
  console.log(swText.substring(swStart > -1 ? swStart : 0, (swStart > -1 ? swStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / FLICKSHOT ===');
  const fs2 = await fetch('https://circleci.com/case-studies/flick/');
  const fs2Text = extractText(fs2.body);
  const fs2Start = fs2Text.indexOf('Flick');
  console.log(fs2Text.substring(fs2Start > -1 ? fs2Start : 0, (fs2Start > -1 ? fs2Start : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / PITCH ===');
  const pt = await fetch('https://circleci.com/case-studies/pitch/');
  const ptText = extractText(pt.body);
  const ptStart = ptText.indexOf('Pitch');
  console.log(ptText.substring(ptStart > -1 ? ptStart : 0, (ptStart > -1 ? ptStart : 0) + 3000));
}
main().catch(console.error);