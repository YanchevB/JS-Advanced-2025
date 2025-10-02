function functionalSum(num) {
  let result = 0;
  internalSum(num);

  function internalSum(num) {
    result += num;
    return internalSum;
  }
  internalSum.toString = () => result;
  return internalSum;
}