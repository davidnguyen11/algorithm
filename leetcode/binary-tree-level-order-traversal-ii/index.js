/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrderBottom = function(node) {
//   if (!node) return [];
//   var queue = [node];
//   var queue2;
//   var arr;
//   var result = [];

//   while (queue.length > 0) {
//     queue2 = [];
//     arr = [];

//     while (queue.length > 0) {
//       var temp = queue.shift();
//       arr.push(temp.val);
//       queue2.push(temp);
//     }

//     result.unshift(arr);

//     while (queue2.length > 0) {
//       var temp = queue2.shift();
//       if (temp.left) {
//         queue.push(temp.left);
//       }

//       if (temp.right) {
//         queue.push(temp.right);
//       }
//     }
//   }
//   return result;
// };

var levelOrderBottom = function(node) {
  if (!node) return [];
  var arr = [];
  var result = [];
  helper(node, arr, 0);

  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

function helper(node, result, level) {
  if (!node) return [];

  if (result.length <= level) {
    result.push([]);
  }

  result[level].push(node.val);

  helper(node.left, result, level + 1);
  helper(node.right, result, level + 1);
}

var node = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
  },
};

var node = {
  val: 3,
  left: {
    val: 9,
    left: { val: 99 },
    right: { val: 1 },
  },
  right: {
    val: 20,
    left: { val: 15 },
    right: { val: 7 },
  },
};

console.log(levelOrderBottom(node));
