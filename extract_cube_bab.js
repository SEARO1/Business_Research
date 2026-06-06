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
  console.log('=== GITLAB / CUBE ===');
  const c = await fetch('https://about.gitlab.com/customers/cube/');
  const cText = extractText(c.body);
  const cIdx = cText.indexOf('Cube');
  console.log(cText.substring(cIdx, cIdx + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / BAB ===');
  const b = await fetch('https://about.gitlab.com/customers/bab/');
  const bText = extractText(b.body);
  const bIdx = bText.indexOf('BAB');
  console.log(bText.substring(bIdx, bIdx + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / DUNELM (GitLab) ===');
  const d = await fetch('https://about.gitlab.com/customers/dunelm/');
  const dText = extractText(d.body);
  const dIdx = dText.indexOf('Dunelm');
  console.log(dText.substring(dIdx, dIdx + 3500));
}
main().catch(console.error);