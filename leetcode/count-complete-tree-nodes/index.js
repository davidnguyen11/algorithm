function TreeNode(val) {
  var self = this;
  self.val = val;
  self.left = self.right = null;
  return self;
}

/**
 * url: https://leetcode.com/problems/count-complete-tree-nodes/
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(node) {
  if (node === undefined || node === null) return 0;
  var count = 1;

  if (node.left) {
    count = count + countNodes(node.left);
  }

  if (node.right) {
    count = count + countNodes(node.right);
  }

  return count;
};

// DFS
// var countNodes = function(node) {
//   if (node === undefined || node === null) return 0;

//   var stk = [node];
//   var count = 1;
//   var temp;

//   while (stk.length) {
//     temp = stk.pop();

//     if (temp.left) {
//       stk.push(temp.left);
//       count++;
//     }

//     if (temp.right) {
//       stk.push(temp.right);
//       count++;
//     }
//   }

//   return count;
// };

function insert(node, val) {
  if (!node) {
    return new TreeNode(val);
  }

  if (val <= node.val) {
    node.left = insert(node.left, val);
  } else {
    node.right = insert(node.right, val);
  }

  return node;
}

// var node = insert(null, 15);
// node = insert(node, 25);
// node = insert(node, 10);
// node = insert(node, 7);
// node = insert(node, 22);
// node = insert(node, 17);

var node = insert(null, 9);
node = insert(node, 8);
node = insert(node, 1);

console.log(countNodes(node));
