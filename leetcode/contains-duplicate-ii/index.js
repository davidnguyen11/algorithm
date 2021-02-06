// https://leetcode.com/problems/contains-duplicate-ii
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Hash table
var containsNearbyDuplicate = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (map[curr] !== undefined) {
      if (Math.abs(i - map[curr]) <= k) {
        return true;
      }
    }
    map[curr] = i;
  }

  return false;
};
