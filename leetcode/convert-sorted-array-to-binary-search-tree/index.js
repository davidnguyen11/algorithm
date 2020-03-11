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

// Solution 2
// var sortedArrayToBST = function(nums) {
//   if (!nums || nums.length === 0) return null;
//   return helper(nums, 0, nums.length - 1);
// };

// function helper(nums, start, end) {
//   if (!nums || nums.length === 0 || start > end) return  null;
//   if (start === end) {
//     return {
//       val: nums[start],
//       left: null,
//       right: null,
//     }
//   }

//   var mid = Math.floor((start + end) / 2);

//   return {
//     val: nums[mid],
//     left: helper(nums, start, mid - 1) || null,
//     right: helper(nums, mid + 1, end) || null,
//   }
// }

var nums = [-10, -3, 0, 5, 9];
var nums = [-10, -3, -2, 0, 5, 9];
var nums = [1, 2];
var nums = null;
var nums = [];
var nums = [1];

console.log(sortedArrayToBST(nums));
