function generateReport() {
    const keys = Array.from(document.querySelectorAll('tr th'))
        .map(key => key.textContent.toLowerCase().trim());

    const entries = [];
    const entriesArr = Array.from(document.querySelectorAll('tbody tr'))
    

    const rows = [];

    function createObj(keys, entries) {
        const obj = {};
        if (!obj.hasOwnProperty(keys)) {
            obj[keys] = entries
        }
        rows.push(obj);
    }
}