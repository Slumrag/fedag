function getAllKeys(obj) {
  const properties = [];
  while (obj != null) {
    const objProperties = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < objProperties.length; i++) {
      if (!properties.includes(objProperties[i])) properties.push(objProperties[i]);
    }
    obj = Object.getPrototypeOf(obj);
  }
  return properties;
}

const keys = getAllKeys([3]);
console.log(keys);
