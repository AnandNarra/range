import fs from 'fs';
import https from 'https';

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'OrangeStructuresBot/1.0' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function searchAndFind() {
  const queries = [
    { query: 'poultry house', key: 'poultry_shed' },
    { query: 'broiler chickens farm', key: 'broilers' },
    { query: 'ventilation fan industrial', key: 'fan' },
    { query: 'air cooler evaporative', key: 'evaporative' },
    { query: 'chicken battery cage', key: 'layer_cages' }
  ];

  for (const q of queries) {
    try {
      const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(q.query)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|mime`;
      const res = await fetch(apiUrl, { headers: { 'User-Agent': 'OrangeStructuresBot/1.0' } });
      const data = await res.json();
      console.log(`\n=== Results for "${q.query}" ===`);
      if (data.query && data.query.pages) {
        for (const p of Object.values(data.query.pages)) {
          if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].mime && p.imageinfo[0].mime.startsWith('image/jpeg')) {
            console.log(`TITLE: ${p.title} | URL: ${p.imageinfo[0].url}`);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}

searchAndFind();
