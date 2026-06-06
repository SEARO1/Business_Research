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
  // Try CircleCI blog case studies
  console.log('=== CircleCI Blog Case Studies ===');
  const blogUrls = [
    'https://circleci.com/blog/case-study/',
    'https://circleci.com/blog/eventbrite-case-study/',
    'https://circleci.com/blog/cruise-case-study/',
    'https://circleci.com/blog/dollar-shave-club-case-study/'
  ];
  for(const url of blogUrls) {
    const r = await fetch(url);
    console.log(url.replace('https://circleci.com/blog/',''), ':', r.status, 'Len:', r.body.length);
    if(r.status === 200 && r.body.length > 30000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      if(hasMetrics) console.log('  ** HAS METRICS **');
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try New Relic more pages
  console.log('\n=== New Relic More Pages ===');
  const nrSlugs = ['dominos', 'william-hill', 'wayfair', 'nordstrom', 'target'];
  for(const c of nrSlugs) {
    const url = `https://newrelic.com/customers/${c}`;
    const r = await fetch(url);
    console.log(c, ':', r.status, 'Len:', r.body.length);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try Datadog different patterns
  console.log('\n=== Datadog Try More ===');
  const ddUrls = [
    'https://www.datadoghq.com/about/press/case-studies/',
    'https://www.datadoghq.com/solutions/case-studies/',
    'https://www.datadoghq.com/use-cases/'
  ];
  for(const url of ddUrls) {
    const r = await fetch(url);
    console.log(url.replace('https://www.datadoghq.com/',''), ':', r.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try LaunchDarkly customers
  console.log('\n=== LaunchDarkly Customers ===');
  const ld = await fetch('https://launchdarkly.com/customers/');
  console.log('Status:', ld.status, 'Len:', ld.body.length);
  if(ld.status === 200) {
    const text = extractText(ld.body);
    const names = text.match(/[A-Z][a-z]+ [A-Z][a-z]+/g) || [];
    console.log('Company names:', [...new Set(names)].slice(0, 20));
  }
}
main().catch(console.error);