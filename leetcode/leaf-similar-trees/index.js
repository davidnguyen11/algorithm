/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  var arr1 = [];
  var arr2 = [];

  function traverse(node, arr) {
    if (!node) return [];
    if (node && !node.left && !node.right) {
      arr.push(node.val);
    }
    traverse(node.left, arr);
    traverse(node.right, arr);
  }

  traverse(root1, arr1);
  traverse(root2, arr2);

  if (arr1.length !== arr2.length) return false;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

var root1 = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2,
      left: {
        val: 7
      },
      right: {
        val: 4
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 9
    },
    right: {
      val: 8
    }
  },
};

var root2 = {
  val: 99,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2,
      left: {
        val: 7
      },
      right: {
        val: 4
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 10,
      left: {
        val: 9
      },
    },
    right: {
      val: 8
    }
  },
};

console.log(leafSimilar(root1, root2));
