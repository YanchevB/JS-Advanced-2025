function lastKNumbersSequence(n, k) {
  let desiredLength = n;
  let result = [1];

  for (let i = 1; i < desiredLength; i++) {
    let start = i - k >= 0 ? i - k : 0;
    let newEl = result.slice(start).reduce((acc, cur) => acc + cur, 0);
    result.push(newEl);
  }
  return result;
}