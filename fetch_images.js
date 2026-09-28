async function searchBitmaps() {
  const terms = [
    'exhaust fan',
    'cooling pad',
    'brooder',
    'chickens poultry farm',
    'poultry shed',
    'electrical control panel',
    'water pump dosing',
    'poultry cages'
  ];

  for (const term of terms) {
    try {
      const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(term + ' filetype:bitmap')}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url&format=json`;
      const res = await fetch(url, { headers: { 'User-Agent': 'OrangeStructuresBot/1.0 (info@orangestructures.com)' } });
      const data = await res.json();
      console.log(`\n=== Term: "${term}" ===`);
      if (data.query && data.query.pages) {
        for (const p of Object.values(data.query.pages)) {
          if (p.imageinfo && p.imageinfo[0]) {
            console.log(`${p.title}: ${p.imageinfo[0].url}`);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
searchBitmaps();
