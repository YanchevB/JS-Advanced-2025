function deleteByEmail() {
    const inputRef = document.getElementsByTagName('input');
    const input = inputRef[0].value;
    
    const rows = Array.from(document.querySelector('tbody').children);

    for (let row of rows) {
        let email = row.children[1].textContent;
        if (email === input) {
            row.remove();
            document.getElementById('result').textContent = 'Deleted.'
        } else {
            document.getElementById('result').textContent = 'Not found.'
        }
    }
}