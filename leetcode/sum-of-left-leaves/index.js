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
var sumOfLeftLeaves = function(node) {
  if (!node) return 0;

  var sum = 0;
  if (isLeaf(node.left)) {
    sum += node.left.val;
  }

  return sum + sumOfLeftLeaves(node.left) + sumOfLeftLeaves(node.right);
};

function isLeaf(node) {
  return node && !node.left && !node.right;
}

var node = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};

var node = {
  val: 3,
};

var node = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 5,
    },
  },
};

var node = {
  val: 3,
  right: {
    val: 4,
    right: {
      val: 5,
    },
  },
};

var node = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 5,
    },
  },
  right: {
    val: 10,
    left: {
      val: 1,
    },
  },
};

console.log(sumOfLeftLeaves(node));
