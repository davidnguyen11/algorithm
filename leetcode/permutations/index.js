// https://leetcode.com/problems/permutations/
var permute = function (nums) {
  var ans = [];
  helper(nums, 0, {}, [], ans);
  return ans;
};

function helper(nums, depth, visited, curr, ans) {
  if (depth === nums.length) {
    ans.push([...curr]);
    return;
  }

  for (var i = 0; i < nums.length; i++) {
    if (visited[nums[i]]) continue;

    curr.push(nums[i]);
    visited[nums[i]] = true;

    helper(nums, depth + 1, visited, curr, ans);

    curr.pop();
    visited[nums[i]] = false;
  }
}

var nums = [1, 2, 3];

console.log(permute(nums));