// https://leetcode.com/problems/contains-duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (map[curr] !== undefined) {
      return true;
    }
    map[curr] = i;
  }

  return false;
};
