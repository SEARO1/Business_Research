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
  // More Cloudflare slugs - gaming, fintech, health, crypto, etc
  const slugs = [
    'epic-games', 'riot-games', 'valve', 'blizzard-games', 'bungie', 'nexon', 'ncsoft',
    'roblox', 'ea-games', 'activision-blizzard', 'ubisoft-games', 'sony-playstation', 'nintendo',
    'kraken', 'binance', 'coinbase', 'crypto-com', 'blockchain', 'square', 'paypal', 'stripe',
    'shopify-payments', 'amazon-pay', 'google-pay', 'apple-pay', 'venmo', 'cash-app',
    'datadog', 'newrelic', 'dynatrace', 'splunk', 'sumo-logic', 'loggly', 'papertrail',
    'launchdarkly', 'split', 'optimizely', 'adobe-target',
    'contentful', 'prismic', 'storyblok', 'sanity', 'strapi', 'keystone', 'directus',
    'ghost', 'wordpress', 'wix', 'squarespace', 'webflow', 'framer',
    'magento', 'woocommerce', 'bigcommerce', 'hybris', 'episerver',
    'commercetools', 'saleor', 'shogun', 'pagefly',
    'hubspot', 'marketo', 'pardot', 'eloqua', 'salesforce-marketing',
    'klaviyo', 'mailchimp', 'sendgrid', 'postmark', 'mandrill', 'mailgun', 'sparkpost',
    'twilio', 'vonage', 'nexmo', 'messagebird', 'plivo', 'bandwidth', 'telnyx',
    'stripe', 'braintree', 'adyen', 'checkout-com', 'worldpay', 'viva-wallet',
    'shopify', 'magento', 'bigcommerce', 'lightspeed', 'square', 'toast', 'clover', 'vend',
    'shopify-plus', 'shopify-flow', 'shopify-functions', 'shopify-oxygen',
    'datadog', 'dynatrace', 'new-relic', 'appdynamics', 'dynatrace', 'prometheus', 'grafana',
    'launchdarkly', 'split', 'flagsmith', 'growthbook', 'optimizely',
    'github-actions', 'gitlab-ci', 'bitbucket-pipelines', 'azure-devops', 'jenkins',
    'terraform', 'ansible', 'chef', 'puppet', 'vault', 'consul', 'nomad',
    'kubernetes', 'docker', 'helm', 'argocd', 'flux', 'tekton', 'github-actions'
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
  console.log('Done');
}
main().catch(console.error);