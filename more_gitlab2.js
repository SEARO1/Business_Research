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
  // Try more GitLab customers that might work
  console.log('=== More GitLab (trying tech/finance names) ===');
  const gitlabSlugs = [
    'jp-morgan-chase', 'morgan-stanley', 'ubs', 'barclays', 'deutsche-bank',
    'ibm', 'intel', 'amd', 'qualcomm', 'broadcom',
    'dell', 'hp', 'lenovo', 'oracle', 'sap',
    '抵打123', 'test', 'demo', 'foo'
  ];
  for(const c of gitlabSlugs) {
    const url = `https://about.gitlab.com/customers/${c}/`;
    const r = await fetch(url);
    if(r.status === 200 && r.body.length > 50000) {
      const text = extractText(r.body);
      const hasMetrics = text.match(/\d+[%x]/) || text.match(/\d{3,}/);
      console.log(c, ':', r.status, 'Len:', r.body.length, hasMetrics ? '**METRICS**' : '');
      if(hasMetrics) {
        const idx = text.indexOf('Customer');
        console.log('  Preview:', text.substring(idx, idx + 400));
      }
    } else {
      console.log(c, ':', r.status);
    }
    await new Promise(r => setTimeout(r, 400));
  }
}
main().catch(console.error);