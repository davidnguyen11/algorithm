// https://leetcode.com/problems/combination-sum/
var combinationSum = function (candidates, target) {
  var ans = [];
  dfs(candidates, 0, 0, [], target, ans);
  return ans;
};

function dfs(arr, sum, start, curr, target, ans) {
  if (sum > target) {
    return;
  }

  if (sum === target) {
    ans.push([...curr]);
    return;
  }

  for (var i = start; i < arr.length; i++) {
    sum += arr[i];
    curr.push(arr[i]);

    dfs(arr, sum, i, curr, target, ans);

    sum -= arr[i];
    curr.pop();
  }
}


var candidates = [2, 3, 6, 7];
var target = 7;

var candidates = [2, 3, 5];
var target = 8;

console.log(combinationSum(candidates, target));
