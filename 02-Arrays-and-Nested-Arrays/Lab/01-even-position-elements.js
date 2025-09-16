function evenPositionElements(arr) {
  let result = arr.filter((el, i) => { return i % 2 === 0 }).join(' ')
  console.log(result);
}

evenPositionElements(['20', '30', '40', '50', '60']);