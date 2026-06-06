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
  const urls = [
    'https://www.pagerduty.com/customer/shopify/',
    'https://www.pagerduty.com/customer/twilio/',
    'https://www.pagerduty.com/customer/dropbox/',
    'https://www.pagerduty.com/customer/lyft/',
    'https://www.pagerduty.com/customer/groupon/',
    'https://www.pagerduty.com/customer/zendesk/',
    'https://www.pagerduty.com/customer/convercent/',
    'https://www.pagerduty.com/customer/袖?/',
    'https://www.pagerduty.com/customer/patreon/',
    'https://www.pagerduty.com/customer/trulia/'
  ];
  const names = ['Shopify', 'Twilio', 'Dropbox', 'Lyft', 'Groupon', 'Zendesk', 'Convercent', 'Patreon', 'Trulia'];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const name = names[i] || 'Unknown';
    const res = await fetch(url);
    const t = extractText(res.body);
    const start = t.indexOf(name);
    console.log('\n=== PAGERDUTY/' + name.toUpperCase() + ' === STATUS:' + res.status + ' LEN:' + t.length);
    if (res.status === 200 && t.length > 500) {
      console.log(t.substring(start > -1 ? start : 0, start > -1 ? start + 3000 : 3000));
    } else {
      console.log('404/EMPTY');
    }
    await new Promise(r => setTimeout(r, 400));
  }
}
main().catch(console.error);