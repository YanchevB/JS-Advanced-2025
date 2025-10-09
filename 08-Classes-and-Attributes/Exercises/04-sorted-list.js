class List {
  constructor() {
    this.listArr = [];
    this.size = 0;
  }

  add(num) {
    this.listArr.push(num);
    this.size++;
    return this.sort(this.listArr);
  }

  remove(index) {
    if (index < 0 || index >= this.listArr.length) return;

    this.sort(this.listArr);
    this.size--;
    return this.listArr.splice(index, 1)
  }

  get(index) {
    if (index === 'undefined' || index < 0 || index >= this.listArr.length) return;
    
    this.sort(this.listArr);
    return this.listArr[index];
  }

  sort(arr) {
    arr.sort((a, b) => a - b);
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get());
list.remove(1); 
console.log(list.get(1));