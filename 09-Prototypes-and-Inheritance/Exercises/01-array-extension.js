(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  }

  Array.prototype.skip = function (n) {
    let result = [];
    for (let i = n; i < this.length; i++) {
      result.push(this[i]);
    }
    return result;
  }

  Array.prototype.take = function (n) {
    let result = this.slice(0, n);
    return result;
  }

  Array.prototype.sum = function () {
    return this.reduce((acc, cur) => acc + cur);
  }

  Array.prototype.average = function () {
    return this.sum() / this.length;
  }
})();

let myArr = [1, 2, 3, 4];
console.log(myArr.skip(1))