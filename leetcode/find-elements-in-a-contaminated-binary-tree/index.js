// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
var FindElements = function (node) {
  // revert a binary tree
  // left node => 2 * parent + 1
  // right node => 2 * parent + 2
  var self = this;
  self.node = revert(node);
};

function revert(node) {
  if (!node) return null;
  node.val = 0;
  preOrder(node);
  return node;
}

function preOrder(node) {
  if (!node) return;

  if (node.left) {
    node.left.val = node.val * 2 + 1;
  }

  if (node.right) {
    node.right.val = node.val * 2 + 2;
  }

  preOrder(node.left);
  preOrder(node.right);
}

FindElements.prototype.find = function (target) {
  var self = this;
  return find(self.node, target);
};

function find(node, target) {
  if (!node) return false;

  if (node.val === target) {
    return true;
  }

  var left = find(node.left, target);
  var right = find(node.right, target);

  return left || right;
}

// var node = {
//   val: -1,
//   right: {
//     val: -1
//   }
// };

// var f = new FindElements(node);
// console.log(f.find(1)); // return False
// console.log(f.find(2)); // return True

// var node = {
//   val: -1,
//   right: {
//     val: -1,
//     left: {
//       val: -1,
//       left: {
//         val: -1
//       },
//     },
//   }
// };

// var f = new FindElements(node);
// console.log(f.find(2)); // return True
// console.log(f.find(3)); // return False
// console.log(f.find(4)); // return False
// console.log(f.find(5)); // return True

var node = {
  val: -1,
  left: {
    val: -1,
    left: {
      val: -1,
    },
    right: {
      val: -1,
    },
  },
  right: {
    val: -1,
  }
};

var f = new FindElements(node);
console.log(f.find(1)); // return True
console.log(f.find(3)); // return True
console.log(f.find(5)); // return False
