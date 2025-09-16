function wordsUppercase(input) {
  let output = input.split(/\W+/).filter(Boolean).map(w => w.toUpperCase()).join(', ');
  console.log(output);
}

wordsUppercase('Hi, how are you?');