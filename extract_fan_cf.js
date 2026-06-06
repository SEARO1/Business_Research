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
  console.log('=== GITLAB / FANATICS ===');
  const fan = await fetch('https://about.gitlab.com/customers/fanatics/');
  const fanText = extractText(fan.body);
  const fanIdx = fanText.indexOf('Fanatics');
  console.log(fanText.substring(fanIdx, fanIdx + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / CARFAX ===');
  const cf = await fetch('https://about.gitlab.com/customers/carfax/');
  const cfText = extractText(cf.body);
  const cfIdx = cfText.indexOf('CARFAX');
  console.log(cfText.substring(cfIdx, cfIdx + 3000));
}
main().catch(console.error);