function solve() {
  const textareasRef = document.getElementsByTagName('textarea');
  const btns = document.getElementsByTagName('button');
  const generateBtn = btns[0];
  const buyBtn = btns[1];
  const resultArea = textareasRef[1];

  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  function onGenerate() {
    const data = JSON.parse(textareasRef[0].value);
    const table = document.getElementsByTagName('tbody')[0];
    
    for (let entry of data) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${entry.img}"></td>
        <td><p>${entry.name}</p></td>
        <td><p>${entry.price}</p></td>
        <td><p>${entry.decFactor}</p></td>
        <td><input type="checkbox"></td>`;
      table.appendChild(row);
    }
  }

  function onBuy() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    const names = [];
    let totalPrice = 0;
    let decFactorSum = 0;
    let buff = '';

    for (let el of checked) {
      const tr = el.parentElement.parentElement;
      const name = tr.children[1].querySelector('p').textContent.trim();
      const price = Number(tr.children[2].textContent);
      const decFactor = Number(tr.children[3].textContent);

      totalPrice += price;
      decFactorSum += decFactor;
      names.push(name);
    }

    buff += `Total price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactorSum / names.length}`

    resultArea.value = `Bought furniture: ${names.join(', ')}\n`;
    resultArea.value += buff;
  }
}