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
  console.log('=== NEW RELIC / VERIZON ===');
  const v = await fetch('https://newrelic.com/customers/verizon');
  const vText = extractText(v.body);
  const vIdx = vText.indexOf('Verizon');
  console.log(vText.substring(vIdx > -1 ? vIdx : 0, (vIdx > -1 ? vIdx : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== NEW RELIC / TOYOTA ===');
  const t = await fetch('https://newrelic.com/customers/toyota');
  const tText = extractText(t.body);
  const tIdx = tText.indexOf('Toyota');
  console.log(tText.substring(tIdx > -1 ? tIdx : 0, (tIdx > -1 ? tIdx : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== NEW RELIC / MERCADOLIBRE ===');
  const m = await fetch('https://newrelic.com/customers/mercadolibre');
  const mText = extractText(m.body);
  const mIdx = mText.indexOf('Mercado');
  console.log(mText.substring(mIdx > -1 ? mIdx : 0, (mIdx > -1 ? mIdx : 0) + 3000));
}
main().catch(console.error);