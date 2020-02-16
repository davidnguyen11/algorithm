/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(node) {
  if (!node) return [];

  var result = [];

  function preOrder(node) {
    result.push(node.val);
    node.left && preOrder(node.left);
    node.right && preOrder(node.right);
  }
  preOrder(node);

  return result;
};