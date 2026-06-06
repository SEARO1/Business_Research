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
  const cf = ['cdn', ' Workers', 'R2', 'Stream', ' Images', ' Analytics', ' Access', ' Gateway', ' Magic Transit', ' Spectrum', ' Botanique', 'Drogerie', ' Tarkett', ' Schneider', ' Electric', ' Suez', ' Veolia', 'Danone', 'Nestle', 'Unilever', 'P&G', 'L\'Oreal', 'Estee-Lauder', 'Shiseido', 'LG', 'Samsung', ' Sony', ' Panasonic', ' Toshiba', ' Hitachi', 'Mitsubishi', 'Canon', 'Epson', 'Fujifilm', 'Nikon'];
  console.log('=== CLOUDFLARE MORE2 ===');
  for (const slug of cf) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-').replace(/\'/g, '') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // More PagerDuty
  const pd = ['shopify', 'twilio', 'dropbox', 'zendesk', 'fox', 'draftkings', 'vodafone', 'australian-bank', 'tui', 'zoom', 'spotify', 'deezer', 'calm', 'headspace', 'calendly', 'dock', 'notion', 'figma', 'miro', 'invision', 'zeplin', 'framer', 'webflow', 'wix', 'squarespace', 'wix', 'godaddy', 'shopify-plus'];
  console.log('\n=== MORE PD ===');
  for (const slug of pd) {
    const url = 'https://www.pagerduty.com/customer/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('PD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try more Slack customers via different URL patterns
  const slack = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  console.log('\n=== SLACK CUSTOMERS ===');
  for (const slug of slack) {
    const url = 'https://slack.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('SLK/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Twilio Segment customers
  const seg = ['shopify', ' uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'front', 'intercom', 'zendesk', 'freshdesk', 'helpscout'];
  console.log('\n=== TWILIO SEGMENT ===');
  for (const slug of seg) {
    const url = 'https://segment.com/customers/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('SEG/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);