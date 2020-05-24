// https://leetcode.com/problems/maximum-binary-tree/
var constructMaximumBinaryTree = function (nums) {
  function dfs(start, end) {
    if (start > end) {
      return null;
    }

    var maxIndex = start;
    var max = nums[maxIndex];

    for (var i = start; i <= end; i++) {
      if (nums[i] > max) {
        maxIndex = i;
        max = nums[i];
      }
    }

    var node = {
      val: max,
      left: null,
      right: null,
    };

    // left
    node.left = dfs(start, maxIndex - 1);
    // right
    node.right = dfs(maxIndex + 1, end);

    return node;
  }

  return dfs(0, nums.length - 1);
};

var nums = [3, 2, 1, 6, 0, 5];

console.log(constructMaximumBinaryTree(nums));
