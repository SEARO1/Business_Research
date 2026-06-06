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
  console.log('=== SNYK / TECHNOLOGYONE ===');
  const t1 = await fetch('https://snyk.io/case-studies/technologyone/');
  const t1Text = extractText(t1.body);
  const t1Start = t1Text.indexOf('TechnologyOne');
  console.log(t1Text.substring(t1Start > -1 ? t1Start : 0, (t1Start > -1 ? t1Start : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== SNYK / SAS ===');
  const sas = await fetch('https://snyk.io/case-studies/sas/');
  const sasText = extractText(sas.body);
  const sasStart = sasText.indexOf('SAS');
  console.log(sasText.substring(sasStart > -1 ? sasStart : 0, (sasStart > -1 ? sasStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== SNYK / MOLLIE ===');
  const ml = await fetch('https://snyk.io/case-studies/mollie/');
  const mlText = extractText(ml.body);
  const mlStart = mlText.indexOf('Mollie');
  console.log(mlText.substring(mlStart > -1 ? mlStart : 0, (mlStart > -1 ? mlStart : 0) + 3000));
}
main().catch(console.error);