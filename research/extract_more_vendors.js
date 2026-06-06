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
  // More PagerDuty customers
  const pd = ['servicenow', 'tableau', 'autodesk', 'servicenow', 'slack', 'zoom', 'spotify', 'deezer', 'calm', 'headspace', 'calendly', 'dock', 'notion', 'figma', 'miro', 'invision', 'zeplin', 'framer', 'webflow', 'wix'];
  console.log('=== MORE PAGERDUTY ===');
  for (const slug of pd) {
    const res = await fetch('https://www.pagerduty.com/customer/' + slug + '/');
    const t = extractText(res.body);
    console.log('PD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // More Linear customers
  console.log('\n=== MORE LINEAR ===');
  const ln = ['uber', 'lyft', 'airbnb', 'stripe', 'plaid', 'rippling', 'deel', 'remote', 'workiva', 'coinbase', 'binance', 'crypto.com', 'dapper', 'figma', 'Patreon', 'duolingo', 'calendly', 'notion', 'vercel', 'netlify'];
  for (const slug of ln) {
    const res = await fetch('https://linear.app/customers/' + slug.toLowerCase().replace(/ /g, '-'));
    const t = extractText(res.body);
    console.log('LN/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Figma case studies
  console.log('\n=== FIGMA ===');
  const fg = ['amazon', 'google', 'facebook', 'netflix', 'spotify', 'uber', 'airbnb', 'stripe', 'shopify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'deloitte', 'teams', 'microsoft', 'aws', 'cloudflare', 'github'];
  for (const slug of fg) {
    const res = await fetch('https://www.figma.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-'));
    const t = extractText(res.body);
    console.log('FG/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Miro case studies
  console.log('\n=== MIRO ===');
  const mr = ['shopify', 'netflix', 'spotify', 'uber', 'deloitte', 'nike', 'patagonia', 'usertesting', 'invoca', 'cognitivescale', 'qVC', 'virgin', 'marriott', 'nissan', 'humans'];
  for (const slug of mr) {
    const res = await fetch('https://miro.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-'));
    const t = extractText(res.body);
    console.log('MR/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);