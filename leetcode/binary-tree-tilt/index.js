/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @return {number}
 */
var findTilt = function (node) {
  if (!node) return 0;
  var result = 0;

  function helper(node) {
    if (!node) return 0;
    var left = sum(node.left);
    var right = sum(node.right);

    result = result + Math.abs(left - right);

    helper(node.left);
    helper(node.right);
  }

  helper(node);

  return result;
};

function sum(node) {
  if (!node) return 0;

  var left = sum(node.left);
  var right = sum(node.right);

  return left + right + node.val;
}

/**
 * Solution 2
 * Combine sum all node values & calculate Tilt in 1 function
 */
var findTilt = function (node) {
  var result = 0;
  function helper(node) {
    if (!node) return 0;
    var left = helper(node.left);
    var right = helper(node.right);

    result += Math.abs(left - right);

    return left + right + node.val;
  }
  helper(node);
  return result;
}


var node = {
  val: 4,
  left: {
    val: 2,
    left: { val: 3 },
    right: { val: 5 }
  },
  right: {
    val: 9,
    right: { val: 7 }
  },
};

var node = {
  val: 1,
  left: {
    val: 2,
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

console.log(findTilt(node));