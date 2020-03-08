/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(node, p, q) {
  if (!node) return null;

  if (node.val > p.val && node.val > q.val) {
    return lowestCommonAncestor(node.left, p, q);
  } else if (node.val < p.val && node.val < q.val) {
    return lowestCommonAncestor(node.right, p, q);
  }
  return node;
};

var node = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
    },
    right: {
      val: 4,
      left: {
        val: 3,
      },
      right: {
        val: 5,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
    },
    right: {
      val: 9,
    },
  },
};

// 6
var p = { val: 2 };
var q = { val: 8 };

// 2
var p = { val: 0 };
var q = { val: 5 };

// 2
var p = { val: 2 };
var q = { val: 4 };

// 6
var p = { val: 4 };
var q = { val: 7 };

// 6
var p = { val: 3 };
var q = { val: 9 };

// 9
var p = { val: 9 };
var q = { val: 9 };

// var node = {
//   val: 2,
//   left: {
//     val: 1,
//   },
// };

// 2
// var p = { val: 2 };
// var q = { val: 1 };

var node = {
  val: 2,
  right: {
    val: 3,
  },
};

var p = { val: 2 };
var q = { val: 3 };

console.log(lowestCommonAncestor(node, p, q));
