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
  console.log('=== CIRCLECI / WAVE FINANCIAL ===');
  const wf = await fetch('https://circleci.com/case-studies/wave-financial/');
  const wfText = extractText(wf.body);
  const wfStart = wfText.indexOf('Wave');
  console.log(wfText.substring(wfStart > -1 ? wfStart : 0, (wfStart > -1 ? wfStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / SALECYCLE ===');
  const sc = await fetch('https://circleci.com/case-studies/salecycle/');
  const scText = extractText(sc.body);
  const scStart = scText.indexOf('SaleCycle');
  console.log(scText.substring(scStart > -1 ? scStart : 0, (scStart > -1 ? scStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / BRANDING ===');
  const bg = await fetch('https://circleci.com/case-studies/brandfolder/');
  const bgText = extractText(bg.body);
  const bgStart = bgText.indexOf('Brandfolder');
  console.log(bgText.substring(bgStart > -1 ? bgStart : 0, (bgStart > -1 ? bgStart : 0) + 3000));
}
main().catch(console.error);