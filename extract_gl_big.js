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
  console.log('=== GITLAB / THALES ===');
  const t = await fetch('https://about.gitlab.com/customers/thales/');
  const tText = extractText(t.body);
  const tIdx = tText.indexOf('Thales');
  console.log(tText.substring(tIdx, tIdx + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / DEUTSCHE TELEKOM ===');
  const dt = await fetch('https://about.gitlab.com/customers/deutsche-telekom/');
  const dtText = extractText(dt.body);
  const dtIdx = dtText.indexOf('Deutsche');
  console.log(dtText.substring(dtIdx, dtIdx + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / LOCKHEED MARTIN ===');
  const lm = await fetch('https://about.gitlab.com/customers/lockheed-martin/');
  const lmText = extractText(lm.body);
  const lmIdx = lmText.indexOf('Lockheed');
  console.log(lmText.substring(lmIdx, lmIdx + 3500));
}
main().catch(console.error);