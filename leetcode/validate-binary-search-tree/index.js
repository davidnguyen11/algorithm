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
var isValidBST = function(node) {
  if (!node) return true;

  var arr = [];

  function inOrder(node) {
    if (!node) return [];
    node.left && inOrder(node.left);
    arr.push(node.val);
    node.right && inOrder(node.right);
  }

  inOrder(node);

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }

  return true;
};

// true
var node = {
  val: 2,
  left: {
    val: 1,
  },
  right: {
    val: 3,
  },
};

// false
var node = {
  val: 5,
  left: {
    val: 1,
  },
  right: {
    val: 4,
    left: {
      val: 3,
    },
    right: {
      val: 6,
    },
  },
};

// true
var node = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
    },
    right: {
      val: 7,
    },
  },
  right: {
    val: 15,
    right: {
      val: 18,
    },
  },
};

// false
var node = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
    },
    right: {
      val: 7,
    },
  },
  right: {
    val: 15,
    right: {
      val: 13,
    },
  },
};

// true
var node = {
  val: 2929292,
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
        val: 20,
      },
    },
  },
  right: {
    val: 15,
  },
};

var node = {
  val: 1,
  left: {
    val: 1,
  },
}

console.log(isValidBST(node));
