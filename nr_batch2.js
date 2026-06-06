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
  console.log('=== NEWRELIC / DELIVEREO ===');
  const de = await fetch('https://newrelic.com/customers/delivereo/');
  const deText = extractText(de.body);
  console.log(deText.substring(0, 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== NEWRELIC / QWANDY ===');
  const qw = await fetch('https://newrelic.com/customers/qwandy/');
  const qwText = extractText(qw.body);
  console.log(qwText.substring(0, 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== NEWRELIC / THECHIVE ===');
  const tc = await fetch('https://newrelic.com/customers/thechive/');
  const tcText = extractText(tc.body);
  console.log(tcText.substring(0, 3000));
}
main().catch(console.error);