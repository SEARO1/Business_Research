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
  console.log('=== AWS / COUPA ===');
  const cp = await fetch('https://aws.amazon.com/solutions/case-studies/coupa-amazon-quicksight/');
  const cpText = extractText(cp.body);
  console.log(cpText.substring(0, 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== AWS / FENDER ===');
  const fd = await fetch('https://aws.amazon.com/solutions/case-studies/fender-digital/');
  const fdText = extractText(fd.body);
  console.log(fdText.substring(0, 4000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== AWS / IAG ===');
  const ia = await fetch('https://aws.amazon.com/solutions/case-studies/insurance-australia-group/');
  const iaText = extractText(ia.body);
  console.log(iaText.substring(0, 4000));
}
main().catch(console.error);