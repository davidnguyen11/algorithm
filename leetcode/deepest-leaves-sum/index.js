var deepestLeavesSum = function (node) {
  if (!node) return 0;
  var deepestLvl = getDeepestLevelOf(node, 1);
  var sum = 0;

  function preOrder(node, level) {
    if (!node) return;

    if (!node.left && !node.right && level === deepestLvl) {
      sum += node.val;
    }

    preOrder(node.left, level + 1);
    preOrder(node.right, level + 1);
  }

  preOrder(node, 1);
  return sum;
};

function getDeepestLevelOf(node, level) {
  if (!node) return 0;

  var left = getDeepestLevelOf(node.left, level + 1);
  var right = getDeepestLevelOf(node.right, level + 1);

  return Math.max(left, right) + 1;
}

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 7,
      }
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    right: {
      val: 6,
      right: {
        val: 8
      }
    },
  }
};

var node = {
  val: 20
}

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 7,
        left: {
          val: 99
        }
      }
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    right: {
      val: 6,
      right: {
        val: 8
      }
    },
  }
};


console.log(deepestLeavesSum(node));