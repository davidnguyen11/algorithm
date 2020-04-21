var bstFromPreorder = function (preorder) {
  function insert(node, val) {
    if (!node) {
      return {
        val,
        left: null,
        right: null,
      }
    }

    if (node.val > val) {
      node.left = insert(node.left, val);
    }

    if (node.val < val) {
      node.right = insert(node.right, val);
    }

    return node;
  }


  var node = null;
  for (let i = 0; i < preorder.length; i++) {
    node = insert(node, preorder[i]);
  }

  return node;
};

var preorder = [8, 5, 1, 7, 10, 12];
console.log(bstFromPreorder(preorder));
