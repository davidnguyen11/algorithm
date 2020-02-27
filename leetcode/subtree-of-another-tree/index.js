/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (!s && !t) return true;
  if (s && !t) return false;
  if (!s && t) return false;

  if (isIdentical(s, t)) {
    return true;
  }

  var left = isSubtree(s.left, t);
  var right = isSubtree(s.right, t);

  return left || right;
};

var isIdentical = function(s, t) {
  if (!s && !t) return true;
  if (s && !t) return false;
  if (!s && t) return false;
  if (s && t && s.val !== t.val) return false;

  var left = isIdentical(s.left, t.left);
  var right = isIdentical(s.right, t.right);
  return left && right;
};

// var s = {
//   val: 1,
//   left: {
//     val: 2
//   },
//   right: {
//     val: 3
//   }
// };

// var t = {
//   val: 1,
//   left: {
//     val: 2
//   },
//   right: {
//     val: 3
//   }
// };

// var s = {
//   val: 3,
//   left: {
//     val: 4,
//     left: {
//       val: 1
//     },
//     right: {
//       val: 2
//     }
//   },
//   right: {
//     val: 5
//   }
// };

// var t = {
//   val: 4,
//   left: {
//     val: 1
//   },
//   right: {
//     val: 2
//   }
// };

var s = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1
    },
    right: {
      val: 2,
      left: {
        val: 0
      }
    }
  },
  right: {
    val: 5
  }
};

var t = {
  val: 4,
  left: {
    val: 1
  },
  right: {
    val: 2
  }
};

console.log(isSubtree(s, t));
