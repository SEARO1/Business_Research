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
  console.log('=== VERACODE / STATE_TEXAS ===');
  const vt = await fetch('https://www.veracode.com/blog/2014/08/case-study-state-texas-improves-appsec-20-people');
  const vtText = extractText(vt.body);
  const vtStart = vtText.indexOf('Texas');
  console.log(vtText.substring(vtStart > -1 ? vtStart : 0, (vtStart > -1 ? vtStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== VERACODE / LINK ===');
  const ln = await fetch('https://www.veracode.com/blog/2014/08/case-study-link-improves-appsec-10x-faster-releases');
  const lnText = extractText(ln.body);
  const lnStart = lnText.indexOf('Link');
  console.log(lnText.substring(lnStart > -1 ? lnStart : 0, (lnStart > -1 ? lnStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== VERACODE / SEARS ===');
  const sr = await fetch('https://www.veracode.com/blog/2014/05/case-study-sears-reduces-appsec-triage-80-percent-faster');
  const srText = extractText(sr.body);
  const srStart = srText.indexOf('Sears');
  console.log(srText.substring(srStart > -1 ? srStart : 0, (srStart > -1 ? srStart : 0) + 3000));
}
main().catch(console.error);