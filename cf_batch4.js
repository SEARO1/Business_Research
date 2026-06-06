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
  console.log('=== CLOUDFLARE / BABBEL ===');
  const bb = await fetch('https://www.cloudflare.com/case-studies/babbel/');
  const bbText = extractText(bb.body);
  const bbStart = bbText.indexOf('Babbel');
  console.log(bbText.substring(bbStart > -1 ? bbStart : 0, (bbStart > -1 ? bbStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CLOUDFLARE / INTERCOM ===');
  const ic = await fetch('https://www.cloudflare.com/case-studies/intercom/');
  const icText = extractText(ic.body);
  const icStart = icText.indexOf('Intercom');
  console.log(icText.substring(icStart > -1 ? icStart : 0, (icStart > -1 ? icStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CLOUDFLARE / SLACK ===');
  const sl = await fetch('https://www.cloudflare.com/case-studies/slack/');
  const slText = extractText(sl.body);
  const slStart = slText.indexOf('Slack');
  console.log(slText.substring(slStart > -1 ? slStart : 0, (slStart > -1 ? slStart : 0) + 3000));
}
main().catch(console.error);