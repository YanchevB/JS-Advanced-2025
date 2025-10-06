function addItem() {
    const textInfo = document.getElementById('newItemText');
    const valueInfo = document.getElementById("newItemValue");
    const dropdownMenu = document.getElementById('menu');

    let key = textInfo.value;
    let value = valueInfo.value;

    if (!key || !value) return;

    const option = document.createElement('option');
    option.textContent = key;
    option.value = value;
    dropdownMenu.appendChild(option);

    textInfo.value = '';
    valueInfo.value = '';
}