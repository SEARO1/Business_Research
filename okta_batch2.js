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
  console.log('=== OKTA / GRANTING A PEEK ===');
  const gp = await fetch('https://www.okta.com/blog/2023/05/granting-a-peek-how-okta-and-granting-a-peek-improved-customer-experience-with-custom-identity-solutions/');
  const gpText = extractText(gp.body);
  const gpStart = gpText.indexOf('Granting');
  console.log(gpText.substring(gpStart > -1 ? gpStart : 0, (gpStart > -1 ? gpStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== OKTA / BAIN ===');
  const bn = await fetch('https://www.okta.com/blog/2022/05/bain-and-okta-bring-simplified-identity-to-enterprise/');
  const bnText = extractText(bn.body);
  const bnStart = bnText.indexOf('Bain');
  console.log(bnText.substring(bnStart > -1 ? bnStart : 0, (bnStart > -1 ? bnStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== OKTA / COGNITO ===');
  const cg = await fetch('https://www.okta.com/blog/2022/04/cognito-energizes-growth-with-okta/');
  const cgText = extractText(cg.body);
  const cgStart = cgText.indexOf('Cognito');
  console.log(cgText.substring(cgStart > -1 ? cgStart : 0, (cgStart > -1 ? cgStart : 0) + 3000));
}
main().catch(console.error);