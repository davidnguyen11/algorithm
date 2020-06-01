// https://leetcode.com/problems/delete-leaves-with-a-given-value/
var removeLeafNodes = function (node, target) {
  if (!node) return null;

  node.left = removeLeafNodes(node.left, target);
  node.right = removeLeafNodes(node.right, target);

  if (isLeaf(node) && node.val === target) {
    return null;
  }

  return node;
};

function isLeaf(node) {
  return !node.left && !node.right;
}

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 2,
    },
  },
  right: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
    },
  },
};

var target = 2;

// var node = {
//   val: 1,
//   left: { val: 1 },
//   right: { val: 1 },
// };
// var target = 1;

console.log(removeLeafNodes(node, target));
