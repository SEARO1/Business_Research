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
  // Try more Cloudflare slugs to find more case studies
  const slugs = [
    'monday-com', 'notion', 'figma', 'miro', 'loom', 'trello', 'asana', 'clickup',
    'wix', 'squarespace', 'webflow', 'framer', 'webflow',
    'vercel', 'netlify', 'render', 'fly-io', 'railway',
    'shopify-plus', 'shopify-flow', 'shopify-functions',
    'klarna', 'shopify-payments', 'stripe', 'braintree', 'adyen', 'checkout-com',
    'launchdarkly', 'split', 'flagsmith', 'growthbook',
    'datadog', 'dynatrace', 'new-relic', 'appdynamics',
    'launchdarkly', 'split', 'flagsmith',
    'github-actions', 'gitlab-ci', 'bitbucket-pipelines', 'azure-devops',
    'terraform', 'ansible', 'chef', 'puppet', 'vault', 'consul',
    'kubernetes', 'docker', 'helm', 'argocd', 'flux', 'tekton',
    'hubspot', 'marketo', 'pardot', 'eloqua', 'mutiny',
    'klaviyo', 'mailchimp', 'sendgrid', 'postmark', 'mandrill',
    'twilio', 'vonage', 'nexmo', 'messagebird', 'plivo',
    'twilio', 'braintree', 'adyen', 'checkout-com', 'worldpay',
    'shopify', 'magento', 'woocommerce', 'bigcommerce', 'lightspeed', 'toast', 'clover',
    'hubspot', 'marketo', 'pardot', 'eloqua', 'mutiny', 'optimizely'
  ];
  for (const slug of slugs) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-').replace(/\'/g, '') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    if (res.status === 200 && t.length > 2000) {
      console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length + ' ***WORKING***');
    }
    await new Promise(r => setTimeout(r, 120));
  }
  
  // Try more PagerDuty slugs
  console.log('\n=== PAGERDUTY MORE ===');
  const pdSlugs = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'glovo', 'deliveroo', 'grab', 'gojek', 'swiggy', 'zomato', ' lyft', 'groupon', 'yelp', 'eventbrite', 'ticketmaster'];
  for (const slug of pdSlugs) {
    const url = 'https://www.pagerduty.com/customers/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('PD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 200));
  }
  
  // Try more Linear slugs
  console.log('\n=== LINEAR MORE ===');
  const linSlugs = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart', 'lyft', 'groupon', 'yelp', 'eventbrite', 'github', 'notion', 'figma', 'miro', 'loom'];
  for (const slug of linSlugs) {
    const url = 'https://linear.app/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('LIN/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 200));
  }
  
  // Try more HubSpot slugs
  console.log('\n=== HUBSPOT MORE ===');
  const hsSlugs = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart'];
  for (const slug of hsSlugs) {
    const url = 'https://www.hubspot.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('HS2/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 200));
  }
}
main().catch(console.error);