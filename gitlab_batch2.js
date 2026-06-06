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
  console.log('=== GITLAB / ACME ===');
  const ac = await fetch('https://about.gitlab.com/customers/acme/');
  const acText = extractText(ac.body);
  const acStart = acText.indexOf('Acme');
  console.log(acText.substring(acStart > -1 ? acStart : 0, (acStart > -1 ? acStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / BOSCH ===');
  const bs = await fetch('https://about.gitlab.com/customers/bosch/');
  const bsText = extractText(bs.body);
  const bsStart = bsText.indexOf('Bosch');
  console.log(bsText.substring(bsStart > -1 ? bsStart : 0, (bsStart > -1 ? bsStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / SIEMENS ===');
  const sm = await fetch('https://about.gitlab.com/customers/siemens/');
  const smText = extractText(sm.body);
  const smStart = smText.indexOf('Siemens');
  console.log(smText.substring(smStart > -1 ? smStart : 0, (smStart > -1 ? smStart : 0) + 3000));
}
main().catch(console.error);