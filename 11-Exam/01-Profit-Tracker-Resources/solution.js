window.addEventListener("load", solve);

function solve() {
  let locationRef = document.getElementById('location');
  let areaRef = document.getElementById('area');
  let yearRef = document.getElementById('year');
  let typeRef = document.getElementById('type');
  let priceRef = document.getElementById('price-per-sqm');
  let profitRef = document.getElementById('expected-profit');
  let tbody = document.getElementById('table-body');
  let ul = document.getElementById('property-list');
  let totalProfitRef = document.getElementById('profit');
  let totalProfit = 0;

  const publishBtn = document.getElementById('publish');

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const location = locationRef.value;
    const area = areaRef.value;
    const year = yearRef.value;
    const type = typeRef.value;
    const price = priceRef.value;
    const profit = profitRef.value;

    if (!location || !area || !year || !type || !price || !profit) {
      return;
    }

    const tr = createTr(location, area, year, type, price, profit);
    tbody.appendChild(tr);

    locationRef.value = '';
    areaRef.value = '';
    yearRef.value = '';
    typeRef.value = '';
    priceRef.value = '';
    profitRef.value = '';

  })

  function createTr(location, area, year, type, price, profit) {
    const tr = document.createElement('tr');
    tr.classList.add('row');

    const tdLocation = document.createElement('td');
    tdLocation.textContent = location;

    const tdArea = document.createElement('td');
    tdArea.textContent = area;

    const tdYear = document.createElement('td');
    tdYear.textContent = year;

    const tdType = document.createElement('td');
    tdType.textContent = type;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = (Number(price) * Number(area)).toFixed(2);

    const tdNewPrice = document.createElement('td');
    let totalPrice = Number(area) * Number(price);
    let newPrice = totalPrice * (1 + Number(profit) / 100)
    tdNewPrice.textContent = newPrice.toFixed(2)
    
    const tdButtons = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');

    editBtn.addEventListener('click', onEdit);

    const sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');

    sellBtn.addEventListener('click', onSell);

    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);

    tr.appendChild(tdLocation);
    tr.appendChild(tdArea);
    tr.appendChild(tdYear);
    tr.appendChild(tdType);
    tr.appendChild(tdPrice);
    tr.appendChild(tdNewPrice);
    tr.appendChild(tdButtons);
    return tr;
  }

  function onEdit(e) {
    const tr = e.target.parentElement.parentElement;
    let [location, area, year, type, price, profit] = tr.children;
    locationRef.value = location.textContent;
    areaRef.value = area.textContent;
    yearRef.value = year.textContent;
    typeRef.value = type.textContent;
    priceRef.value = Number(price.textContent) / Number(area.textContent);
    let totalPrice = Number(price.textContent);
    let newPrice = Number(profit.textContent);
    let profitPercent = ((newPrice - totalPrice) / totalPrice) * 100;
    profitRef.value = profitPercent;

    tr.remove();
  }

  function onSell(e) {
    const tr = e.target.parentElement.parentElement;
    let [location, area, year, type, price, profit] = tr.children;

    let currentProfit = Number(profit.textContent) - Number(price.textContent);

    tr.remove();

    const li = document.createElement('li');
    li.classList.add('each-list');

    li.innerHTML = `
        <span>${location.textContent} - ${type.textContent}</span>
        <span>${year.textContent}</span>
        <span>${currentProfit.toFixed(2)}</span>
    `;

    ul.appendChild(li);

    totalProfit += currentProfit;

    totalProfitRef.textContent = totalProfit.toFixed(2);
  }
}

