// https://leetcode.com/problems/closest-binary-search-tree-value
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let min = Number.MAX_VALUE;
  let minGap = Number.MAX_VALUE;

  function helper(root) {
    if (!root) return;

    const temp = Math.abs(root.val - target);
    if (temp < minGap) {
      min = root.val;
      minGap = temp;
    }

    if (root.val < target) helper(root.right, target);
    helper(root.left, target);
  }

  helper(root);

  return min;
};
