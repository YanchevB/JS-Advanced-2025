function equalNeighbors(matrix) {
  let equalCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let currentRowEl = matrix[i][j];
      if (i + 1 < matrix.length) {
        let nextRowEl = matrix[i + 1][j];

        if (currentRowEl === nextRowEl) {
          equalCount++;
        }
      }
      
      if (j + 1 < matrix[i].length) {
        let nextColEl = matrix[i][j + 1];

        if (currentRowEl === nextColEl) {
          equalCount++;
        }
      }
    }
  }

  return equalCount;
}