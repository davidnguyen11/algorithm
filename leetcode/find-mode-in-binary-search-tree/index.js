/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var findMode = function(node) {
//   if (!node) return [];
//   var stk = [node];
//   var temp;
//   var mapping = {};

//   while (stk.length > 0) {
//     temp = stk.pop();

//     if (mapping[temp.val] !== undefined) {
//       mapping[temp.val]++;
//     } else {
//       mapping[temp.val] = 1;
//     }

//     if (temp.left) {
//       stk.push(temp.left);
//     }

//     if (temp.right) {
//       stk.push(temp.right);
//     }
//   }

//   var vals = Object.keys(mapping);
//   var counts = vals.map(item => mapping[item]);
//   var max = Math.max(...counts);
//   var result = [];

//   for (var i = 0; i < counts.length; i++) {
//     if (mapping[vals[i]] === max) {
//       result.push(vals[i]);
//     }
//   }

//   return result;
// };

var findMode = function(node) {
  if (!node) return [];
  var mapping = {};

  function inOrder(node) {
    if (!node) return null;

    if (node && node.left) {
      inOrder(node.left);
    }

    if (mapping[node.val] !== undefined) {
      mapping[node.val]++;
    } else {
      mapping[node.val] = 1;
    }

    if (node && node.right) {
      inOrder(node.right);
    }

    return mapping;
  }

  inOrder(node);

  var vals = Object.keys(mapping);
  var counts = vals.map(item => mapping[item]);
  var max = Math.max(...counts);
  var result = [];

  for (var i = 0; i < counts.length; i++) {
    if (mapping[vals[i]] === max) {
      result.push(vals[i]);
    }
  }

  return result;
};

var node = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 2,
    },
  },
};

// var node = {
//   val: 2147483647
// };

console.log(findMode(node));