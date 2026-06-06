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
    'https://linear.app/customers/coinbase',
    'https://linear.app/customers/remote'
  ];
  const names = ['Coinbase', 'Remote'];
  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const t = extractText(res.body);
    const start = t.indexOf(names[i].split(' ')[0]);
    console.log('\n=== LINEAR/' + names[i].toUpperCase() + ' === STATUS:' + res.status + ' LEN:' + t.length);
    if (res.status === 200 && t.length > 500) {
      console.log(t.substring(start > -1 ? start : 0, start > -1 ? start + 4000 : 4000));
    } else {
      console.log('404/EMPTY');
    }
    await new Promise(r => setTimeout(r, 400));
  }
}
main().catch(console.error);