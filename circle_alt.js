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
  // Try CircleCI alternative URL patterns
  console.log('=== CircleCI Alternative Patterns ===');
  const circleciAlt = [
    'https://circleci.com/customers/eventbrite/',
    'https://circleci.com/blog/case-study/eventbrite',
    'https://circleci.com/company/customers'
  ];
  for(const url of circleciAlt) {
    const r = await fetch(url);
    console.log(url.replace('https://circleci.com/',''), ':', r.status, 'Len:', r.body.length);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try new GitLab customers - from the customers index we found
  console.log('\n=== More GitLab Customers ===');
  const gitlabSlugs = ['抵打', 'test-customer', 'foo-bar', '抵打123'];
  for(const c of gitlabSlugs) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try Snyk customer pages (we know these work)
  console.log('\n=== Snyk Customers (Known Working) ===');
  const snykSlugs = ['zanui', 'babbel', 'citrix', 'shopify', 'automattic'];
  for(const c of snykSlugs) {
    const url = `https://snyk.io/customers/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 30000) {
      console.log(c, ':', r.status, 'Len:', r.body.length);
      const text = extractText(r.body);
      if(text.match(/\d+[%x]/) || text.match(/\d{3,}/)) {
        console.log('  ** HAS METRICS **');
      }
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
}
main().catch(console.error);