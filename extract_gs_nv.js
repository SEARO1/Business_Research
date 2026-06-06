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
    .replace(/\s+/g, ' ')
    .trim();
}
async function main() {
  console.log('=== GITLAB / GOLDMAN SACHS ===');
  const gs = await fetch('https://about.gitlab.com/customers/goldman-sachs/');
  const gsText = extractText(gs.body);
  const gsIdx = gsText.indexOf('Goldman Sachs');
  console.log(gsText.substring(gsIdx, gsIdx + 3500));
  
  await new Promise(r => setTimeout(r, 500));
  
  console.log('\n\n=== GITLAB / NVIDIA ===');
  const nv = await fetch('https://about.gitlab.com/customers/nvidia/');
  const nvText = extractText(nv.body);
  const nvIdx = nvText.indexOf('Nvidia');
  console.log(nvText.substring(nvIdx, nvIdx + 3500));
}
main().catch(console.error);