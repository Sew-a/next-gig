//   Array reducer
const items = ["apple", "banana", "orange", "apple", "banana", "banana"];

const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 3, orange: 1 }

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const toObject = users.reduce((acc, user) => {
  acc[user.name] = user.age;
  return acc;
}, {});

console.log(toObject); // { Alice: 30, Bob: 25, Charlie: 35 }

function flattenedArray(arr) {
  console.log(arr);
  return arr.reduce((acc, elem) => {
    return Array.isArray(elem)
      ? acc.concat(flattenedArray(elem))
      : acc.concat(elem);
  }, []);
}

console.log(flattenedArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// valid anagram - hash table

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Map = {};
  const str2Map = {};

  for (let char of str1) {
    if (str1Map[char]) {
      str1Map[char]++;
    } else {
      str1Map[char] = 1;
    }
  }

  for (let char of str2) {
    if (str2Map[char]) {
      str2Map[char]++;
    } else {
      str2Map[char] = 1;
    }
  }

  for (let char in str1Map) {
    if (str1Map[char] !== str2Map[char]) {
      return false;
    }
    return true;
  }
}

console.log(isAnagram("listen", "silent")); // true

// first and last index in sorted array
function findFirstAndLastIndex(arr, target) {
  if (arr.length === 0) return [-1, -1];

  function findBoundary(isFirst) {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        boundaryIndex = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return boundaryIndex;
  }

  return [findBoundary(true), findBoundary(false)];
}

console.log(findFirstAndLastIndex([1, 2, 2, 2, 2, 3, 4], 2)); // [1, 4]


// kth largest element in an array
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

console.log(findKthLargest([3, 2, 1, 3, 8, 5, 5, 6, 4], 4));