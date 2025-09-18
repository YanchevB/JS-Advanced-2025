function extractIncreasingSubsequence(arr) {
  let result = [arr[0]];
  let biggestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let nextNum = arr[i];

    if (biggestNum <= nextNum) {
      biggestNum = nextNum
      result.push(biggestNum)
    }
  }
  return result;
}