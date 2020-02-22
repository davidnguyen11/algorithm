/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// Solution 1 - using sorted array
// var isValidBST = function(node) {
//   if (!node) return true;

//   var arr = [];

//   function inOrder(node) {
//     if (!node) return [];
//     node.left && inOrder(node.left);
//     arr.push(node.val);
//     node.right && inOrder(node.right);
//   }

//   inOrder(node);

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] <= arr[i - 1]) {
//       return false;
//     }
//   }

//   return true;
// };

// Solution 2 - using condition
// condition 1: binary tree
// condition 2: each node must inside the range [min, max]
var isValidBST = function(node) {
  if (!node) return true;

  function helper(node, min, max) {
    if (!node) return true;

    if (
      (node.right && node.val >= node.right.val) ||
      (node.left && node.val <= node.left.val) ||
      node.val <= min ||
      node.val >= max
    ) {
      return false;
    }

    // left
    var left = helper(node.left, min, node.val);
    // right
    var right = helper(node.right, node.val, max);

    return left && right;
  }

  var result = helper(node, -Infinity, Infinity);
  return result;
};

// true
var node = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 3
  }
};

// false
var node = {
  val: 5,
  left: {
    val: 1
  },
  right: {
    val: 4,
    left: {
      val: 3
    },
    right: {
      val: 6
    }
  }
};

// true
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

// false
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
      val: 13
    }
  }
};

// true
var node = {
  val: 2929292
};

// true
var node = null;

// false
var node = {
  val: 10,
  left: {
    val: 5,
    right: {
      val: 6,
      right: {
        val: 20
      }
    }
  },
  right: {
    val: 15
  }
};

// false
var node = {
  val: 1,
  left: {
    val: 1
  }
};

// false
var node = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 4
    },
    right: {
      val: 11,
      left: {
        val: 9
      },
      right: {
        val: 12
      }
    }
  },
  right: {
    val: 15,
    left: {
      val: 13
    },
    right: {
      val: 16,
      left: {
        val: 14
      },
      right: {
        val: 17
      }
    }
  }
};

console.log(isValidBST(node));
