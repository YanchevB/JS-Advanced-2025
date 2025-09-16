function negativePositiveNumbers(arr) {
  let result = [];

  for (let number of arr) {
    number < 0 ? result.unshift(number) : result.push(number);
  }

  return result
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));
console.log(negativePositiveNumbers([3, -2, 0, -1]));