function solve(arr, argument) {
  switch (argument) {
    case 'asc': arr.sort((a, b) => a - b); break;
    case 'desc': arr.sort((a, b) => b - a); break;
  }
  return arr;
}