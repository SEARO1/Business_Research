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
  // Try Datadog different URL patterns
  console.log('=== Datadog Try Different URLs ===');
  const ddUrls = [
    'https://www.datadoghq.com/customers/porsche-informatik/',
    'https://www.datadoghq.com/about/customers/porsche-informatik',
    'https://www.datadoghq.com/us en/customers/porsche-informatik',
    'https://www.datadoghq.eu/customers/porsche-informatik/',
    'https://www.datadoghq.com/about/customers/',
    'https://www.datadoghq.com/solutions/case-studies/'
  ];
  for(const url of ddUrls) {
    const r = await fetch(url);
    console.log(url.replace('https://www.datadoghq.com/',''), ':', r.status, 'Len:', r.body.length);
    await new Promise(res => setTimeout(res, 400));
  }
  
  // Try Cloudflare more case studies
  console.log('\n=== Cloudflare More ===');
  const cfSlugs = [
    'dell', 'shopify', 'hubspot', 'slack', 'spotify',
    'reddit', 'medium', 'airbnb', 'uber', 'lyft'
  ];
  for(const c of cfSlugs) {
    const url = `https://www.cloudflare.com/case-studies/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status);
    await new Promise(res => setTimeout(r, 400));
  }
  
  // Try Figma enterprise
  console.log('\n=== Figma Enterprise ===');
  const figma = await fetch('https://www.figma.com/enterprise/');
  console.log('Enterprise page:', figma.status, 'Len:', figma.body.length);
}
main().catch(console.error);