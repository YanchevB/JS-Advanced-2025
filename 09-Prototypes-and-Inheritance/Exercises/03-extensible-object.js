function extensibleObject() {
  const obj = {};
  obj.extend = function (template) {
    const proto = Object.getPrototypeOf(this);

    for (let key in template) {
      if (typeof template[key] === 'function') {
        proto[key] = template[key];
      } else {
        this[key] = template[key]
      }
    }
  }
  return obj;
}

const myObj = extensibleObject();
const template = {
  extensionMethod: function () { },
  extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);
