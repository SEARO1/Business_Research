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
  // Try GitLab customers page to find more slugs
  console.log('=== GitLab Customers Index ===');
  const r = await fetch('https://about.gitlab.com/customers/');
  console.log('Status:', r.status, 'Len:', r.body.length);
  const text = extractText(r.body);
  
  // Find customer links
  const linkRe = /\/customers\/([a-z0-9-]+)\//gi;
  const seen = new Set();
  let m;
  while((m = linkRe.exec(r.body)) !== null) {
    if(!seen.has(m[1])) { seen.add(m[1]); }
  }
  console.log('Customer slugs found:', [...seen].slice(0, 50));
  
  // Try more Vanta customer pages
  console.log('\n=== Vanta Customer Stories ===');
  const vantaSlugs = [
    'stripe', 'deloitte', 'greylock', 'sequoia', 'lattice',
    'notion', 'figma', 'canva', 'dropbox', 'zoom'
  ];
  for(const c of vantaSlugs) {
    const url = `https://www.vanta.com/customers/${c}/`;
    const vr = await fetch(url);
    console.log(c, ':', vr.status, 'Len:', vr.body.length);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try different Datadog pattern
  console.log('\n=== Datadog Try New Patterns ===');
  const ddUrls = [
    'https://www.datadoghq.com/about/case-studies/',
    'https://www.datadoghq.com/blog/case-studies/',
    'https://www.datadoghq.com/resources/case-studies/'
  ];
  for(const url of ddUrls) {
    const dd = await fetch(url);
    console.log(url.replace('https://www.datadoghq.com/',''), ':', dd.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
}
main().catch(console.error);