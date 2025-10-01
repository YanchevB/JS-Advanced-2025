function solve() {
  let str = '';
  return {
    append,
    removeStart,
    removeEnd,
    print
  }

  function append(string) {
    str += string;
    return str;
  }

  function removeStart(n) {
    str = str.slice(n);
    return str;
  }

  function removeEnd(n) {
    str = str.slice(0, -n);
    return str;
  }

  function print() {
    console.log(str);
  }
}

let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();