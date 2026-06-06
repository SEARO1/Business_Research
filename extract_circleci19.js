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
  console.log('=== CIRCLECI / TRINITY ===');
  const tr = await fetch('https://circleci.com/case-studies/trinity/');
  const trText = extractText(tr.body);
  const trStart = trText.indexOf('Trinity');
  console.log(trText.substring(trStart > -1 ? trStart : 0, (trStart > -1 ? trStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / AYE FINANCE ===');
  const af = await fetch('https://circleci.com/case-studies/aye-finance/');
  const afText = extractText(af.body);
  const afStart = afText.indexOf('Aye');
  console.log(afText.substring(afStart > -1 ? afStart : 0, (afStart > -1 ? afStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / FESTO ===');
  const ft = await fetch('https://circleci.com/case-studies/festo/');
  const ftText = extractText(ft.body);
  const ftStart = ftText.indexOf('Festo');
  console.log(ftText.substring(ftStart > -1 ? ftStart : 0, (ftStart > -1 ? ftStart : 0) + 3000));
}
main().catch(console.error);