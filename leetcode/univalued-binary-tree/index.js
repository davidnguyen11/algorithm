/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;
  var val = root.val;

  function helper(root) {
    if (!root) return true;

    if (root.val !== val) {
      return false
    }

    var left = helper(root.left);
    var right = helper(root.right);
    return left & right;
  }

  return helper(root);
};