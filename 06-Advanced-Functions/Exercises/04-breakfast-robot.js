function solution() {
  const stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  };

  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
  };

  return function (command) {
    let [action, param1, quantity] = command.split(' ');

    if (action === 'restock') {
      stock[param1] += Number(quantity);
      return 'Success'
    }

    if (action === 'prepare') {
      const recipe = recipes[param1];

      for (let [ingredient, amountPerUnit] of Object.entries(recipe)) {
        const required = amountPerUnit * Number(quantity);

        if (stock[ingredient] < required) {
          return `Error: not enough ${ingredient} in stock`;
        } 
      }
      
      for (const [ingredient, amountPerUnit] of Object.entries(recipe)) {
        stock[ingredient] -= amountPerUnit * quantity;
      }
      return 'Success';
    }

    if (action === 'report') {
      return Object.entries(stock).map(([el, quantity]) => `${el}=${quantity}`).join(' ')
    }
  }
}

let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));



// result = result();

// let expectationPairs = [
//   ['restock flavour 50', 'Success'],
//   ['prepare lemonade 4', 'Error: not enough carbohydrate in stock']
// ];

// for (let i = 0; i < expectationPairs.length; i++) {
//   let expectation = expectationPairs[i];
//   expect(result(expectation[0])).to.equal(expectation[1], `Order ${expectation[0]} should have resulted in ${expectation[1]}`);
// }

// result = result();

// var expectationPairs = [
//   ['prepare turkey 1', 'Error: not enough protein in stock'],
//   ['restock protein 10', 'Success'],
//   ['prepare turkey 1', 'Error: not enough carbohydrate in stock'],
//   ['restock carbohydrate 10', 'Success'],
//   ['prepare turkey 1', 'Error: not enough fat in stock'],
//   ['restock fat 10', 'Success'],
//   ['prepare turkey 1', 'Error: not enough flavour in stock'],
//   ['restock flavour 10', 'Success'],
//   ['prepare turkey 1', 'Success'],
//   ['report', 'protein=0 carbohydrate=0 fat=0 flavour=0']
// ];

// for (let i = 0; i < expectationPairs.length; i++) {
//   let expectation = expectationPairs[i];
//   expect(result(expectation[0])).to.equal(expectation[1], `Order ${expectation[0]} should have resulted in ${expectation[1]}`);
// }