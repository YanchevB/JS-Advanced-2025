function getFibonator() {
  let a = 1, b = 1;

  function addNext() {
    let next = a; // 0
    let temp = a + b; // 1
    a = b; // 1
    b = temp; // 1
    return next; // 0
  }
  return addNext;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13