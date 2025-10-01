function listProcessor(input) {
  let output = [];

  const processor = {
    add(str) {
      output.push(str);
    },
    remove(str) {
      output = output.filter(w => w !== str);
    },
    print() {
      console.log(output.join(','))
    }
  }

  for (let entry of input) {
    const [command, value] = entry.split(' ');
    processor[command](value);
  }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);