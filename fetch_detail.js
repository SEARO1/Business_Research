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
  // CircleCI - Eventbrite detail
  console.log('=== Eventbrite Detail ===');
  const eb = await fetch('https://circleci.com/case-studies/eventbrite/');
  console.log('Len:', eb.body.length);
  // Look for metrics - simple number extraction
  const metrics = eb.body.match(/\d+[\d,]+/g) || [];
  console.log('Numbers found:', metrics.filter(n => parseInt(n.replace(/,/g,'')) > 10).slice(0,30));
  
  // CircleCI - Cruise detail
  console.log('\n=== Cruise Detail ===');
  const cruise = await fetch('https://circleci.com/case-studies/cruise/');
  console.log('Len:', cruise.body.length);
  
  // Dollar Shave Club detail
  console.log('\n=== Dollar Shave Club Detail ===');
  const dsc = await fetch('https://circleci.com/case-studies/dollar-shave-club/');
  console.log('Len:', dsc.body.length);
  
  // GitLab Hilti detail
  console.log('\n=== Hilti Detail ===');
  const hilti = await fetch('https://about.gitlab.com/customers/hilti/');
  console.log('Len:', hilti.body.length);
  
  // GitLab Ericsson
  console.log('\n=== Ericsson Detail ===');
  const ericsson = await fetch('https://about.gitlab.com/customers/ericsson/');
  console.log('Len:', ericsson.body.length);
  
  // GitLab Siemens
  console.log('\n=== Siemens Detail ===');
  const siemens = await fetch('https://about.gitlab.com/customers/siemens/');
  console.log('Len:', siemens.body.length);
}
main().catch(console.error);