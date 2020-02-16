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
var inorderTraversal = function(node) {
  if (!node) return [];

  var result = [];

  function inOrder(node) {
    node.left && inOrder(node.left);
    result.push(node.val);
    node.right && inOrder(node.right);
  }
  inOrder(node);

  return result;
};

var node = {
  val: 2,
  left: {
    val: 1,
  },
  right: {
    val: 3,
  },
};

var node = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3,
    },
  },
};

var node = null;

var node = {
  val: 123123,
};

console.log(inorderTraversal(node));
