// https://leetcode.com/problems/contains-duplicate-ii
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const newNums = [];

  for (let i = 0; i < nums.length; i++) {
    newNums.push({ index: i, val: nums[i] });
  }

  newNums.sort((a, b) => a.val - b.val);

  for (let i = 0; i < newNums.length; i++) {
    const pos = search(newNums, i + 1, newNums.length - 1, newNums[i]);

    if (pos !== -1 && Math.abs(newNums[pos].index - newNums[i].index) <= k) {
      return true;
    }
  }

  return false;
};

function search(nums, left, right, target) {
  if (left > right) return -1;
  const mid = Math.floor(left + (right - left) / 2);

  if (nums[mid].val === target.val) return mid;

  if (nums[mid].val < target) return search(nums, mid + 1, right, target);
  return search(nums, left, mid - 1, target);
}
