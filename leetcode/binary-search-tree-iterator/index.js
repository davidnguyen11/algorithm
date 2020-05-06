// https://leetcode.com/problems/binary-search-tree-iterator/
var BSTIterator = function (node) {
  var self = this;
  self.nodes = [];

  function inOrder(node) {
    if (!node) return;

    inOrder(node.left);
    self.nodes.unshift(node.val);
    inOrder(node.right);
  }

  inOrder(node);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  var self = this;
  return self.nodes.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  var self = this;
  return self.nodes.length || false;
};

var node = {
  val: 7,
  left: {
    val: 3,
  },
  right: {
    val: 15,
    left: { val: 9 },
    right: { val: 20 },
  },
};

var it = new BSTIterator(node);
console.log(it.nodes);
