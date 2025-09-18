function findBiggestElement(matrix) {
  let biggestNumbers = [];

  for (let row = 0; row < matrix.length; row++) {
    biggestNumbers.push(matrix[row].sort((a, b) => b - a).shift());
  }

  let biggestElement = biggestNumbers.sort((a, b) => b - a).shift();
  return biggestElement;
}