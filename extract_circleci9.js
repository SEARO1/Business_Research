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
  console.log('=== CIRCLECI / CINNAMON ===');
  const cn = await fetch('https://circleci.com/case-studies/cinnamon/');
  const cnText = extractText(cn.body);
  const cnStart = cnText.indexOf('Cinnamon');
  console.log(cnText.substring(cnStart > -1 ? cnStart : 0, (cnStart > -1 ? cnStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / MAZE ===');
  const mz = await fetch('https://circleci.com/case-studies/maze/');
  const mzText = extractText(mz.body);
  const mzStart = mzText.indexOf('Maze');
  console.log(mzText.substring(mzStart > -1 ? mzStart : 0, (mzStart > -1 ? mzStart : 0) + 3000));
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('\n\n=== CIRCLECI / PANTHEON ===');
  const pt = await fetch('https://circleci.com/case-studies/pantheon/');
  const ptText = extractText(pt.body);
  const ptStart = ptText.indexOf('Pantheon');
  console.log(ptText.substring(ptStart > -1 ? ptStart : 0, (ptStart > -1 ? ptStart : 0) + 3000));
}
main().catch(console.error);