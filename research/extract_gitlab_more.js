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
  // More GitLab customer slugs
  const gitlabSlugs = [
    'siemens', 'cern', 'nasa', 'gm', 'toyota', 'ford', 'bmw', 'audi', 'vw', 'mercedes',
    'goldman-sachs', 'jpmorgan', 'goldman', 'bank-of-america', 'wells-fargo',
    'goldman-sachs', 'citi', 'hsbc', 'barclays', 'deutsche-bank',
    'shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'instacart',
    'epic-games', 'ea', 'activision', 'ubisoft', 'riot-games', 'blizzard',
    'tesla', 'spacex', 'amazon', 'microsoft', 'google', 'apple', 'meta',
    'adobe', 'autodesk', 'unity', 'unreal', 'canva', 'figma',
    'shopify', 'magento', 'woocommerce', 'bigcommerce', 'lightspeed',
    'datadog', 'newrelic', 'dynatrace', 'splunk', 'sumo-logic',
    'mongodb', 'elasticsearch', 'redis', 'postgresql', 'mysql',
    'ansible', 'chef', 'puppet', 'terraform', 'kubernetes', 'docker',
    'github', 'gitlab', 'bitbucket', 'jira', 'confluence', 'asana', 'trello'
  ];
  console.log('=== GITLAB MORE ===');
  for (const slug of gitlabSlugs) {
    const url = 'https://about.gitlab.com/customers/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    if (res.status === 200 && t.length > 2000) {
      console.log('*** GL/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    }
    await new Promise(r => setTimeout(r, 80));
  }
  console.log('Done');
}
main().catch(console.error);