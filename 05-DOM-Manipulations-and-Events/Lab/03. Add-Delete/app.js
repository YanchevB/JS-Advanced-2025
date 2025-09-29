function addItem() {
    const inputRef = document.getElementById('newItemText');

    if (!inputRef.value) {
        return;
    }

    const item = document.createElement('li');
    item.textContent = inputRef.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    item.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    function onDelete(event) {
        const row = event.target.parentElement;
        row.remove();        
    }

    const list = document.getElementById('items');
    list.appendChild(item);

    inputRef.value = '';
}