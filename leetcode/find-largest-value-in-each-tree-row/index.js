// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
// nested bfs
var largestValues = function (node) {
  var result = [];
  var queue = [node];

  while (queue.length) {
    var list = [];
    var length = queue.length;

    for (var i = 0; i < length; i++) {
      var temp = queue.shift();
      list.push(temp.val);

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    result.push(Math.max(...list));
  }

  return result;
};

var node = {
  val: 1,
  left: {
    val: 3,
    left: { val: 5 },
    right: { val: 3 },
  },
  right: {
    val: 2,
    right: { val: 9 },
  },
};

console.log(largestValues(node));
