Array.prototype.map = function (callback, thisArg = undefined) {
  const newArray = [];
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const newElement = callback.call(thisArg, this[i], i, this);
      newArray.push(newElement);
    }
  }
  return newArray;
};

let arr = ['1', '2', '3'];
const newArr = arr.map((e, i, arr) => {
  console.log(e, i, arr);
  return e * i;
});
console.log(newArr);
