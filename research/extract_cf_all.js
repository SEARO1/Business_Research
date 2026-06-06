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
  // Try specific Cloudflare slugs
  const slugs = [
    'hutchison-telecom', 'mitsubishi-gas-chemical', 'nyc-government', 'taiwan-medical',
    'huawei', 'alibaba', 'shopify', 'discord', 'canva', 'skyscanner', 'hubspot',
    'datadog', 'vercel', 'netlify', 'fastly', 'cloudflare', 'akamai', 'fastly',
    'mongodb', 'atlassian', 'github', 'gitlab', 'jira', 'confluence', 'slack',
    'zoom', 'twilio', 'stripe', 'shopify', 'airbnb', 'uber', 'lyft', 'doordash',
    'instacart', 'glovo', 'deliveroo', 'grab', 'gojek', 'swiggy', 'zomato',
    'epic-games', 'fortnite', 'roblox', 'minecraft', ' EA', 'activision', 'ubisoft',
    'nintendo', 'sony', 'microsoft', 'xbox', 'playstation', 'steam', 'epic',
    'riot-games', 'valve', 'blizzard', 'bungie', 'nexon', ' NCSoft',
    'kraken', 'binance', 'coinbase', 'crypto.com', 'blockchain.com', 'square', 'paypal', 'stripe',
    'shopify-payments', 'amazon-pay', 'google-pay', 'apple-pay', ' venmo', 'cashapp',
    'datadog', 'newrelic', 'dynatrace', 'splunk', 'sumologic', 'loggly', 'papertrail',
    'launchdarkly', 'split', 'optimizely', 'adobe-target', 'optimizely',
    'contentful', 'prismic', 'storyblok', 'sanity', 'strapi', 'keystone', 'directus',
    'strapi', 'ghost', 'wordpress', 'wix', 'squarespace', 'webflow', 'framer',
    'shopify', 'magento', 'woocommerce', 'bigcommerce', 'salesforce-commerce', 'hybris',
    'episerver', 'commerce-tools', 'commercetools', 'saleor', 'shogun', 'pagefly'
  ];
  for (const slug of slugs) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-').replace(/\'/g, '') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    if (res.status === 200 && t.length > 2000) {
      console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length + ' ***');
    } else {
      console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    }
    await new Promise(r => setTimeout(r, 200));
  }
}
main().catch(console.error);