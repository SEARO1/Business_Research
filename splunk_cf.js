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
  // Splunk customers - extract company names
  console.log('=== Splunk Customers Page ===');
  const s = await fetch('https://www.splunk.com/en_us/customers.html');
  const sText = extractText(s.body);
  
  // Find company names - look for patterns
  const names = sText.match(/[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+){0,3}/g) || [];
  const unique = [...new Set(names)].filter(n => n.length > 4 && n.length < 40);
  console.log('Company names found:', unique.slice(0, 50));
  
  // Try more Cloudflare customers
  console.log('\n=== Cloudflare More Slugs ===');
  const cfSlugs = ['cnn', 'bbc', 'bloomberg', 'espn', 'forbes', 'techcrunch', 'wired'];
  for(const c of cfSlugs) {
    const url = `https://www.cloudflare.com/case-studies/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 50000) {
      console.log(c, ':', r.status, 'Len:', r.body.length);
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      if(hasMetrics) console.log('  ** HAS METRICS **');
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try Zendesk customers
  console.log('\n=== Zendesk Customers ===');
  const zd = await fetch('https://www.zendesk.com/customer-stories/');
  console.log('Status:', zd.status, 'Len:', zd.body.length);
}
main().catch(console.error);