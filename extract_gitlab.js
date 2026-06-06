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
    .replace(/\s+/g, ' ')
    .trim();
}
async function main() {
  // GitLab Ericsson
  console.log('=== GITLAB / ERICSSON ===');
  const ericsson = await fetch('https://about.gitlab.com/customers/ericsson/');
  const eText = extractText(ericsson.body);
  console.log(eText.substring(0, 3500));
  
  await new Promise(r => setTimeout(r, 500));
  
  // GitLab Siemens
  console.log('\n\n=== GITLAB / SIEMENS ===');
  const siemens = await fetch('https://about.gitlab.com/customers/siemens/');
  const sText = extractText(siemens.body);
  console.log(sText.substring(0, 3500));
}
main().catch(console.error);