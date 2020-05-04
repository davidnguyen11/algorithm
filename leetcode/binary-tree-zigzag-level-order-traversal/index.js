// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
var zigzagLevelOrder = function (node) {
  if (!node) return [];
  var queue = [{ node, level: 0 }];
  var temp;
  var result = [];

  while (queue.length > 0) {
    temp = queue.shift();
    if (!result[temp.level]) {
      result[temp.level] = [];
    }
    if (temp.level % 2 !== 0) {
      result[temp.level].push(temp.node.val);
    } else {
      result[temp.level].unshift(temp.node.val);
    }

    if (temp.node.left) {
      queue.unshift({ node: temp.node.left, level: temp.level + 1 });
    }

    if (temp.node.right) {
      queue.unshift({ node: temp.node.right, level: temp.level + 1 });
    }
  }
  return result;
};

var node = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: { val: 10 },
      right: { val: 21 },
    },
    right: {
      val: 7,
      left: { val: 30 },
      right: { val: 40 },
    },
  },
};

console.log(zigzagLevelOrder(node));
