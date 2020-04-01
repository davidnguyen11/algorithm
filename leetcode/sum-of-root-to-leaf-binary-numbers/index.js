/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (node) {
  if (!node) return 0;
  var sum = 0;

  function helper(node, arr) {
    if (!node) return;
    arr.push(node.val);

    helper(node.left, arr);

    if (!node.left && !node.right) {
      sum += parseInt(arr.join(''), 2);
    }

    helper(node.right, arr);
    arr.pop();
  }
  helper(node, []);
  return sum;
};


var node = {
  val: 1,
  left: {
    val: 0,
    left: { val: 0 },
    right: { val: 1 }
  },
  right: {
    val: 1,
    left: { val: 0 },
    right: { val: 1 }
  },
};

console.log(sumRootToLeaf(node));
