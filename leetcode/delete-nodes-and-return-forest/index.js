// https://leetcode.com/problems/delete-nodes-and-return-forest/
var delNodes = function (node, to_delete) {
  if (!node) return [];
  if (!to_delete.length) return [node];

  var forest = [];
  var set = new Set(to_delete);

  function dfs(node) {
    if (!node) return null;

    node.left = dfs(node.left);
    node.right = dfs(node.right);

    if (set.has(node.val)) {
      if (node.left) {
        forest.push(node.left);
      }

      if (node.right) {
        forest.push(node.right);
      }
      return null;
    }

    return node;
  }

  dfs(node);

  if (!set.has(node.val)) {
    forest.push(node);
  }

  return forest;
};

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
};

// var to_delete = [3, 5];
// var to_delete = [5];
// var to_delete = [1];
// var to_delete = [3];
// var to_delete = [1, 2, 3, 4, 5, 6];
// var to_delete = [1, 2, 3, 4, 5, 6, 7];

console.log(delNodes(node, to_delete));