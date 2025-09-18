function printEveryNthEl(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  console.log(result);
}

printEveryNthEl(['5', '20', '31', '4', '20'], 2);
printEveryNthEl(['1', '2', '3', '4', '5'], 6)