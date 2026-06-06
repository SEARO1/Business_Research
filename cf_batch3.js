const https = require('https');
function fetch(url, followRedirects = true) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {headers: {'User-Agent': 'Mozilla/5.0'}}, res => {
      if (followRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetch(res.headers.location, followRedirects).then(resolve).catch(reject);
        return;
      }
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
  console.log('=== CLOUDFLARE / LUMEN ===');
  const lm = await fetch('https://cloudflare.com/case-studies/lumen/');
  const lmText = extractText(lm.body);
  const lmStart = lmText.indexOf('Lumen');
  console.log(lmText.substring(lmStart > -1 ? lmStart : 0, (lmStart > -1 ? lmStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CLOUDFLARE / BOSE ===');
  const bs = await fetch('https://cloudflare.com/case-studies/bose/');
  const bsText = extractText(bs.body);
  const bsStart = bsText.indexOf('Bose');
  console.log(bsText.substring(bsStart > -1 ? bsStart : 0, (bsStart > -1 ? bsStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CLOUDFLARE / KONG ===');
  const kg = await fetch('https://cloudflare.com/case-studies/kong/');
  const kgText = extractText(kg.body);
  const kgStart = kgText.indexOf('Kong');
  console.log(kgText.substring(kgStart > -1 ? kgStart : 0, (kgStart > -1 ? kgStart : 0) + 3000));
}
main().catch(console.error);