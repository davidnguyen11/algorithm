/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return null;

  var values = [];
  function preOrder(node) {
    if (!node) return null;
    if (node.val >= L && node.val <= R) {
      values.push(node.val);
    }
    preOrder(node.left);
    preOrder(node.right);
  }

  function insert(node, data) {
    if (!node) {
      return {
        val: data,
        left: null,
        right: null
      };
    } else {
      if (data < node.val) {
        node.left = insert(node.left, data);
      }
      if (data > node.val) {
        node.right = insert(node.right, data);
      }
    }
    return node;
  }

  preOrder(root, L, R);
  var result;
  for (let i = 0; i < values.length; i++) {
    result = insert(result, values[i]);
  }

  return result;
};

var node = {
  val: 3,
  left: {
    val: 0,
    right: {
      val: 2,
      left: {
        val: 1
      }
    }
  },
  right: {
    val: 4
  }
};

var L = 1;
var R = 3;

var node = {
  val: 1,
  left: {
    val: 0
  },
  right: {
    val: 2
  }
};

var L = 1;
var R = 2;

console.log(trimBST(node, L, R));
