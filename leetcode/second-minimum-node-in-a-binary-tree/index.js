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
var findSecondMinimumValue = function(node) {
  function finMin(node) {
    var minLeft = Infinity;
    if (node && node.left) {
      minLeft = finMin(node.left);
    }

    var minRight = Infinity;
    if (node && node.right) {
      minRight = finMin(node.right);
    }
    return Math.min(node.val, minLeft, minRight);
  }

  var firstMin = finMin(node);
  var secondMin = Infinity;
  
  function findSecondMin(node) {
    if (!node) return -1;

    if (node.val < secondMin && node.val !== firstMin) {
      secondMin = node.val;
    }

    if (node && node.left) {
      findSecondMin(node.left);
    }

    if (node && node.right) {
      findSecondMin(node.right);
    }
    return secondMin;
  }
  var result = findSecondMin(node);
  return result === Infinity ? -1 : result;
};


var node = {
  val: 6,
  left: {
    val: 4,
    left: {
      val: 4,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 5,
    right: {
      val: 5,
    },
  },
};

var node = {
  val: 2,
  left: {
    val: 2
  },
  right: {
    val: 5,
    left: {
      val: 5
    },
    right: {
      val: 7
    },
  },
};

var node = {
  val: 2,
  left: {
    val: 2,
  },
  right: {
    val: 2
  },
};

console.log(findSecondMinimumValue(node));