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

function bfs(node) {
  if (!node) return [];
  const queue = [];
  const storage = {};
  let temp = { node, level: 0 };

  queue.push(temp);

  while (queue.length > 0) {
    temp = queue.shift();

    if (!storage[temp.level]) {
      storage[temp.level] = [];
    }
    storage[temp.level].push(temp.node.val);

    if (temp.node.left) {
      queue.push({ node: temp.node.left, level: temp.level + 1 });
    }

    if (temp.node.right) {
      queue.push({ node: temp.node.right, level: temp.level + 1 });
    }
  }
  
  const result = [];
  const levels = Object.keys(storage);
  for (let i = 0; i < levels.length; i++) {
    result.push(storage[levels[i]]);
  }

  return result;
}

var root = insert(null, 15);
root = insert(root, 25);
root = insert(root, 10);
root = insert(root, 7);
root = insert(root, 22);
root = insert(root, 17);


const result = bfs(root);
console.log(result);
