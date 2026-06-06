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
  // More Cloudflare slugs to try
  const slugs = [
    'shopify', 'discord', 'canva', 'hubspot', 'vercel', 'netlify', 'wix', 'squarespace', 'webflow', 'framer',
    'monday-com', 'notion', 'linear', 'figma', 'miro', 'loom', 'argent', 'opensea', 'rarible',
    'klarna', 'shopify-payments', 'stripe', 'braintree', 'adyen', 'checkout-com', 'worldpay',
    'klarna', 'afterpay', 'affirm', 'sezzle', 'paypal', 'venmo', 'cash-app', 'square', 'paypal-here',
    'shopify', 'magento', 'woocommerce', 'bigcommerce', 'lightspeed', 'toast', 'clover', 'vend',
    'hubspot', 'marketo', 'pardot', 'eloqua', 'salesforce-marketing', 'mutiny', ' Optimizely',
    'launchdarkly', 'split', 'flagsmith', 'growthbook', 'harness', 'datadog', 'newrelic',
    'launchdarkly', 'split', 'flagsmith', 'growthbook',
    'shopify', 'magento', 'woocommerce', 'bigcommerce', 'hybris', 'commercetools', 'saleor',
    'vercel', 'netlify', 'render', 'railway', 'fly-io', 'heroku', 'digitalocean', 'linode',
    'aws', 'azure', 'google-cloud', 'cloudflare', 'fastly', 'akamai', 'limelight', 'cedexis'
  ];
  for (const slug of slugs) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-').replace(/\'/g, '') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    if (res.status === 200 && t.length > 2000) {
      console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length + ' ***WORKING***');
    }
    await new Promise(r => setTimeout(r, 150));
  }
  
  // Try Twilio Segment customers (different pattern)
  console.log('\n=== SEGMENT MORE ===');
  const segSlugs = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'front', 'intercom', 'zendesk', 'freshdesk', 'helpscout', 'groove', 'Kayako', 'livechat', 'olark', 'snapengage', 'pure-chat', 'chaport'];
  for (const slug of segSlugs) {
    const url = 'https://segment.com/customers/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('SEG/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 200));
  }
  
  // Try Salesforce appexchange
  console.log('\n=== SALESFORCE APPEXCHANGE ===');
  const sfSlugs = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'slack', 'zoom', 'twilio', 'segment', 'mulesoft', 'heroku'];
  for (const slug of sfSlugs) {
    const url = 'https://appexchange.salesforce.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('SF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 200));
  }
}
main().catch(console.error);