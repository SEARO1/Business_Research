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
  // Known GitLab customers that should work
  const gitlabSlugs = ['sap', 'bosch', 'schneider-electric', 'philips', 'siemens', 'ABB', ' Schneider', ' Alvarez', 'Mitsubishi', 'hitachi', 'panasonic', 'toshiba', 'canon', 'epson', ' Sony', 'panasonic', 'mitsubishi-electric', 'john-deere', 'CAT', 'caterpillar', 'komatsu', 'hyundai', 'kia', 'toyota', 'honda', 'ford', 'gm', 'fiat', 'bmw', 'audi', 'mercedes', 'vw'];
  console.log('=== GITLAB KNOWN ===');
  for (const slug of gitlabSlugs) {
    const url = 'https://about.gitlab.com/customers/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('GL/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try specific known CircleCI case studies  
  const circleciSlugs = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'underarmour', 'groupon', 'etsy', 'airbnb', 'doordash', 'instacart', 'postmates', 'deliveroo', 'glovo', 'uber-eats'];
  console.log('\n=== CIRCLECI GENERIC ===');
  for (const slug of circleciSlugs) {
    const url = 'https://circleci.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CI/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try specific known Cloudflare case studies
  const cloudflareSlugs = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  console.log('\n=== CLOUDFLARE GENERIC ===');
  for (const slug of cloudflareSlugs) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);