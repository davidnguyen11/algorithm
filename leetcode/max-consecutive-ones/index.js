// https://leetcode.com/problems/max-consecutive-ones/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let right = 0;
  let length = 0;
  let maxLength = 0;

  while (right < nums.length) {
    if (nums[right] === 1) {
      length++;
    }

    // will update when the current element is zero
    // or next element is end of array
    if (nums[right] === 0 || nums[right + 1] === undefined) {
      maxLength = Math.max(maxLength, length);
      length = 0;
    }

    right++;
  }

  return maxLength;
};