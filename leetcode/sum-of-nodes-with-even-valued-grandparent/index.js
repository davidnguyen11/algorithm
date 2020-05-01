// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
var sumEvenGrandparent = function (node) {
  var sum = 0;

  function preOrder(node) {
    if (!node) return 0;

    if (node.val % 2 === 0) {
      if (node.left) {
        if (node.left.left) {
          sum += node.left.left.val;
        }

        if (node.left.right) {
          sum += node.left.right.val;
        }
      }

      if (node.right) {
        if (node.right.left) {
          sum += node.right.left.val;
        }

        if (node.right.right) {
          sum += node.right.right.val;
        }
      }
    }
    preOrder(node.left);
    preOrder(node.right);
  }

  preOrder(node);
  return sum;
};

var node = {
  val: 6,
  left: {
    val: 7,
    left: {
      val: 2,
      left: { val: 9 },
    },
    right: {
      val: 7,
      left: { val: 1 },
      right: { val: 4 },
    },
  },
  right: {
    val: 8,
    left: { val: 1 },
    right: {
      val: 3,
      right: { val: 5 },
    },
  },
};

console.log(sumEvenGrandparent(node));
