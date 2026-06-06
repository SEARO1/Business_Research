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
  console.log('=== GITLAB / CHERRY ===');
  const ch = await fetch('https://about.gitlab.com/customers/cherry/');
  const chText = extractText(ch.body);
  const chStart = chText.indexOf('Cherry');
  console.log(chText.substring(chStart > -1 ? chStart : 0, (chStart > -1 ? chStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / ANALYTICS ===');
  const an = await fetch('https://about.gitlab.com/customers/analytics/');
  const anText = extractText(an.body);
  const anStart = anText.indexOf('Analytics');
  console.log(anText.substring(anStart > -1 ? anStart : 0, (anStart > -1 ? anStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== GITLAB / CONTIXS ===');
  const cx = await fetch('https://about.gitlab.com/customers/contixs/');
  const cxText = extractText(cx.body);
  const cxStart = cxText.indexOf('Contixs');
  console.log(cxText.substring(cxStart > -1 ? cxStart : 0, (cxStart > -1 ? cxStart : 0) + 3000));
}
main().catch(console.error);