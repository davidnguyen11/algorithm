// https://leetcode.com/problems/find-all-the-lonely-nodes/
var getLonelyNodes = function (node) {
  var result = [];
  function dfs(node) {
    if (!node) return [];

    if (node.left && !node.right) {
      result.push(node.left.val);
    } else if (!node.left && node.right) {
      result.push(node.right.val);
    }

    dfs(node.left);
    dfs(node.right);
  }
  dfs(node);
  return result;
};

var node = {
  val: 11,
  left: {
    val: 99,
    left: {
      val: 77,
      left: {
        val: 55,
        left: {
          val: 33,
        },
      },
    },
  },
  right: {
    val: 88,
    right: {
      val: 66,
      right: {
        val: 44,
        right: {
          val: 22,
        },
      },
    },
  },
};

// var node = {
//   val: 1,
//   left: {
//     val: 2,
//     right: {
//       val: 4,
//     },
//   },
//   right: {
//     val: 3,
//   },
// };

var node = {
  val: 1,
};

console.log(getLonelyNodes(node));
