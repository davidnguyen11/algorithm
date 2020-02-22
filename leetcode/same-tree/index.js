/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true;

  if ((!p && q) || (p && !q)) return false;

  if (p.val !== q.val) {
    return false;
  }

  var left = isSameTree(p.left, q.left);
  var right = isSameTree(p.right, q.right);

  return left && right;
};

var p = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
};

var q = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
};

var p = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
};

var q = {
  val: 1,
  left: {
    val: 1
  },
  right: {
    val: 3,
    left: {
      val: 5
    },
    right: {
      val: 4
    }
  }
};

var p = null;
var q = null;

var p = {
  val: 1,
  left: {
    val: 1
  },
  right: {
    val: 3
  }
};

var q = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
};

console.log(isSameTree(p, q));
