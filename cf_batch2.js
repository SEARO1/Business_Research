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
  console.log('=== CLOUDFLARE / NASDAQ ===');
  const nq = await fetch('https://cloudflare.com/case-studies/nasdaq');
  const nqText = extractText(nq.body);
  console.log(nqText.substring(0, 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CLOUDFLARE / ZALANDO ===');
  const zl = await fetch('https://cloudflare.com/case-studies/zalando');
  const zlText = extractText(zl.body);
  console.log(zlText.substring(0, 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CLOUDFLARE / EQUINIX ===');
  const eq = await fetch('https://cloudflare.com/case-studies/equinix');
  const eqText = extractText(eq.body);
  console.log(eqText.substring(0, 4000));
}
main().catch(console.error);