// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// nested bfs
var maxLevelSum = function (node) {
  var queue = [node];
  var maxSum = Number.MIN_SAFE_INTEGER;
  var maxLevel = 0;
  var level = 0;
  var sum;
  var length;
  var temp;

  while (queue.length) {
    sum = 0;
    length = queue.length;
    level++;

    for (var i = 0; i < length; i++) {
      temp = queue.shift();
      sum += temp.val;

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    if (sum > maxSum) {
      maxLevel = level;
      maxSum = sum;
    }
  }
  return maxLevel;
};

var node = {
  val: 1,
  left: {
    val: 7,
    left: {
      val: 7,
    },
    right: {
      val: -8,
    },
  },
  right: {
    val: 0,
  },
};

var node = {
  val: 9,
  left: {
    val: 8,
    left: {
      val: 1,
    },
  },
};

var node = {
  val: 99,
};

console.log(maxLevelSum(node));
