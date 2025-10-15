class Stringer {
  innerString;
  innerLength;
  initialString;

  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
    this.initialString = string;
  }

  increase(length) {
    this.innerLength += length
  }

  decrease(length) {
    this.innerLength -= length;
    if (this.innerLength < 0) {
      return this.innerLength = 0;
    }

    return this.innerLength;
  }

  toString() {
    if (this.innerLength === 0) {
      return '...';
    }

    if (this.innerLength < this.initialString.length) {
      return `${this.initialString.slice(0, this.innerLength)}...`
    }

    return this.initialString
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString()); 

test.decrease(5);
console.log(test.toString()); 

test.increase(4);
console.log(test.toString());