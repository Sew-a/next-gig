
// Longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  let l = 0;
  let max = 0;
  let seen = new Map();

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      l = Math.max(l, seen.get(s[i]) + 1);
    }
    seen.set(s[i], i);
    max = Math.max(max, i - l + 1);
  }

  return max;
}


// Container with most water

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}