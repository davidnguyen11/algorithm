/**
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
function isMirror(q, t) {
  if ((q && !t) || (!q && t)) return false;
  if (!q && !t) return true;

  if (q.val !== t.val) return false;

  var left = isMirror(q.left, t.right);
  var right = isMirror(q.right, t.left);
  return left && right;
}

// false
var q = {
  val: 2
};

var t = {
  val: 3
};

// true
var q = {
  val: 2,
  left: {
    val: 3
  },
  right: {
    val: 4
  }
};

var t = {
  val: 2,
  left: {
    val: 4
  },
  right: {
    val: 3
  }
};

var q = {
  val: 2,
  left: {
    val: 3
  },
  right: {
    val: 4
  }
};

var t = {
  val: 2,
  left: {
    val: 4
  },
  right: {
    val: 3,
    left: {
      val: 7
    },
    right: {
      val: 8
    }
  }
};

var q = {
  val: 2,
  left: {
    val: 3,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  },
  right: {
    val: 4,
    left: {
      val: 6
    },
    right: {
      val: 5
    }
  }
};

var t = {
  val: 2,
  left: {
    val: 4,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  },
  right: {
    val: 3,
    left: {
      val: 6
    },
    right: {
      val: 5
    }
  }
};

console.log(isMirror(q, t));
