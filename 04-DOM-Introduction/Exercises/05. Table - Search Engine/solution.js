function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRef = document.querySelectorAll('tbody tr');
      const searchRef = document.getElementById('searchField');
      const dataArr = []
      tableRef.forEach(row => dataArr.push(row));

      for (let row of dataArr) {
         if (!searchRef.value) {
            return;
         }
         row.classList.remove('select');
         const matchedRow = row.textContent.includes(searchRef.value);
         
         if (matchedRow) {
            row.classList.add('select');
         }
      }

      searchRef.value = '';
   }
}