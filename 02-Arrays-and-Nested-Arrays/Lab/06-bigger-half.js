function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let half = arr.length % 2 === 0 ? sorted.slice(arr.length / 2) : sorted.slice(Math.floor(arr.length / 2));
  return half;
}

console.log(biggerHalf([4, 7, 2, 5]));  
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));