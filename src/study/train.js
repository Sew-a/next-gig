let hashmap = {};
let map = new Map();

hashmap["key1"] = "value1";
hashmap["key3"] = "value2";
hashmap["key2"] = "value3";

// console.log(hashmap["key1"]); // value1
// console.log(hashmap);

map.set("key1", "value1");
map.set("key3", "value2");
map.set("key2", "value3");

console.log(map.get("key1")); // value1
// console.log(map);

map.delete("key1"); // value1

// console.log(map.entries());

for (let [key, value] of Object.entries(hashmap)) {
  console.log(key, value);
}

// Set

const novaSet = new Set();

novaSet.add(1);
novaSet.add(2);
novaSet.add(3);
novaSet.add(4);
novaSet.add(5);

// console.log(novaSet.delete(3)); // true

// flatten array - recursion

function flattenedArray(arr) {
  const result = [];

  function flattenHelper(subArr) {
    let counter = 0;
    while (counter < subArr.length) {
      if (Array.isArray(subArr[counter])) {
        flattenHelper(subArr[counter]);
      } else {
        result.push(subArr[counter]);
      }
      counter++;
    }
  }
  flattenHelper(arr);
  return result;
}

console.log(flattenedArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// flatten Object
const nestedObject = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function flattenObject(obj) {
  const result = {};

  function helperFunc(subObj, parentKey = "") {
    for (let key in subObj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      const value = subObj[key];

      if (typeof value === "object") {
        return helperFunc(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  }
  helperFunc(obj);
  return result;
}

console.log(flattenObject(nestedObject)); // { A: "12", B: 23, "C.P": 23, "C.O.L": 56, "C.Q": [1, 2] }

//  Deep clone an object
function deepClone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle circular references
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};

  visited.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], visited);
    }
  }
  return clone;
}
