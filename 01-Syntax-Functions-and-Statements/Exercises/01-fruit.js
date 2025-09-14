function fruit(fruit, weightInGr, priceForKg) {
  let totalWeight = weightInGr / 1000;
  let totalPrice = totalWeight * priceForKg;
  console.log(`I need $${totalPrice.toFixed(2)} to buy ${totalWeight.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);