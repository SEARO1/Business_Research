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
  console.log('=== SPLUNK / RITUAL ===');
  const rt = await fetch('https://www.splunk.com/en_us/blog/learn/rational-information-telecom-case-study.html');
  const rtText = extractText(rt.body);
  const rtStart = rtText.indexOf('Rational');
  console.log(rtText.substring(rtStart > -1 ? rtStart : 0, (rtStart > -1 ? rtStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== SPLUNK / DUNKIN ===');
  const dn = await fetch('https://www.splunk.com/en_us/blog/learn/dunkin-enjoys-speedier-resolutions-with-splunk.html');
  const dnText = extractText(dn.body);
  const dnStart = dnText.indexOf('Dunkin');
  console.log(dnText.substring(dnStart > -1 ? dnStart : 0, (dnStart > -1 ? dnStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== SPLUNK / HDFC ===');
  const hd = await fetch('https://www.splunk.com/en_us/blog/learn/hdfc-bank-gains-visibility-into-customer-experience.html');
  const hdText = extractText(hd.body);
  const hdStart = hdText.indexOf('HDFC');
  console.log(hdText.substring(hdStart > -1 ? hdStart : 0, (hdStart > -1 ? hdStart : 0) + 3000));
}
main().catch(console.error);