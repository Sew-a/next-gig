function hasPairwithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return arr[left] + " + " + arr[right] + " = " + target;
        }
        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

console.log(hasPairwithSum([1, 5, 14, 17, 21], 22));