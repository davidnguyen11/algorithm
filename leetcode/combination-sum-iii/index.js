// https://leetcode.com/problems/combination-sum-iii/
var combinationSum3 = function (k, n) {
  function dfs(start, curr, sum, ans) {
    if (curr.length === k) {
      sum === n && ans.push([...curr]);
      return;
    }

    for (var i = start; i <= 9; i++) {
      curr.push(i);
      sum += i;

      dfs(i + 1, curr, sum, ans);

      curr.pop();
      sum -= i;
    }
  }

  var ans = [];
  dfs(1, [], 0, ans);
  return ans;
};

var k = 3;
var n = 7;

// var k = 3;
// var n = 9;

console.log(combinationSum3(k, n));
