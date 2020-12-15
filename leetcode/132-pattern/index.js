// https://leetcode.com/problems/132-pattern/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] >= nums[j]) break;
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] > nums[j]) break;

        if (nums[k] > nums[i] && nums[j] > nums[k]) {
          return true;
        }
      }
    }
  }
  return false;
};

var nums = [1, 2, 3, 4];
var nums = [3, 1, 4, 2];
var nums = [-1, 3, 2, 0]

console.log(find132pattern(nums));
