function heroicInventory(data) {
  const heroes = [];

  for (let entry of data) {
    if (!entry.trim()) continue;
    
    let [name, level, items] = entry.split(' / ');
    level = Number(level);
    
    items = items ? items.split(', ') : [];

    const hero = { name, level, items};
    heroes.push(hero);
  }

  const output = JSON.stringify(heroes)
  console.log(output);
}

heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
])