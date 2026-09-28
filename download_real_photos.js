import fs from 'fs';
import https from 'https';

const downloads = [
  {
    name: 'industrial_fan.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Industrial_Exhaust_Fan.jpg'
  },
  {
    name: 'layer_cages.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Industrial-Chicken-Coop.JPG'
  },
  {
    name: 'commercial_broilers.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Broiler_Chickens_001.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'OrangeStructuresWebsiteBot/1.0 (contact@orangestructures.com)' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${dest}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const d of downloads) {
    try {
      await downloadFile(d.url, `public/images/${d.name}`);
    } catch (e) {
      console.error(e);
    }
  }
}
run();
