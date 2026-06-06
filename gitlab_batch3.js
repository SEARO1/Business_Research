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
  console.log('=== GITLAB / TICKTOL ===');
  const tt = await fetch('https://about.gitlab.com/customers/ticktol/');
  const ttText = extractText(tt.body);
  const ttStart = ttText.indexOf('Tick');
  console.log(ttText.substring(ttStart > -1 ? ttStart : 0, (ttStart > -1 ? ttStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / MORNINGSTAR ===');
  const ms = await fetch('https://about.gitlab.com/customers/morningstar/');
  const msText = extractText(ms.body);
  const msStart = msText.indexOf('Morning');
  console.log(msText.substring(msStart > -1 ? msStart : 0, (msStart > -1 ? msStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / REDHAT ===');
  const rh = await fetch('https://about.gitlab.com/customers/redhat/');
  const rhText = extractText(rh.body);
  const rhStart = rhText.indexOf('Red');
  console.log(rhText.substring(rhStart > -1 ? rhStart : 0, (rhStart > -1 ? rhStart : 0) + 3000));
}
main().catch(console.error);