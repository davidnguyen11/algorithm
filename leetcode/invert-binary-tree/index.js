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
var invertTree = function(node) {
  if (!node) return null;

  var cloneRight = node.right ? { ...node.right } : null;
  var cloneLeft = node.left ? { ...node.left } : null;
  node.left = cloneRight;
  node.right = cloneLeft;

  invertTree(node.left);
  invertTree(node.right);
  return node;
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
    val: 7,
    left: {
      val: 6
    },
    right: {
      val: 9
    }
  }
};

var node = {
  val: 1,
  left: {
    val: 2
  }
};

var node = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 3
    }
  }
};

var node = {
  val: 99
};

var node = null;

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 7
  }
};

console.log(invertTree(node));
