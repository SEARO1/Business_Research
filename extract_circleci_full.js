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
  // Contentful - find the actual case study content
  console.log('=== CONTENTFUL FULL ===');
  const cf = await fetch('https://circleci.com/case-studies/contentful/');
  const cfText = extractText(cf.body);
  // Find where the actual content starts
  const startIdx = cfText.indexOf('The headless CMS');
  if(startIdx > -1) console.log(cfText.substring(startIdx, startIdx + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // LaunchDarkly
  console.log('\n\n=== LAUNCHDARKLY FULL ===');
  const ld = await fetch('https://circleci.com/case-studies/launchdarkly/');
  const ldText = extractText(ld.body);
  const ldStart = ldText.indexOf('Founded in 2014');
  if(ldStart > -1) console.log(ldText.substring(ldStart, ldStart + 3500));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Outreach
  console.log('\n\n=== OUTREACH FULL ===');
  const ou = await fetch('https://circleci.com/case-studies/outreach/');
  const ouText = extractText(ou.body);
  const ouStart = ouText.indexOf('Outreach is a sales');
  if(ouStart > -1) console.log(ouText.substring(ouStart, ouStart + 3500));
}
main().catch(console.error);