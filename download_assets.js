import fs from 'fs';
import https from 'https';

const imagesToDownload = [
  {
    name: 'fan.jpg',
    url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80' // industrial fan / ventilation
  },
  {
    name: 'cooling_pad.jpg',
    url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80' // cooling / air system
  },
  {
    name: 'controller.jpg',
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80' // electrical panel
  },
  {
    name: 'shed_construction.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80' // construction site
  },
  {
    name: 'broiler_flock.jpg',
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80' // poultry birds
  }
];

for (const item of imagesToDownload) {
  const file = fs.createWriteStream(`public/images/${item.name}`);
  https.get(item.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Saved ${item.name}`);
    });
  }).on('error', err => {
    fs.unlink(`public/images/${item.name}`, () => {});
    console.error(`Error downloading ${item.name}:`, err.message);
  });
}
