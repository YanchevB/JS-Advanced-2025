function townsToJSON(data) {
  const output = [];
  const [headerA, headerB, headerC] = data.shift().split(/\s?\|\s?/gm).filter(el => !!el);
  
  for (let entry of data) {
    let [town, lat, long] = entry.split(/\s?\|\s?/gm).filter(el => !!el);
    const currentTown = {}

    lat = Number(lat).toFixed(2);
    long = Number(long).toFixed(2);

    currentTown[headerA] = town;
    currentTown[headerB] = Number(lat);
    currentTown[headerC] = Number(long);
    output.push(currentTown);
  }

  return JSON.stringify(output);
}

townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |'
]);