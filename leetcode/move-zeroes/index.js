// https://leetcode.com/problems/move-zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0;
  let r = 1;

  while (r < nums.length) {
    if (nums[l] === 0 && nums[r] !== 0) {
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
    }

    if (nums[l] !== 0) {
      l++;
    }

    r++;
  }
};