function colorize() {
    const rows = document.querySelectorAll('table tr');
    const rowArr = Array.from(rows);
    for (let i = 1; i < rowArr.length; i += 2) {
        rowArr[i].style.background = 'teal';
    }
}