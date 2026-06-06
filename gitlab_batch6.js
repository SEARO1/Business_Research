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
  console.log('=== GITLAB / BESTBUY ===');
  const bb = await fetch('https://about.gitlab.com/customers/bestbuy/');
  const bbText = extractText(bb.body);
  const bbStart = bbText.indexOf('Best');
  console.log(bbText.substring(bbStart > -1 ? bbStart : 0, (bbStart > -1 ? bbStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / AMAZON ===');
  const am = await fetch('https://about.gitlab.com/customers/amazon/');
  const amText = extractText(am.body);
  const amStart = amText.indexOf('Amazon');
  console.log(amText.substring(amStart > -1 ? amStart : 0, (amStart > -1 ? amStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / CITRIX ===');
  const ct = await fetch('https://about.gitlab.com/customers/citrix/');
  const ctText = extractText(ct.body);
  const ctStart = ctText.indexOf('Citrix');
  console.log(ctText.substring(ctStart > -1 ? ctStart : 0, (ctStart > -1 ? ctStart : 0) + 3000));
}
main().catch(console.error);