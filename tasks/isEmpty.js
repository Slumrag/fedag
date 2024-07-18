function isEmpty(obj) {
  return Object.keys(obj).length < 1;
}

console.log(isEmpty([]));
console.log(isEmpty([null, undefined]));

console.log(isEmpty({}));
console.log(isEmpty({ prop: '1' }));
