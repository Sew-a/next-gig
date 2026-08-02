// Reverse a string
function reverseString(str) {
  let reversed = "";

  for (let char of str) {
    // O(n)
    reversed = char + reversed;
  }
  return reversed;
  // or str.split('').reverse().join('');
}

// console.log(reverseString("Hi"));

//  Palindrome check
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// console.log(isPalindrome("madam")); // true

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}

console.log(maxChar("aabccccccb 2333332"));

function chunkArray(arr, size) {
  const result = [];
  let number = 0;

  while (number < arr.length) {
    result.push(arr.slice(number, number + size));
    number += size;
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

function capitalizeWords(str) {
  const result = [];
  const words = str.split(" ");
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}
console.log(capitalizeWords("hey man nice shoot"));

// binary sreach

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1


function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const map = {};
  for (let char of s) map[char] = (map[char] || 0) + 1;
  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
} 

console.log(isAnagram("listen", "silent")); // true