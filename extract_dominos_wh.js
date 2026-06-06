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
  console.log('=== NEW RELIC / DOMINOS ===');
  const d = await fetch('https://newrelic.com/customers/dominos');
  const dText = extractText(d.body);
  const dIdx = dText.indexOf('Domino');
  console.log(dText.substring(dIdx > -1 ? dIdx : 0, (dIdx > -1 ? dIdx : 0) + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== NEW RELIC / WILLIAM HILL ===');
  const wh = await fetch('https://newrelic.com/customers/william-hill');
  const whText = extractText(wh.body);
  const whIdx = whText.indexOf('William');
  console.log(whText.substring(whIdx > -1 ? whIdx : 0, (whIdx > -1 ? whIdx : 0) + 3500));
}
main().catch(console.error);