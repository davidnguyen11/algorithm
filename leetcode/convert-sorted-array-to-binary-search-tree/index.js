/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || nums.length === 0) return null;
  var pivot = Math.floor(nums.length / 2);

  var leftArr = [];
  for (var i = 0; i < pivot; i++) {
    leftArr.push(nums[i]);
  }

  var rightArr = [];
  for (var i = pivot + 1; i < nums.length; i++) {
    rightArr.push(nums[i]);
  }

  return {
    val: nums[pivot],
    left: sortedArrayToBST(leftArr) || null,
    right: sortedArrayToBST(rightArr) || null,
  };
};

var nums = [-10, -3, 0, 5, 9];
var nums = [-10, -3, -2, 0, 5, 9];
var nums = [1, 2];
var nums = null;
var nums = [];
var nums = [1];

console.log(sortedArrayToBST(nums));
