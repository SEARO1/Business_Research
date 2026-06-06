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
    .replace(/\s+/g, ' ')
    .trim();
}
async function main() {
  // Cloudflare case studies - try more
  console.log('=== Cloudflare More Case Studies ===');
  const cfSlugs = ['dell', 'hubspot', 'slack', 'spotify', 'reddit'];
  for(const c of cfSlugs) {
    const url = `https://www.cloudflare.com/case-studies/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status, 'Len:', r.body.length);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Try different Cloudflare URL patterns
  console.log('\n=== Cloudflare Alternative Patterns ===');
  const cfAlt = [
    'https://www.cloudflare.com/case-studies/',
    'https://www.cloudflare.com/enterprise/customers/'
  ];
  for(const url of cfAlt) {
    const r = await fetch(url);
    console.log(url.replace('https://www.cloudflare.com/',''), ':', r.status, 'Len:', r.body.length);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Try Sumo Logic customers
  console.log('\n=== Sumo Logic ===');
  const sl = await fetch('https://www.sumologic.com/customers/');
  console.log('Status:', sl.status, 'Len:', sl.body.length);
  if(sl.status === 200) {
    const text = extractText(sl.body);
    console.log('Preview:', text.substring(0, 1000));
  }
}
main().catch(console.error);