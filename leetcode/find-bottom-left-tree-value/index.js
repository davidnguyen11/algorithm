// https://leetcode.com/problems/find-bottom-left-tree-value/
// nested bfs
var findBottomLeftValue = function (node) {
  var queue = [node];
  var tree = [];
  var list;
  var temp;

  while (queue.length) {
    list = [];
    var length = queue.length;

    for (var i = 0; i < length; i++) {
      temp = queue.shift();
      list.push(temp);

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    if (list.length) {
      tree.push(list);
    }
  }

  if (tree.length === 1) {
    return tree[0][0].val;
  }

  return tree[tree.length - 1][0].val;
};

var node = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4 },
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 7,
      },
    },
    right: {
      val: 6,
    },
  },
};

// var node = {
//   val: 1,
// };

// var node = {
//   val: 1,
//   right: {
//     val: 1,
//   },
// };

// var node = {
//   val: 0,
//   right: {
//     val: -1,
//   },
// };

console.log(findBottomLeftValue(node));
