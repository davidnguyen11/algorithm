// https://leetcode.com/problems/combinations/
var combine = function (n, k) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }

  function dfs(arr, start, curr, ans) {
    if (curr.length === k) {
      ans.push([...curr]);
      return;
    }

    for (var i = start; i < arr.length; i++) {
      curr.push(arr[i]);
      dfs(arr, i + 1, curr, ans);
      curr.pop();
    }
  }
  var ans = [];
  dfs(arr, 0, [], ans);
  return ans;
};

var n = 4;
var k = 3;

console.log(combine(n, k));
