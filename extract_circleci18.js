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
  console.log('=== CIRCLECI / MATTERIAL ===');
  const mt = await fetch('https://circleci.com/case-studies/matterial/');
  const mtText = extractText(mt.body);
  const mtStart = mtText.indexOf('Matter');
  console.log(mtText.substring(mtStart > -1 ? mtStart : 0, (mtStart > -1 ? mtStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / VAIMO ===');
  const vm = await fetch('https://circleci.com/case-studies/vaimo/');
  const vmText = extractText(vm.body);
  const vmStart = vmText.indexOf('Vaimo');
  console.log(vmText.substring(vmStart > -1 ? vmStart : 0, (vmStart > -1 ? vmStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / TRIPLELIFT ===');
  const tl = await fetch('https://circleci.com/case-studies/triplelift/');
  const tlText = extractText(tl.body);
  const tlStart = tlText.indexOf('Triple');
  console.log(tlText.substring(tlStart > -1 ? tlStart : 0, (tlStart > -1 ? tlStart : 0) + 3000));
}
main().catch(console.error);