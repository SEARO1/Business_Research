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
  // More vendors to try
  const vendors = [
    ['https://www.twilio.com/customers/shopify', 'Twilio Shopify'],
    ['https://www.twilio.com/customers/uber', 'Twilio Uber'],
    ['https://www.twilio.com/customers/airbnb', 'Twilio Airbnb'],
    ['https://www.twilio.com/customers/slack', 'Twilio Slack'],
    ['https://www.twilio.com/customers/spotify', 'Twilio Spotify'],
    ['https://www.twilio.com/customers/lyft', 'Twilio Lyft'],
    ['https://www.twilio.com/customers/doordash', 'Twilio DoorDash'],
    ['https://www.twilio.com/customers/instacart', 'Twilio Instacart'],
    ['https://www.twilio.com/customers/glovo', 'Twilio Glovo'],
    ['https://www.twilio.com/customers/grab', 'Twilio Grab'],
    ['https://www.twilio.com/customers/gojek', 'Twilio Gojek'],
    ['https://www.twilio.com/customers/swiggy', 'Twilio Swiggy'],
    ['https://www.twilio.com/customers/zomato', 'Twilio Zomato']
  ];
  for (const [url, name] of vendors) {
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log(name.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try MuleSoft different pattern
  console.log('\n=== MULESOFT V2 ===');
  const mulesoft = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', ' instacart'];
  for (const slug of mulesoft) {
    const url = 'https://www.mulesoft.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('MULESOFT/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Freshdesk customers v3
  console.log('\n=== FRESHDESK V3 ===');
  const freshdesk = ['spotify', 'shopify', ' uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid'];
  for (const slug of freshdesk) {
    const url = 'https://support.freshdesk.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('FD3/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Typeform customers
  console.log('\n=== TYPEFORM ===');
  const typeform = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  for (const slug of typeform) {
    const url = 'https://www.typeform.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('TF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Try Hotjar customers
  console.log('\n=== HOTJAR ===');
  const hotjar = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'lyft', 'groupon'];
  for (const slug of hotjar) {
    const url = 'https://www.hotjar.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('HJ/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // FullStory customers
  console.log('\n=== FULLSTORY ===');
  const fullstory = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  for (const slug of fullstory) {
    const url = 'https://www.fullstory.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('FS/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);