// https://leetcode.com/problems/combination-sum-ii/
var combinationSum2 = function (candidates, target) {
  candidates.sort(function (a, b) { return a - b });

  function dfs(arr, start, curr, sum, ans) {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      ans.push([...curr]);
      return;
    }

    var visited = new Set();
    for (var i = start; i < arr.length; i++) {
      if (visited.has(arr[i])) continue;

      sum += arr[i];
      curr.push(arr[i]);
      visited.add(arr[i]);

      dfs(arr, i + 1, curr, sum, ans);

      curr.pop();
      sum -= arr[i];
    }
  }

  var ans = [];
  dfs(candidates, 0, [], 0, ans);
  return ans;
};

var candidates = [10, 1, 2, 7, 6, 1, 5];
var target = 8;

console.log(combinationSum2(candidates, target));
