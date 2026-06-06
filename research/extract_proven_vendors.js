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
  // More PagerDuty customers
  const pd = ['shopify', 'twilio', 'dropbox', 'zendesk', 'fox', 'draftkings', 'vodafone', 'australian-bank', 'tui', 'lyft', 'groupon', 'zendesk', 'convercent', 'patreon', 'trulia', ' ServiceNow', 'tableau', 'autodesk'];
  console.log('=== MORE PAGERDUTY ===');
  for (const slug of pd) {
    const url = 'https://www.pagerduty.com/customer/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('PD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // More Cloudflare customers
  const cf = ['discord', 'shopify', 'stack-overflow', 'canva', 'skyscanner', 'kaizen-gaming', 'intility', 'nyc-gov', 'anadolu-efes', 'fullscript', '台湾-medical', 'tightknit', ' Hutchison', ' Veritas', ' MongoDB', ' Siemens', ' SAP', ' Bloomberg', ' Intuit', ' Shoplazza'];
  console.log('\n=== MORE CLOUDFLARE ===');
  for (const slug of cf) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Airtable case studies
  const airtable = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'lyft', 'notion', 'figma', 'canva', 'dropbox', 'box'];
  console.log('\n=== AIRTABLE ===');
  for (const slug of airtable) {
    const url = 'https://www.airtable.com/customer-stories/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('AT/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Zapier case studies
  const zapier = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'lyft', 'notion', 'figma', 'canva'];
  console.log('\n=== ZAPIER ===');
  for (const slug of zapier) {
    const url = 'https://zapier.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('ZAP/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Calendly case studies
  const calendly = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  console.log('\n=== CALENDLY ===');
  for (const slug of calendly) {
    const url = 'https://calendly.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CAL/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Zoom revenue impact
  const zoom = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  console.log('\n=== ZOOM CUSTOMERS ===');
  for (const slug of zoom) {
    const url = 'https://zoom.us/customer/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('ZM/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);