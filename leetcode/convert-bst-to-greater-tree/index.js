/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (node) {
  if (!node) return null;

  var sum = 0;
  function helper(node) {
    if (!node) return null;

    helper(node.right);

    sum = sum + node.val;

    node.val = sum;

    helper(node.left);
  }

  helper(node);

  return node
};


var node = {
  val: 5,
  left: {
    val: 3,
    left: { val: 1 },
    right: { val: 4 },
  },
  right: {
    val: 9,
    left: { val: 7 },
    right: { val: 15 }
  },
};

// var node = {
//   val: 5,
//   left: { val: 2 },
//   right: { val: 13 }
// };

console.log(JSON.stringify(convertBST(node), null, 2));