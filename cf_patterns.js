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
  // Try different Cloudflare case study patterns
  console.log('=== Cloudflare Different Patterns ===');
  const cfPatterns = [
    'https://www.cloudflare.com/case-studies/godaddy/',
    'https://www.cloudflare.com/case-studies/groupon/',
    'https://www.cloudflare.com/case-studies/ignition/',
    'https://www.cloudflare.com/case-studies/koch/',
    'https://www.cloudflare.com/case-studies/cox/',
    'https://www.cloudflare.com/case-studies/marketspot/'
  ];
  for(const url of cfPatterns) {
    const c = url.split('/')[4];
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 50000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      console.log(c, ':', r.status, 'Len:', r.body.length, hasMetrics ? '**METRICS**' : '');
      if(hasMetrics) {
        const idx = text.indexOf('We') > -1 ? text.indexOf('We') : text.indexOf('The');
        console.log('  Preview:', text.substring(idx > -1 ? idx : 0, (idx > -1 ? idx : 0) + 300));
      }
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try Snyk customer stories
  console.log('\n=== Snyk Customer Stories ===');
  const snyk = await fetch('https://snyk.io/customer-stories/');
  console.log('Status:', snyk.status, 'Len:', snyk.body.length);
  if(snyk.status === 200) {
    const text = extractText(snyk.body);
    // Look for story links
    const storyRe = /\/customer-stories\/([a-z0-9-]+)/gi;
    const seen = new Set();
    let m;
    while((m = storyRe.exec(snyk.body)) !== null) {
      if(!seen.has(m[1])) { seen.add(m[1]); }
    }
    console.log('Story slugs:', [...seen].slice(0, 20));
  }
}
main().catch(console.error);