async function searchMore() {
  const terms = [
    'poultry brooder',
    'chick brooder',
    'evaporative cooling pad',
    'evaporative cooling',
    'poultry house shed',
    'poultry farm building',
    'control panel PLC automation',
    'chemical dosing pump'
  ];

  for (const term of terms) {
    try {
      const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|mime&format=json`;
      const res = await fetch(url, { headers: { 'User-Agent': 'OrangeStructuresBot/1.0' } });
      const data = await res.json();
      console.log(`\n=== "${term}" ===`);
      if (data.query && data.query.pages) {
        for (const p of Object.values(data.query.pages)) {
          if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].mime && p.imageinfo[0].mime.startsWith('image/jpeg')) {
            console.log(`${p.title} -> ${p.imageinfo[0].url}`);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
searchMore();
