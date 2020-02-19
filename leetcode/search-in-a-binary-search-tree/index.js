/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;

  function inOrder(root) {
    if (!root) return null;

    if (root.val === val) {
      return root;
    }

    if (root.val > val && root.left) {
      return searchBST(root.left, val);
    }

    if (root.val < val && root.right) {
      return searchBST(root.right, val);
    }
  }
  var result = inOrder(root);

  return result === undefined ? null : result;
};

var node = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 7
  }
};

var val = 2;
// var val = 5;

console.log(searchBST(node, val));
