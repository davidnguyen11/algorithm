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
 * @return {number}
 */
var rangeSumBST = function(node, L, R) {
  if (!node) return 0;

  var sum = 0;
  if (node.val >= L && node.val <= R) {
    sum = sum + node.val;
  }

  if (node.left) {
    sum = sum + rangeSumBST(node.left, L, R);
  }

  if (node.right) {
    sum = sum + rangeSumBST(node.right, L, R);
  }

  return sum;
};

var node = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3
    },
    right: {
      val: 7
    }
  },
  right: {
    val: 15,
    right: {
      val: 18
    }
  }
};

var L = 7;
var R = 15;

var node = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 1
      }
    },
    right: {
      val: 7,
      left: {
        val: 6
      }
    }
  },
  right: {
    val: 15,
    left: {
      val: 13
    },
    right: {
      val: 18
    }
  }
};

var L = 6;
var R = 10;
console.log(rangeSumBST(node, L, R));
