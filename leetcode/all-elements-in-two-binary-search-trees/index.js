// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
var getAllElements = function (node1, node2) {
  function inOrder(node, arr) {
    if (!node) {
      return;
    }

    inOrder(node.left, arr);

    arr.push(node.val);

    inOrder(node.right, arr);
  }

  var arr = [];
  inOrder(node1, arr);
  inOrder(node2, arr);

  arr.sort(function (a, b) {
    return a - b;
  });

  return arr;
};

var node1 = {
  val: 2,
  // left: { val: 1 },
  right: { val: 4 },
};

var node2 = {
  val: 1,
  left: { val: 0 },
  right: { val: 3 },
};

console.log(getAllElements(node1, node2));
