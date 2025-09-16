function cookingByNumbers(num, ...commands) {
  let number = Number(num);
  for (let command of commands) {
    switch (command) {
      case 'chop':
        number /= 2;
        console.log(number);
        break;
    
      case 'dice':
        number = Math.sqrt(number);
        console.log(number);
        break;

      case 'spice':
        number += 1;
        console.log(number);
        break;

      case 'bake':
        number *= 3;
        console.log(number);
        break;

      case 'fillet':
        number *= 0.8;
        console.log(number);
        break;
    }
  }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');