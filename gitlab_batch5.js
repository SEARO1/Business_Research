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
  console.log('=== GITLAB / DATadog ===');
  const dd = await fetch('https://about.gitlab.com/customers/datadog/');
  const ddText = extractText(dd.body);
  const ddStart = ddText.indexOf('Datadog');
  console.log(ddText.substring(ddStart > -1 ? ddStart : 0, (ddStart > -1 ? ddStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / VERIZON ===');
  const vz = await fetch('https://about.gitlab.com/customers/verizon/');
  const vzText = extractText(vz.body);
  const vzStart = vzText.indexOf('Verizon');
  console.log(vzText.substring(vzStart > -1 ? vzStart : 0, (vzStart > -1 ? vzStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / BNP ===');
  const bn = await fetch('https://about.gitlab.com/customers/bnp/');
  const bnText = extractText(bn.body);
  const bnStart = bnText.indexOf('BNP');
  console.log(bnText.substring(bnStart > -1 ? bnStart : 0, (bnStart > -1 ? bnStart : 0) + 3000));
}
main().catch(console.error);