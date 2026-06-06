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
  // Intercom customer stories
  const intercom = ['shopify', 'lyft', 'uber', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'notion', 'figma', 'canva', 'duolingo', 'grammarly', 'webflow', 'framer'];
  console.log('=== INTERCOM ===');
  for (const slug of intercom) {
    const url = 'https://www.intercom.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('IC/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Freshdesk customer stories
  const freshdesk = ['shopify', 'lyft', 'uber', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'freshworks', 'squarespace', 'wix', 'godaddy', 'mailchimp', 'sendgrid'];
  console.log('\n=== FRESHDESK ===');
  for (const slug of freshdesk) {
    const url = 'https://www.freshworks.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('FD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Zendesk customer stories (different URL)
  const zendesk = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'shopify', 'groupon', 'etsy', 'airbnb'];
  console.log('\n=== ZENDESK.CUSTOMERS ===');
  for (const slug of zendesk) {
    const url = 'https://www.zendesk.com/customers/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('ZD/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Wrike case studies
  const wrike = ['shopify', 'google', 'netflix', 'spotify', 'uber', 'airbnb', 'deloitte', 'nike', 'siemens', 'sap', ' Workday', 'servicenow', 'salesforce', 'adobe', 'oracle'];
  console.log('\n=== WRIKE ===');
  for (const slug of wrike) {
    const url = 'https://www.wrike.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('WR/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Smartsheet customer stories
  const smartsheet = ['shopify', 'google', 'netflix', 'spotify', 'uber', 'airbnb', 'deloitte', 'nike', 'cisco', 'ibm', 'accenture', 'kpmg', 'deloitte', 'siemens', 'sap', ' Workday'];
  console.log('\n=== SMARTSHEET ===');
  for (const slug of smartsheet) {
    const url = 'https://www.smartsheet.com/customer-stories/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('SS/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);