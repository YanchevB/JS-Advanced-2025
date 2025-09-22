function calorieObject(data) {
  const products = {};

  for (let i = 0; i < data.length; i += 2) {
    let product = data[i];
    products[product] = Number(data[i + 1]);
  }

  console.log(products);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);