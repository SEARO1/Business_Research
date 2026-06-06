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
  // More Cloudflare slugs from known patterns
  const cfSlugs = [
    'shopify', 'discord', 'canva', 'hubspot', 'skyscanner', 'kaizen-gaming', 'intility', 'anadolu-efes', 'fullscript', 'tightknit', 'mitsubishi-gas-chemical',
    'epic-games', 'riot-games', 'ea-games', 'activision', 'ubisoft', 'valve', 'blizzard',
    'kraken', 'binance', 'coinbase', 'crypto-com', 'blockchain',
    'datadog', 'newrelic', 'dynatrace', 'splunk', 'sumo-logic',
    'launchdarkly', 'split', 'optimizely', 'mutiny',
    'contentful', 'prismic', 'storyblok', 'sanity', 'strapi',
    'vercel', 'netlify', 'render', 'railway', 'fly-io',
    'github', 'gitlab', 'bitbucket', 'jira', 'confluence',
    'monday-com', 'notion', 'linear', 'figma', 'miro', 'loom', 'trello', 'asana',
    'klarna', 'shopify-payments', 'stripe', 'braintree', 'adyen',
    'github-actions', 'gitlab-ci', 'bitbucket-pipelines', 'azure-devops',
    'terraform', 'ansible', 'chef', 'puppet', 'vault',
    'kubernetes', 'docker', 'helm', 'argocd', 'flux'
  ];
  console.log('=== CLOUDFLARE SLUGS ===');
  for (const slug of cfSlugs) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-').replace(/\'/g, '') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    if (res.status === 200 && t.length > 2000) {
      console.log('*** CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    }
    await new Promise(r => setTimeout(r, 100));
  }
  console.log('Done');
}
main().catch(console.error);