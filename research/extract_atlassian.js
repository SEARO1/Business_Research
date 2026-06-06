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
  // Jira case studies
  const jira = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'datadog', 'snowflake', 'mongodb', 'servicenow', 'salesforce', ' Workday', 'okta', 'auth0'];
  console.log('=== JIRA/ATLASSIAN ===');
  for (const slug of jira) {
    const url = 'https://www.atlassian.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('JIRA/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Monday.com case studies
  const monday = ['shopify', 'lyft', 'uber', 'deloitte', 'hu', ' Unilever', 'coca-cola', 'nike', 'hulu', 'disney', 'netflix', 'spotify', 'duolingo', 'wish', 'groupon', 'doordash', 'instacart', 'postmates'];
  console.log('\n=== MONDAY.COM ===');
  for (const slug of monday) {
    const url = 'https://monday.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('MON/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // ClickUp case studies
  const clickup = ['shopify', 'google', 'netflix', 'spotify', 'uber', 'airbnb', 'stripe', 'deloitte', 'nike', 'ecco', ' Booking.com', 'hotels.com', 'expedia', 'wyndham'];
  console.log('\n=== CLICKUP ===');
  for (const slug of clickup) {
    const url = 'https://clickup.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('CU/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Asana customer stories
  const asana = ['shopify', 'uber', 'lyft', 'airbnb', 'stripe', 'netflix', 'spotify', 'slack', 'zoom', 'twilio', 'segment', 'plaid', 'pinterest', 'whatsapp', 'disney', 'nike', 'adidas', 'underarmour'];
  console.log('\n=== ASANA ===');
  for (const slug of asana) {
    const url = 'https://asana.com/case-studies/' + slug.toLowerCase().replace(/ /g, '-');
    const res = await fetch(url);
    const t = extractText(res.body);
    console.log('ASANA/' + slug.toUpperCase() + ':' + res.status + ':' + t.length);
    await new Promise(r => setTimeout(r, 300));
  }
}
main().catch(console.error);