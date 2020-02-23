/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  if (!root) return null;

  var inOrderArray = [];

  function inOrder(root) {
    if (!root) return null;

    root.left && inOrder(root.left);

    inOrderArray.push(root.val);

    root.right && inOrder(root.right);
  }

  function insertToRightSide(node, data) {
    if (!node) {
      return { val: data, left: null, right: null };
    } else {
      node.right = insert(node.right, data);
    }
    return node;
  }

  inOrder(root);
  var result;

  for (var i = 0; i < inOrderArray.length; i++) {
    result = insertToRightSide(result, inOrderArray[i]);
  }

  return result;
};

var node = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 3
  }
};

// var node = {
//   val: 5,
//   left: {
//     val: 3,
//     left: {
//       val: 2,
//       left: {
//         val: 1
//       }
//     },
//     right: {
//       val: 4
//     }
//   },
//   right: {
//     val: 6,
//     right: {
//       val: 8,
//       left: {
//         val: 7
//       },
//       right: {
//         val: 9
//       }
//     }
//   }
// };

var node = null;

console.log(increasingBST(node));
