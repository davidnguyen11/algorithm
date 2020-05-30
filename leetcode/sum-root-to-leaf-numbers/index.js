// https://leetcode.com/problems/sum-root-to-leaf-numbers/
var sumNumbers = function (node) {
  function dfs(node, ans, curr) {
    if (!node) {
      return;
    }

    curr.push(node.val);

    if (!node.left && !node.right) {
      ans.push(parseInt(curr.join('')));
    }

    dfs(node.left, ans, curr);
    dfs(node.right, ans, curr);

    curr.pop();
  }

  var ans = [];
  dfs(node, ans, []);

  var sum = 0;
  for (var i = 0; i < ans.length; i++) {
    sum += ans[i];
  }

  return sum;
};

var node = {
  val: 4,
  left: {
    val: 9,
    left: { val: 5 },
    right: { val: 1 },
  },
  right: {
    val: 0,
  },
};

// var node = {
//   val: 1,
//   left: { val: 2 },
//   right: { val: 3 },
// };

var node = {
  val: 1,
  left: { val: 0 },
};

console.log(sumNumbers(node));
