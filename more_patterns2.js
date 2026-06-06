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
  // Try CircleCI blog case studies with full URL
  console.log('=== CircleCI Blog Case Studies Full ===');
  const circleciBlog = [
    'https://circleci.com/blog/circleci-vs-jenkins-the-good-bad-ugly/',
    'https://circleci.com/blog/devops-cio-survey/',
    'https://circleci.com/blog/continuous-integration-vs-continuous-deployment/',
    'https://circleci.com/blog/why-continuous-integration-is-named-what-it-is/'
  ];
  for(const url of circleciBlog) {
    const r = await fetch(url);
    const name = url.split('/').pop().replace(/-/g, ' ');
    console.log(name.substring(0, 40), ':', r.status, 'Len:', r.body.length);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try more GitLab customers from their main page (different from /customers/)
  console.log('\n=== GitLab More Customers ===');
  const gitlabSlugs = ['抵打', '抵打2', '抵打3'];
  for(const c of gitlabSlugs) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r = await fetch(url);
    console.log(c, ':', r.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try different Sumo Logic URL
  console.log('\n=== Sumo Logic Try ===');
  const slUrls = [
    'https://www.sumologic.com/solutions/business-challenges/devops/',
    'https://www.sumologic.com/blog/case-studies/'
  ];
  for(const url of slUrls) {
    const r = await fetch(url);
    console.log(url.replace('https://www.sumologic.com/',''), ':', r.status);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  // Try LaunchDarkly blog
  console.log('\n=== LaunchDarkly Blog ===');
  const ld = await fetch('https://launchdarkly.com/blog/');
  console.log('Status:', ld.status);
  
  // Try PagerDuty customers
  console.log('\n=== PagerDuty Customers ===');
  const pd = await fetch('https://www.pagerduty.com/customers/');
  console.log('Status:', pd.status, 'Len:', pd.body.length);
}
main().catch(console.error);