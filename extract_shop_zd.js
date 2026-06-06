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
  console.log('=== CLOUDFLARE / SHOPIFY ===');
  const shop = await fetch('https://www.cloudflare.com/case-studies/shopify/');
  const shopText = extractText(shop.body);
  const shopIdx = shopText.indexOf('Shopify');
  console.log(shopText.substring(shopIdx, shopIdx + 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CLOUDFLARE / ZENDESK ===');
  const zd = await fetch('https://www.cloudflare.com/case-studies/zendesk/');
  const zdText = extractText(zd.body);
  const zdIdx = zdText.indexOf('Zendesk');
  console.log(zdText.substring(zdIdx, zdIdx + 4000));
}
main().catch(console.error);