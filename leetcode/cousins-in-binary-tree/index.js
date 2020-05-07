// var isCousins = function (node, x, y) {
//   if (hasSameParent(node, x, y)) {
//     return false;
//   }

//   var lvlX = getLevelOf(node, x, 1);
//   var lvlY = getLevelOf(node, y, 1);

//   return lvlX === lvlY;
// };

// function hasSameParent(node, x, y) {
//   if (!node) return false;

//   if (node.left && node.right) {
//     if ((node.left.val === x && node.right.val === y) || (node.left.val === y && node.right.val === x)) {
//       return true;
//     }
//   }

//   var left = hasSameParent(node.left, x, y);
//   var right = hasSameParent(node.right, x, y);

//   return left || right;
// }

// function getLevelOf(node, val, lvl) {
//   if (!node) return 0;

//   if (node.val === val) {
//     return lvl;
//   }

//   var level = getLevelOf(node.left, val, lvl + 1);
//   if (level !== 0) {
//     return level;
//   }

//   return getLevelOf(node.right, val, lvl + 1);
// }

// var isCousins = function (node, x, y) {
//   var parentX = {};
//   var parentY = {};
//   var lvlX = {};
//   var lvlY = {};

//   function preOrder(node, x, y, root, level) {
//     if (!node) return;

//     if (node.val === x) {
//       parentX = root;
//       lvlX = { level };
//     }

//     if (node.val === y) {
//       parentY = root;
//       lvlY = { level };
//     }

//     preOrder(node.left, x, y, node, level + 1);
//     preOrder(node.right, x, y, node, level + 1);
//   }

//   preOrder(node, x, y, {}, 1);

//   return parentX.val !== parentY.val && lvlX.level === lvlY.level;
// };

var isCousins = function (node, x, y) {
  var queue = [{ node, level: 0 }];
  var map = {
    [node.val]: {
      level: 0,
    },
  };
  var temp;
  var currentNode;
  var currentLevel;

  while (queue.length > 0) {
    temp = queue.shift();
    currentNode = temp.node;
    currentLevel = temp.level;

    if (currentNode.left) {
      queue.unshift({ node: currentNode.left, level: currentLevel + 1 });

      map[currentNode.left.val] = {
        level: currentLevel + 1,
        parent: currentNode.val,
      };
    }

    if (currentNode.right) {
      queue.unshift({ node: currentNode.right, level: currentLevel + 1 });

      map[currentNode.right.val] = {
        level: map[currentNode.val].level + 1,
        parent: currentNode.val,
      };
    }
  }

  if (map[x].level === map[y].level && map[x].parent !== map[y].parent) {
    return true;
  }
  return false;
};

var node = {
  val: 1,
  left: {
    val: 2,
    left: { val: 6 },
    right: { val: 4 },
  },
  right: {
    val: 3,
    right: { val: 5 },
  },
};

// var node = {
//   val: 1,
//   left: {
//     val: 2,
//   },
//   right: {
//     val: 3,
//     right: {
//       val: 4,
//       right: { val: 5 },
//     },
//   },
// };

console.log(isCousins(node, 2, 3));
