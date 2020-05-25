// https://leetcode.com/problems/insert-into-a-binary-search-tree/
var insertIntoBST = function (node, val) {
  if (!node) {
    return {
      val,
      left: null,
      right: null,
    };
  }

  if (val > node.val) {
    // go right
    node.right = insertIntoBST(node.right, val);
  } else {
    // go left
    node.left = insertIntoBST(node.left, val);
  }

  return node;
};

var node = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1 },
    right: { val: 3 },
  },
  right: {
    val: 7,
  },
};

var val = 5;

var result = insertIntoBST(node, val);

console.log(result);
