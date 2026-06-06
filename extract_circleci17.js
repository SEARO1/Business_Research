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
  console.log('=== CIRCLECI / CLOUDFORTRESS ===');
  const cf = await fetch('https://circleci.com/case-studies/cloudfortress/');
  const cfText = extractText(cf.body);
  const cfStart = cfText.indexOf('Cloud');
  console.log(cfText.substring(cfStart > -1 ? cfStart : 0, (cfStart > -1 ? cfStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / COMPLYEASE ===');
  const ce = await fetch('https://circleci.com/case-studies/complyease/');
  const ceText = extractText(ce.body);
  const ceStart = ceText.indexOf('Comply');
  console.log(ceText.substring(ceStart > -1 ? ceStart : 0, (ceStart > -1 ? ceStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / DAWNSPRING ===');
  const ds = await fetch('https://circleci.com/case-studies/dawnspring/');
  const dsText = extractText(ds.body);
  const dsStart = dsText.indexOf('Dawn');
  console.log(dsText.substring(dsStart > -1 ? dsStart : 0, (dsStart > -1 ? dsStart : 0) + 3000));
}
main().catch(console.error);