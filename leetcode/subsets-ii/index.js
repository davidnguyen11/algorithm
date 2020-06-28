// https://leetcode.com/problems/subsets-ii/
var subsetsWithDup = function (nums) {
  nums.sort(); // check this test case [1, 2, 3, 2]
  var ans = [];
  dfs(nums, 0, [], ans);
  console.log(ans);
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

var nums = [1, 2, 2];

console.log(subsetsWithDup(nums));
