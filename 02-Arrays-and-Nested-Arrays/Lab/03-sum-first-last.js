function sumFirstLast(arr) {
  arr = arr.map(Number);
  let result = arr.shift() + arr.pop();
  return result;
}

console.log(sumFirstLast(['20', '30', '40']));