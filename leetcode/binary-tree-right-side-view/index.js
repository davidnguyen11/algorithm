// https://leetcode.com/problems/binary-tree-right-side-view/
var rightSideView = function (node) {
  if (!node) return [];
  var queue = [node];
  var result = [];
  var list;
  var temp;

  while (queue.length) {
    list = [];
    var length = queue.length;

    for (var i = 0; i < length; i++) {
      temp = queue.shift();
      list.push(temp.val);

      if (temp.left) {
        queue.push(temp.left);
      }

      if (temp.right) {
        queue.push(temp.right);
      }
    }

    if (list.length) {
      result.push(list[list.length - 1]);
    }
  }

  return result;
};

var node = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    right: {
      val: 4,
    },
  },
};

var node = null;

var node = {
  val: 1,
};

console.log(rightSideView(node));
