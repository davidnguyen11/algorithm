/**
 * http://cslibrary.stanford.edu/110/BinaryTrees.html#s1
 * https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
 */
function TreeNode(val) {
  var self = this;
  self.val = val;
  self.left = self.right = null;
  return self;
}

/**
 * Give a binary search tree and a number, inserts a new node
 * with the given number in the correct place in the tree.
 * Returns the new root pointer which the caller should
 * then use (the standard trick to avoid using reference parameters).
 */
function insert(root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (val <= root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }

  return root;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  var maxLeft = 1;
  var maxRight = 1;

  if (root.left) {
    maxLeft = maxDepth(root.left) + 1;
  }

  if (root.right) {
    maxRight = maxDepth(root.right) + 1;
  }

  return Math.max(maxLeft, maxRight);
};

// var root = insert(null, 9);
// root = insert(root, 3);
// root = insert(root, 20);
// root = insert(root, 15);
// root = insert(root, 7);
// root = insert(root, 21);
// root = insert(root, 22);

// var root = null;

var root = insert(null, 9);

console.log(root);
console.log(maxDepth(root));
