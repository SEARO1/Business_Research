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
  const slugs = ['figma', 'stripe', 'uber', 'lyft', 'airbnb', 'notion', ' uber', 'repl.it', 'canva', 'loom', 'miro', 'mongodb', 'datadog', 'segment', 'twilio', 'plaid', 'rippling'];
  for (const slug of slugs) {
    const url = 'https://www.notion.so/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('=== NOTION/' + slug.toUpperCase() + ' === STATUS:' + res.status + ' LEN:' + t.length);
    if (res.status === 200 && t.length > 500) {
      console.log(t.substring(0, 2000));
    } else {
      console.log('404/EMPTY');
    }
    await new Promise(r => setTimeout(r, 400));
  }
}
main().catch(console.error);