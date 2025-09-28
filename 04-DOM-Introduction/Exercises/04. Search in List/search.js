function search() {
   const listRef = document.querySelectorAll('ul li');
   const searchRef = document.getElementById('searchText');
   const match = searchRef.value;
   const resultRef = document.getElementById('result');

   const listArr = Array.from(listRef);
   let result = [];

   for (let line of listArr) {
      if (!line.textContent.includes(match)) {
         continue;
      }
      result.push(line.textContent);
      line.style.fontWeight = 'bolder';
      line.style.textDecoration = 'underline'
   }

   resultRef.textContent = `${result.length} matches found`;
   result = [];
}
