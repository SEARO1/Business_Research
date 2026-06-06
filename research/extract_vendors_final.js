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
  // Try different vendor patterns
  const vendors = [
    // Snyk
    ['https://snyk.io/customers/shopify/', 'SNYK shopify'],
    ['https://snyk.io/customers/Netflix/', 'SNYK netflix'],
    ['https://snyk.io/customers/airbnb/', 'SNYK airbnb'],
    ['https://snyk.io/customers/spotify/', 'SNYK spotify'],
    ['https://snyk.io/customers/uber/', 'SNYK uber'],
    ['https://snyk.io/customers/slack/', 'SNYK slack'],
    // Datadog
    ['https://www.datadoghq.com/customers/shopify/', 'DD shopify'],
    ['https://www.datadoghq.com/customers/netflix/', 'DD netflix'],
    ['https://www.datadoghq.com/customers/airbnb/', 'DD airbnb'],
    ['https://www.datadoghq.com/customers/spotify/', 'DD spotify'],
    // Fastly
    ['https://www.fastly.com/customers/shopify/', 'FASTLY shopify'],
    ['https://www.fastly.com/customers/netflix/', 'FASTLY netflix'],
    ['https://www.fastly.com/customers/airbnb/', 'FASTLY airbnb'],
    ['https://www.fastly.com/customers/spotify/', 'FASTLY spotify'],
    ['https://www.fastly.com/customers/slack/', 'FASTLY slack'],
    ['https://www.fastly.com/customers/uber/', 'FASTLY uber'],
    // Sumo Logic
    ['https://www.sumologic.com/customers/shopify/', 'SUMO shopify'],
    ['https://www.sumologic.com/customers/netflix/', 'SUMO netflix'],
    ['https://www.sumologic.com/customers/airbnb/', 'SUMO airbnb'],
    ['https://www.sumologic.com/customers/spotify/', 'SUMO spotify'],
    // Splunk
    ['https://www.splunk.com/customers/shopify/', 'SPLUNK shopify'],
    ['https://www.splunk.com/customers/netflix/', 'SPLUNK netflix'],
    ['https://www.splunk.com/customers/airbnb/', 'SPLUNK airbnb'],
    ['https://www.splunk.com/customers/spotify/', 'SPLUNK spotify'],
    // New Relic
    ['https://newrelic.com/customers/shopify/', 'NR shopify'],
    ['https://newrelic.com/customers/netflix/', 'NR netflix'],
    ['https://newrelic.com/customers/airbnb/', 'NR airbnb'],
    ['https://newrelic.com/customers/spotify/', 'NR spotify'],
    ['https://newrelic.com/customers/uber/', 'NR uber'],
    ['https://newrelic.com/customers/lyft/', 'NR lyft'],
    // Sentry
    ['https://sentry.io/customers/shopify/', 'SENTRY shopify'],
    ['https://sentry.io/customers/netflix/', 'SENTRY netflix'],
    ['https://sentry.io/customers/airbnb/', 'SENTRY airbnb'],
    ['https://sentry.io/customers/spotify/', 'SENTRY spotify'],
    // LaunchDarkly
    ['https://launchdarkly.com/customers/shopify/', 'LD shopify'],
    ['https://launchdarkly.com/customers/netflix/', 'LD netflix'],
    ['https://launchdarkly.com/customers/airbnb/', 'LD airbnb'],
    ['https://launchdarkly.com/customers/spotify/', 'LD spotify'],
    // Cloudflare more
    ['https://www.cloudflare.com/case-studies/shopify/', 'CF shopify'],
    ['https://www.cloudflare.com/case-studies/discord/', 'CF discord'],
    ['https://www.cloudflare.com/case-studies/canva/', 'CF canva'],
    ['https://www.cloudflare.com/case-studies/hubspot/', 'CF hubspot'],
    ['https://www.cloudflare.com/case-studies/skyscanner/', 'CF skyscanner'],
    ['https://www.cloudflare.com/case-studies/kaizen-gaming/', 'CF kaizen'],
    ['https://www.cloudflare.com/case-studies/intility/', 'CF intility'],
    ['https://www.cloudflare.com/case-studies/anadolu-efes/', 'CF anadolu'],
    ['https://www.cloudflare.com/case-studies/fullscript/', 'CF fullscript'],
    ['https://www.cloudflare.com/case-studies/tightknit/', 'CF tightknit'],
    ['https://www.cloudflare.com/case-studies/mitsubishi-gas-chemical/', 'CF mgc']
  ];
  for (const [url, name] of vendors) {
    const res = await fetch(url);
    const t = extractText(res.body);
    if (res.status === 200 && t.length > 2000) {
      console.log('*** ' + name + ':' + res.status + ':' + t.length);
    }
    await new Promise(r => setTimeout(r, 100));
  }
  console.log('Done');
}
main().catch(console.error);