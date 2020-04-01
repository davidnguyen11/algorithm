/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (node) {
  if (!node) return [];
  var arr = [];

  function helper(node, temp) {
    if (!node) return;
    temp.push(node.val);

    helper(node.left, temp);

    if (!node.left && !node.right) {
      arr.push(temp.join('->'));
    }

    helper(node.right, temp);
    temp.pop();
  }
  helper(node, []);

  return arr;
};

var node = {
  val: 1,
  left: {
    val: 2,
    right: { val: 5 }
  },
  right: {
    val: 3
  },
};



console.log(binaryTreePaths(node));
