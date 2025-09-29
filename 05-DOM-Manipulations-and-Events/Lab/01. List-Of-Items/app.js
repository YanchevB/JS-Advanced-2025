function addItem() {
    const inputRef = document.getElementById('newItemText');

    const item = document.createElement('li');
    item.textContent = inputRef.value;

    const list = document.getElementById('items');
    list.appendChild(item);
}