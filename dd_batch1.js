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
  console.log('=== DATADOG / AIRBNB ===');
  const ab = await fetch('https://www.datadoghq.com/case-study/airbnb/');
  const abText = extractText(ab.body);
  const abStart = abText.indexOf('Airbnb');
  console.log(abText.substring(abStart > -1 ? abStart : 0, (abStart > -1 ? abStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== DATADOG / SPOTIFY ===');
  const sp = await fetch('https://www.datadoghq.com/case-study/spotify/');
  const spText = extractText(sp.body);
  const spStart = spText.indexOf('Spotify');
  console.log(spText.substring(spStart > -1 ? spStart : 0, (spStart > -1 ? spStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== DATADOG / SHUTTERSTOCK ===');
  const sh = await fetch('https://www.datadoghq.com/case-study/shutterstock/');
  const shText = extractText(sh.body);
  const shStart = shText.indexOf('Shutterstock');
  console.log(shText.substring(shStart > -1 ? shStart : 0, (shStart > -1 ? shStart : 0) + 3000));
}
main().catch(console.error);