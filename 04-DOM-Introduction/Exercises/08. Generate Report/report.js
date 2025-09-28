function generateReport() {
    const report = [];
    const headers = Array.from(document.querySelectorAll('thead th'))
        .map((th, index) => {
            const cb = th.querySelector('input[type="checkbox"]');
            return cb && cb.checked ? {name: cb.name, index: index} : null;
        })
        .filter(c => c !== null);   
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const obj = {};
        const cells = row.querySelectorAll('td');

        headers.forEach((col) => {
            obj[col.name] = cells[col.index].textContent.trim();
        })
        report.push(obj)
    });

    document.getElementById('output').value = JSON.stringify(report, null, 2);
}