function extract(content) {
  let paragraph = document.getElementById(content).textContent;
  let pattern = /\(([^)]+)\)/g;
  let result = [];

  let match = pattern.exec(paragraph);
  while (match) {
    console.log(match);
    result.push(match[1]);
    match = pattern.exec(paragraph);
  }

  result = result.join('; ');
  return result;
}