function storeCatalogue(data) {
  const catalogue = {};

  for (let entry of data) {
    let [product, price] = entry.split(' : ');
    price = Number(price);

    let firstChar = product[0];

    if (!catalogue.hasOwnProperty(firstChar)) {
      catalogue[firstChar] = [];
    }
    
    catalogue[firstChar].push({ product, price });
  }

  let keys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
  
  for (let key of keys) {
    const productGroup = catalogue[key];
    console.log(key);
    productGroup.sort((a, b) => a.product.localeCompare(b.product))
      .forEach((product) => console.log(`  ${product.product}: ${product.price}`));
  }
}

storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
]);