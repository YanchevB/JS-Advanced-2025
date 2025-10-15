function juiceFlavours(data) {
  class Juice {
    constructor(fruit) {
      this.fruit = fruit;
      this.quantity = 0;
      this.bottles = 0;
      this.leftovers = 0;
    }

    makeJuice(amount) {
      this.quantity += amount;

      if (this.quantity >= 1000) {
        const newBottles = Math.floor(this.quantity / 1000);
        this.bottles += newBottles
        this.leftovers = this.quantity % 1000;
        this.quantity = this.leftovers;
      } else {
        this.leftovers = this.quantity;
      }
    } 
  }

  const storage = {};
  const bottleOrder = [];

  for (let entry of data) {
    let [fruit, quantity] = entry.split(' => ');
    quantity = Number(quantity);
    
    if (!storage[fruit]) {
      storage[fruit] = new Juice(fruit);
    }

    const juice = storage[fruit];
    const before = juice.bottles;
    juice.makeJuice(quantity);
    const after = juice.bottles;

    if (after > 0 && before === 0) {
      bottleOrder.push(fruit)
    }
  }

  for (let fruit of bottleOrder) {
    const juice = storage[fruit];
    console.log(`${juice.fruit} => ${juice.bottles}`);
  }
}

juiceFlavours([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549'
]);

console.log('-------');

juiceFlavours([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789'
]);