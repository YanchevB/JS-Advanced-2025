function sumTable() {
  const tableRef = document.querySelectorAll('table tr');
  const tableArr = Array.from(tableRef);
  let sum = 0;
  for (let i = 1; i < tableArr.length; i++) {
    const price = Number(tableArr[i].children[1].textContent);
    sum += price;
  }

  const result = document.getElementById('sum');
  result.textContent = sum
}