function aggregateElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      let result = arr.reduce((sum, num) => sum + num);
      console.log(result);
    } else if (i === 1) {
      let result = arr.map(x => 1 / x).reduce((sum, num) => sum + num);
      console.log(result);
    } else if (i === 2) {
      let result = arr.join('');
      console.log(result);
    }
  }
}

aggregateElements([1, 2, 3]);