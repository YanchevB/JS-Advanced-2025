function rotateArray(arr, rotationTimes) {
  let result = arr;

  for (let i = 0; i < rotationTimes; i++) {
    let rotatedEl = result.pop();
    result.unshift(rotatedEl);
  }

  console.log(result.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)