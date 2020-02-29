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
var isSymmetric = function(node) {
  if (!node) return true;
  return isMirror(node.left, node.right);
};

function isMirror(q, t) {
  if ((q && !t) || (!q && t)) return false;
  if (!q && !t) return true;

  if (q.val !== t.val) return false;

  var left = isMirror(q.left, t.right);
  var right = isMirror(q.right, t.left);
  return left && right;
}

// true
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
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 3
    }
  }
};

// false
var node = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 3
    }
  },
  right: {
    val: 2,
    right: {
      val: 3
    }
  }
};

// false
var node = {
  val: 1,
  left: {
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
  },
  right: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 3
    }
  }
};

var node = {
  val: 1,
  left: {
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
  },
  right: {
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
  }
};

console.log(isSymmetric(node));
