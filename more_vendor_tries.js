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
  // Try more GitLab customers from index
  console.log('=== GitLab More From Index ===');
  const gitlabSlugs = ['抵打', 'test', 'demo', 'foo'];
  for(const c of gitlabSlugs) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try Datadog via different approach - blog posts
  console.log('\n=== Datadog Blog Case Studies ===');
  const ddBlog = await fetch('https://www.datadoghq.com/blog/category/case-studies/');
  console.log('Status:', ddBlog.status, 'Len:', ddBlog.body.length);
  
  // Try Veracode case studies
  console.log('\n=== Veracode Case Studies ===');
  const vc = await fetch('https://www.veracode.com/case-studies');
  console.log('Status:', vc.status, 'Len:', vc.body.length);
  
  // Try Snyk customers index
  console.log('\n=== Snyk Customers Index ===');
  const snyk = await fetch('https://snyk.io/customers/');
  console.log('Status:', snyk.status, 'Len:', snyk.body.length);
  if(snyk.status === 200) {
    const text = extractText(snyk.body);
    // Find customer names
    const names = text.match(/[A-Z][a-z]+ [A-Z][a-z]+/g) || [];
    console.log('Names found:', [...new Set(names)].slice(0, 30));
  }
  
  // Try Checkmarx customers
  console.log('\n=== Checkmarx Customers ===');
  const cx = await fetch('https://checkmarx.com/customer-success/');
  console.log('Status:', cx.status, 'Len:', cx.body.length);
}
main().catch(console.error);