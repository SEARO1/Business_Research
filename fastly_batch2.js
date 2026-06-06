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
  console.log('=== FASTLY / GUARDIAN ===');
  const gd = await fetch('https://www.fastly.com/case-study/guardian/');
  const gdText = extractText(gd.body);
  const gdStart = gdText.indexOf('Guardian');
  console.log(gdText.substring(gdStart > -1 ? gdStart : 0, (gdStart > -1 ? gdStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== FASTLY / HULU ===');
  const hl = await fetch('https://www.fastly.com/case-study/hulu/');
  const hlText = extractText(hl.body);
  const hlStart = hlText.indexOf('Hulu');
  console.log(hlText.substring(hlStart > -1 ? hlStart : 0, (hlStart > -1 ? hlStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== FASTLY / SONOS ===');
  const sn = await fetch('https://www.fastly.com/case-study/sonos/');
  const snText = extractText(sn.body);
  const snStart = snText.indexOf('Sonos');
  console.log(snText.substring(snStart > -1 ? snStart : 0, (snStart > -1 ? snStart : 0) + 3000));
}
main().catch(console.error);