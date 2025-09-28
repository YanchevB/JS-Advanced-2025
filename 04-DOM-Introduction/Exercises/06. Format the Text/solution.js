function solve() {
  const inputRef = document.getElementById('input');
  const outputRef = document.getElementById('output');

  const sentences = inputRef.value.split('.').filter(el => !!el && el !== ' ');

  for (let i = 0; i < sentences.length; i += 3) {
    let result = [];

    for (let x = 0; x < 3; x++) {
      if (!sentences[i + x]) {
        break;
      }
      result.push(sentences[i + x]);
    }

    let buff = result.join('.') + '.';
    outputRef.innerHTML += `<p>${buff.trim()}</p>`;
  }
}