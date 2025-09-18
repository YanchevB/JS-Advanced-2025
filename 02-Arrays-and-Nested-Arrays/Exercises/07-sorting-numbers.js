function sortingNumbers(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = [];
  
  for (let i = 0; i < Math.ceil(sorted.length / 2); i++) {
    result.push(sorted[i]);

    if (sorted.length % 2 !== 0) {
      if (i !== Math.ceil(sorted.length / 2) - 1) {
        result.push(sorted[sorted.length - 1 - i]);
      }
    } else {
      result.push(sorted[sorted.length - 1 - i]);
    }
  }
  return result;
}