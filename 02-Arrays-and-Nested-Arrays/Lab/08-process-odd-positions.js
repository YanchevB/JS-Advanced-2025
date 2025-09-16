function processOddPositions(arr) {
  let filtered = arr.filter((el, i) => { return i % 2 !== 0 })
    .map(el => el * 2)
    .reverse()
    .join(' ');
  return filtered;
}

console.log(processOddPositions([10, 15, 20, 25]));