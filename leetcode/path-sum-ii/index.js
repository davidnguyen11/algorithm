/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (node, sum) {
  if (!node) return [];

  var arr = [];
  var temp = [];

  function helper(node, tempSum) {
    if (!node) return;

    temp.push(node.val);
    tempSum += node.val;

    helper(node.left, tempSum);

    if (!node.left && !node.right) {
      if (tempSum === sum) {
        arr.push([...temp]);
        tempSum = 0;
      } else {
        tempSum -= node.val;
      }
    }

    helper(node.right, tempSum);
    temp.pop();
  }

  helper(node, 0);
  return arr;
};

var node = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7 },
      right: { val: 2 }
    }
  },
  right: {
    val: 8,
    left: {
      val: 13,
    },
    right: {
      val: 4,
      left: { val: 5 },
      right: { val: 1 }
    }
  }
};

var sum = 22;

console.log(pathSum(node, sum));
