function argumentInfo(...arg) {
  const result = {};

  for (let argument of arg) {
    const type = typeof argument;
    console.log(`${type}: ${argument}`);

    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }

    result[type] += 1;
  }

  Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .forEach((type) => console.log(`${type[0]} = ${type[1]}`));
}

argumentInfo('cat', 'dog', 42, function () { console.log('Hello world!'); })