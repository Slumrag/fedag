const obj = { a: 'a', b: null, c: {}, d: [] };

obj[Symbol.iterator] = function () {
  return {
    current: 0,
    entries: Object.entries(this),
    next() {
      if (this.current < this.entries.length) {
        const entry = this.entries[this.current++];
        return { done: false, value: entry };
      } else {
        return { done: true };
      }
    },
  };
};

for (const iterator of obj) {
  console.log(iterator);
}
