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
  console.log('=== CIRCLECI / CONTENTFUL ===');
  const cf = await fetch('https://circleci.com/case-studies/contentful/');
  const cfText = extractText(cf.body);
  const cfIdx = cfText.indexOf('Contentful');
  console.log(cfText.substring(cfIdx > -1 ? cfIdx : 0, (cfIdx > -1 ? cfIdx : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / LAUNCHDARKLY ===');
  const ld = await fetch('https://circleci.com/case-studies/launchdarkly/');
  const ldText = extractText(ld.body);
  const ldIdx = ldText.indexOf('LaunchDarkly');
  console.log(ldText.substring(ldIdx > -1 ? ldIdx : 0, (ldIdx > -1 ? ldIdx : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / OUTREACH ===');
  const ou = await fetch('https://circleci.com/case-studies/outreach/');
  const ouText = extractText(ou.body);
  const ouIdx = ouText.indexOf('Outreach');
  console.log(ouText.substring(ouIdx > -1 ? ouIdx : 0, (ouIdx > -1 ? ouIdx : 0) + 3000));
}
main().catch(console.error);