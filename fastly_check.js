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
async function main() {
  // Try Fastly customers
  console.log('=== Fastly Customers Page ===');
  const r = await fetch('https://www.fastly.com/customers');
  // Extract customer links
  const re = /href="(\/customers\/[a-z][a-z0-9-]+)">([^<]+)/gi;
  const seen = new Set();
  let m;
  while((m = re.exec(r.body)) !== null) {
    if(!seen.has(m[1])) { seen.add(m[1]); console.log(m[2].trim(), '-', m[1]); }
  }
  console.log('\n=== Fastly GitHub Page ===');
  const gh = await fetch('https://www.fastly.com/customers/github');
  console.log('Status:', gh.status, 'Length:', gh.body.length);
  // Try to extract text snippets
  const textMatch = gh.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
  textMatch.slice(0,20).forEach(t => console.log(t.replace(/<[^>]+>/g,'')));
}
main().catch(console.error);