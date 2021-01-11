// https://leetcode.com/problems/find-the-duplicate-number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const item = nums[i];
    const flag = search(nums, i + 1, length - 1, item);
    if (!flag) continue;

    return item;
  }
};

function search(arr, l, r, target) {
  if (l > r) return false;

  const mid = (l + (r - l) / 2) >> 0;

  if (arr[mid] === target) return true;

  if (arr[mid] < target)
    return search(arr, mid + 1, r, target);
  return search(arr, l, mid - 1, target);
}
