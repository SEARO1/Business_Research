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
  console.log('=== SENTRY / MEDIUM ===');
  const sm = await fetch('https://sentry.io/case-studies/medium/');
  const smText = extractText(sm.body);
  const smStart = smText.indexOf('Medium');
  console.log(smText.substring(smStart > -1 ? smStart : 0, (smStart > -1 ? smStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== SENTRY / DUOLINGO ===');
  const dl = await fetch('https://sentry.io/case-studies/duolingo/');
  const dlText = extractText(dl.body);
  const dlStart = dlText.indexOf('Duolingo');
  console.log(dlText.substring(dlStart > -1 ? dlStart : 0, (dlStart > -1 ? dlStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== SENTRY / UBER ===');
  const ub = await fetch('https://sentry.io/case-studies/uber/');
  const ubText = extractText(ub.body);
  const ubStart = ubText.indexOf('Uber');
  console.log(ubText.substring(ubStart > -1 ? ubStart : 0, (ubStart > -1 ? ubStart : 0) + 3000));
}
main().catch(console.error);