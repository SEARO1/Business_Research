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
async function main() {
  // Try individual Fastly customer case study pages
  const customers = [
    'foursquare',
    'shutterstock',
    'khan-academy',
    'giphy',
    'psf',
    'bukalapak',
    'bonnier-news',
    'foxtel',
    'therealreal',
    'dreamstime'
  ];
  for(const c of customers) {
    const url = `https://www.fastly.com/customers/${c}`;
    const r = await fetch(url);
    console.log(c, ':', r.status, r.body.length);
    if(r.status === 200) {
      // Extract paragraphs
      const paras = r.body.match(/<p[^>]*>([^<]+)<\/p>/gi) || [];
      paras.slice(0,5).forEach(p => {
        const txt = p.replace(/<[^>]+>/g,'').trim();
        if(txt.length > 50) console.log('  P:', txt.substring(0,200));
      });
    }
    await new Promise(r => setTimeout(r, 500));
  }
}
main().catch(console.error);