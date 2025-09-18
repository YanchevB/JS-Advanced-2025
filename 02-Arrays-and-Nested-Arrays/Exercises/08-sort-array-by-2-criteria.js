function sortArrayBy2Criteria(arr) {
  let sorted = arr.sort((a, b) => {
    return a.length - b.length ? a.length - b.length : a.localeCompare(b);
  })
  console.log(sorted.join(`\n`));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log(`----`);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);