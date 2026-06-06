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
  // More CircleCI case studies from the list
  console.log('=== CIRCLECI / VOICEFLOW ===');
  const vf = await fetch('https://circleci.com/case-studies/voiceflow/');
  const vfText = extractText(vf.body);
  const vfStart = vfText.indexOf('Voiceflow');
  console.log(vfText.substring(vfStart > -1 ? vfStart : 0, (vfStart > -1 ? vfStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / AXIOS ===');
  const ax = await fetch('https://circleci.com/case-studies/axios/');
  const axText = extractText(ax.body);
  const axStart = axText.indexOf('Axios');
  console.log(axText.substring(axStart > -1 ? axStart : 0, (axStart > -1 ? axStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / TESSIAN ===');
  const ts = await fetch('https://circleci.com/case-studies/tessian/');
  const tsText = extractText(ts.body);
  const tsStart = tsText.indexOf('Tessian');
  console.log(tsText.substring(tsStart > -1 ? tsStart : 0, (tsStart > -1 ? tsStart : 0) + 3000));
}
main().catch(console.error);