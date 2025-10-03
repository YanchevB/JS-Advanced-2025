function create(words) {
   const divRef = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = words[i];
      p.style.display = "none";

      divRef.appendChild(div).appendChild(p);

      div.addEventListener('click', (e) => {
         const div = e.currentTarget;
         const p = div.children[0];
         let currentState = p.style.display;
         p.style.display = currentState === "none" ? "block" : "none";
      })
   }
}