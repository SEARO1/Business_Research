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
  console.log('=== GITLAB / CERN ===');
  const cn = await fetch('https://about.gitlab.com/customers/cern/');
  const cnText = extractText(cn.body);
  const cnStart = cnText.indexOf('CERN');
  console.log(cnText.substring(cnStart > -1 ? cnStart : 0, (cnStart > -1 ? cnStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / ALIBABA ===');
  const ab = await fetch('https://about.gitlab.com/customers/alibaba/');
  const abText = extractText(ab.body);
  const abStart = abText.indexOf('Alibaba');
  console.log(abText.substring(abStart > -1 ? abStart : 0, (abStart > -1 ? abStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / NASA ===');
  const na = await fetch('https://about.gitlab.com/customers/nasa/');
  const naText = extractText(na.body);
  const naStart = naText.indexOf('NASA');
  console.log(naText.substring(naStart > -1 ? naStart : 0, (naStart > -1 ? naStart : 0) + 3000));
}
main().catch(console.error);