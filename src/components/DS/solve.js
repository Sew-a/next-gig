// Two Sum problem solution
function twoSum(nums, target) {
  const sortedArray = nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      return [sortedArray[left], sortedArray[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoSum([8, 1, 7, 5, -9, -11, 3], 10)); // Output: [3, 7]  O()(n log n) due to sorting and two-pointer traversal

//  Alternative solution using a hash map for O(n) time complexity
function twoSum(nums, target) {
  const map = {};

  for (let num of nums) {
    const complement = target - num;
    if (map[complement] !== undefined) {
      return [complement, num];
    }
    map[num] = true;
  }
  return [];
}

console.log(twoSum([8, 1, 7, 5, -9, -11, 3], 10)); // [7, 3]

// 3sum problem solution

function threeSum(nums, target) {
  let result = [];
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const complement = target - (nums[i] + nums[j]);
      if (complement in hash) {
        result.push([nums[i], nums[j], complement]);
      } else {
        hash[nums[j]] = true;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); // Output: [[-1, -1, 2], [-1, 0, 1]] O(n^2) due to sorting and two-pointer traversal



// Move Zeroes to end of array solution

function moveZeroes(nums) {
  let count = 0; // Count of non-zero elements

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  console.log(nums); // Debugging: Check the state of the array after moving non-zero elements

  // Fill the remaining positions with zeros
  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0] O(n) due to single pass through the array