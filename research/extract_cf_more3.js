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
  const cf = ['monday-com', 'lattice', 'notion', 'linear', 'figma', 'miro', 'canva', 'loom', 'argent', 'opensea', 'rarible', 'magic-eden', 'solana', 'ethereum', 'polygon', ' avalanche', ' Chainalysis', 'Alchemy', 'QuickNode', ' Infura', 'thirdweb', ' WalletConnect', ' Lens', ' GitPOAP', 'rabbit', ' Humane', 'opa', 'C мом', ' Smartly.io', ' Supermetrics', ' Heap', ' FullStory', ' Hotjar', ' LogRocket', 'mouseflow', ' CrazyEgg', 'inspectlet', 'sessioncam'];
  console.log('=== CLOUDFLARE SAAS ===');
  for (const slug of cf) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // More PagerDuty - try variations
  const pd = ['shopify', 'twilio', 'dropbox', 'zendesk', 'fox', 'draftkings', 'vodafone', 'tui', 'australian-bank', 'servicenow', 'tableau', 'autodesk', ' ServiceNow', 'tableau', 'autodesk', 'servicenow-incident'];
  console.log('\n=== PD VARIATIONS ===');
  for (const slug of pd) {
    const url = 'https://www.pagerduty.com/customer/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('PD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Twilio customer stories
  const twilio = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'glovo', 'deliveroo', 'grab', 'gojek'];
  console.log('\n=== TWILIO CUSTOMERS ===');
  for (const slug of twilio) {
    const url = 'https://www.twilio.com/en-us/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('TW/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // SendGrid customer stories
  const sendgrid = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'yelp', 'groupon', 'Eventbrite', 'airtasker'];
  console.log('\n=== SENDGRID ===');
  for (const slug of sendgrid) {
    const url = 'https://sendgrid.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('SG/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);