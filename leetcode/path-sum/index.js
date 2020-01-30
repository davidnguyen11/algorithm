/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * url: https://leetcode.com/problems/path-sum
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(node, sum) {
  if (!node) return false;

  var subSum = sum - node.val;
  if (!node.left && !node.right && subSum === 0) {
    return true;
  }

  // if the sum on the left === 0
  const isLeftValid = hasPathSum(node.left, subSum);
  // "or" the sum on the right === 0
  const isRightValid = hasPathSum(node.right, subSum);

  return isLeftValid || isRightValid;
};