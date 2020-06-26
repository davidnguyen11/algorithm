// https://leetcode.com/problems/subsets/
var subsets = function (nums) {
  var ans = [];
  dfs(nums, 0, [], ans);
  return ans;
};

function dfs(nums, start, curr, ans) {
  if (start > nums.length) {
    return;
  }

  ans.push([...curr]);

  var visited = new Set();
  for (var i = start; i < nums.length; i++) {
    if (visited.has(nums[i])) continue;

    curr.push(nums[i]);
    visited.add(nums[i]);

    dfs(nums, i + 1, curr, ans);

    curr.pop();
  }
}

var nums = [1, 2, 3];

console.log(subsets(nums));
