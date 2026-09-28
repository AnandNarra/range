import fs from 'fs';
import https from 'https';

const downloads = [
  {
    name: 'plc_controller.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/BMA_Automation_Allen_Bradley_PLC_3.JPG'
  },
  {
    name: 'metering_dosing_pump.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Milton_Roy%27s_Primeroyal_X_Chemical_Metering_Pump.jpg'
  },
  {
    name: 'broiler_chicks_brooder.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Broiler_chicks.jpg'
  },
  {
    name: 'modern_poultry_farm_shed.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Poultry_farm_01.jpg'
  },
  {
    name: 'poultry_shed_complex.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Poultry_farm_02.jpg'
  },
  {
    name: 'farm_poultry_units.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Leys_Farm_Poultry_Units_-_geograph.org.uk_-_72693.jpg'
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
        console.log(`Saved ${dest}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const item of downloads) {
    try {
      await downloadFile(item.url, `public/images/${item.name}`);
    } catch (e) {
      console.error(`Error downloading ${item.name}:`, e.message);
    }
  }
}
main();
