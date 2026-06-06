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
  // More Cloudflare customers
  const cf = ['adm', ' Moodys', ' Pearson', ' Wiley', ' Cengage', ' McGraw-Hill', 'Kaplan', ' Eventbrite', ' StubHub', ' Ticketmaster', ' SeatGeek', ' Vivid Seats', ' Gametime', ' Dice', ' Songtrac', ' TuneCore', ' DistroKid', 'CD Baby', ' Splice', ' Native Instruments', ' Output', ' Splice', ' BandLab', ' Output', 'SoundCloud', ' Audiomack', 'TRUITY', ' Betterhelp', ' Teladoc', ' MDLive', ' LiveHealth', ' Doctor on Demand', ' GoodRx', ' SingleCare', ' RxSaver', 'Honey', ' Rakuten', ' Kobo', ' Blinkist', ' Bookmate'];
  console.log('=== CLOUDFLARE MEDIA/HEALTH ===');
  for (const slug of cf) {
    const url = 'https://www.cloudflare.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-').replace(/\'/g, '') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // More PagerDuty customers - search for variations
  const pd2 = ['shopify-plus', 'shopify-inc', ' ShopifyPlus', 'shoptop', 'shopify-plus', 'twilio-inc', 'twilio-segment', 'dropbox-inc', 'zendesk-inc', 'ServiceNow-incident'];
  console.log('\n=== PD VARIATIONS2 ===');
  for (const slug of pd2) {
    const url = 'https://www.pagerduty.com/customer/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('PD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Freshservice case studies
  const freshservice = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash'];
  console.log('\n=== FRESHSERVICE ===');
  for (const slug of freshservice) {
    const url = 'https://www.freshworks.com/freshservice/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('FS/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Jira service management case studies
  const jiraSM = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash', 'atlassian'];
  console.log('\n=== JIRA SM ===');
  for (const slug of jiraSM) {
    const url = 'https://www.atlassian.com/software/jira/service-management/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('JSM/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Confluent customers
  const confluent = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'doordash'];
  console.log('\n=== CONFLUENT MORE ===');
  for (const slug of confluent) {
    const url = 'https://confluent.io/customers/' + slug.toLowerCase().replace(/ /g, '-') + '/';
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CONF/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);