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
var isBalanced = function(node) {
  if (!node) return true;

  var left = getHeight(node.left);
  var right = getHeight(node.right);

  if (Math.abs(left - right) > 1) {
    return false;
  }

  return isBalanced(node.left) && isBalanced(node.right);
};

function getHeight(node) {
  if (!node) return 0;

  var countLeft = 0;
  var countRight = 0;

  if (node.left) {
    countLeft = getHeight(node.left);
  }

  if (node.right) {
    countRight = getHeight(node.right);
  }

  return Math.max(countLeft, countRight) + 1;
}

// false
var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
      },
      right: {
        val: 4,
      },
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 2,
  },
};

// true
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

// false
var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 5,
    },
    right: {
      val: 3,
      right: {
        val: 4,
      },
    },
  },
  right: {
    val: 2,
  },
};

// true
var node = null;

// false
var node = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
    },
  },
};

// true
var node = {
  val: 1,
};

var node = {
  val: 2,
  left: {
    val: 1,
  },
  right: {
    val: 3,
  },
};

var node = {
  val: 1,
  left: {
    val: 2,
  },
};

console.log(getHeight(node));
console.log(isBalanced(node));
