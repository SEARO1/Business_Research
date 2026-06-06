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
  // More Cloudflare case studies
  const cf = ['datadog', 'vercel', 'netlify', 'shopify', 'discord', 'uber', 'doordash', 'instacart', 'glovo', 'deliveroo', 'grab', 'gojek', 'swiggy', 'zomato', 'lyft', 'uber', 'airbnb', 'booking.com', 'hotels.com', 'expedia'];
  console.log('=== MORE CLOUDFLARE ===');
  for (const slug of cf) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // More GitLab customers - try variations
  const gl = ['alstom', ' Bombardier', ' Schaeffler', ' BBVA', ' CaixaBank', ' Santander', ' ing', 'ING', ' BNP Paribas', 'societe-generale', ' AXA', ' Allianz', ' Generali', ' Zurich', ' Swiss Re', ' Munich Re', ' Hannover Re', ' Willis Towers Watson', ' Aon', ' Marsh'];
  console.log('\n=== MORE GITLAB ===');
  for (const slug of gl) {
    const url = 'https://about.gitlab.com/customers/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('GL/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Datadog customers
  const dd = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'lyft'];
  console.log('\n=== DATADOG GENERIC ===');
  for (const slug of dd) {
    const url = 'https://www.datadoghq.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('DD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);