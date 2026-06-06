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
  const slugs = ['sainsburys', 'travelport', 'bwtech', 'eventbrite', 'fabrick', 'groupon', '机溎', 'kaufland', 'lenovo', 'magellan', 'ncr', 'netflix', 'nvidia', 'pga', 'philips', 'rosenberger', 'sap', 'schneider-electric', 'siemens', 'st高通'];
  for (const slug of slugs) {
    const url = 'https://newrelic.com/customers/' + slug;
    const res = await fetch(url);
    const t = extractText(res.body);
    const start = t.indexOf(slug.split(/[-\/]/)[0].charAt(0).toUpperCase() + slug.split(/[-\/]/)[0].slice(1));
    console.log('=== ' + slug.toUpperCase() + ' === STATUS:' + res.status + ' LEN:' + t.length);
    if (res.status === 200 && t.length > 500) {
      console.log(t.substring(start > -1 ? start : 0, start > -1 ? start + 2000 : 2000));
    } else {
      console.log('404/EMPTY');
    }
    await new Promise(r => setTimeout(r, 400));
  }
}
main().catch(console.error);