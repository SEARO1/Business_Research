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
  console.log('=== CIRCLECI / LUSHI ===');
  const lu = await fetch('https://circleci.com/case-studies/lushi/');
  const luText = extractText(lu.body);
  const luStart = luText.indexOf('Lushi');
  console.log(luText.substring(luStart > -1 ? luStart : 0, (luStart > -1 ? luStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / COZYROCK ===');
  const cr = await fetch('https://circleci.com/case-studies/cozyrock/');
  const crText = extractText(cr.body);
  const crStart = crText.indexOf('Cozy');
  console.log(crText.substring(crStart > -1 ? crStart : 0, (crStart > -1 ? crStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / DBD ===');
  const db = await fetch('https://circleci.com/case-studies/dbd/');
  const dbText = extractText(db.body);
  const dbStart = dbText.indexOf('DBD');
  console.log(dbText.substring(dbStart > -1 ? dbStart : 0, (dbStart > -1 ? dbStart : 0) + 3000));
}
main().catch(console.error);