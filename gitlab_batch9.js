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
  console.log('=== GITLAB / SOUTHWEST ===');
  const sw = await fetch('https://about.gitlab.com/customers/southwest/');
  const swText = extractText(sw.body);
  const swStart = swText.indexOf('Southwest');
  console.log(swText.substring(swStart > -1 ? swStart : 0, (swStart > -1 ? swStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / CUBE ===');
  const cb = await fetch('https://about.gitlab.com/customers/cube/');
  const cbText = extractText(cb.body);
  const cbStart = cbText.indexOf('Cube');
  console.log(cbText.substring(cbStart > -1 ? cbStart : 0, (cbStart > -1 ? cbStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / HILTI ===');
  const hl = await fetch('https://about.gitlab.com/customers/hilti/');
  const hlText = extractText(hl.body);
  const hlStart = hlText.indexOf('Hilti');
  console.log(hlText.substring(hlStart > -1 ? hlStart : 0, (hlStart > -1 ? hlStart : 0) + 3000));
}
main().catch(console.error);