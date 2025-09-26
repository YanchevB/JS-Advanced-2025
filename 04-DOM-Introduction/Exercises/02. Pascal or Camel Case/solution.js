function solve() {
  const textRef = document.getElementById('text');
  const namingConventionRef = document.getElementById('naming-convention');
  const resultRef = document.getElementById('result');

  let input = textRef.value;
  const namingConvention = namingConventionRef.value;

  switch (namingConvention) {
    case 'Pascal Case':
      resultRef.textContent = transformToPascal(input);
      break;
    
    case 'Camel Case':
      resultRef.textContent = transformToCamel(input);
      break;

    default: resultRef.textContent = 'Error!'
      break;
  }

  function transformToPascal(input) {
    input = input.toLowerCase().split(' ');
    let output = [];

    for (let i = 0; i < input.length; i++) {
      let currentWord = input[i];
      let result = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      output.push(result);
    }
    return output.join('');
  }

  function transformToCamel(input) {
    input = input.toLowerCase().split(' ');
    let output = [];
    output = [input[0]];
    for (let i = 1; i < input.length; i++) {
      let currentWord = input[i];
      let result = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      output.push(result);
    }
    return output.join('')
  }
}