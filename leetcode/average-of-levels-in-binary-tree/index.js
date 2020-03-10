/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(node) {
  if (!node) return [];

  var sums = [];
  var counts = [];
  var result = [];
  helpers(node, sums, counts, 0);

  for (var i = 0; i < sums.length; i++) {
    result.push(sums[i] / counts[i]);
  }

  return result;
};

function helpers(node, sums, counts, level) {
  if (!node) return;

  if (sums.length <= level) {
    sums.push(0);
    counts.push(0);
  }
  sums[level] = sums[level] + node.val;
  counts[level] = counts[level] + 1;

  helpers(node.left, sums, counts, level + 1);
  helpers(node.right, sums, counts, level + 1);
}

// Solution 2 => BFS using iterative way
/*
 * Solution 3 => BFS using recursive way (slow)
 * function getHeight => recursively calling to get height
 * function bfs traverse to build sum array
 * function bfs traverse to build count array
 */

// [ 3, 14.5, 11 ]
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

var node = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 1,
    },
    right: {
      val: 8,
    },
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

console.log(averageOfLevels(node));
