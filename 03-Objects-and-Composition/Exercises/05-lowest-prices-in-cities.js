function lowestPrices(data) {
  const result = {};

  for (let entry of data) {
    let [town, product, price] = entry.split(' | ');
    price = Number(price);
    
    if (!result.hasOwnProperty(product)) {
      result[product] = { town, price };
    }

    if (result[product].price > price) {
      result[product] = { town, price };
    }
  }

  for (let [product, productInfo] of Object.entries(result)) {
    console.log(`${product} -> ${productInfo.price} (${productInfo.town})`);
  }
}

lowestPrices([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10'
]);