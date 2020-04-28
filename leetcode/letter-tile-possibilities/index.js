// https://leetcode.com/problems/letter-tile-possibilities/
var numTilePossibilities = function (tiles) {
  var ans = [];
  dfs(tiles, {}, [], 0, ans);
  return ans.length;
};

function dfs(arr, idx, curr, depth, ans) {
  if (curr.length >= 1) {
    ans.push([...curr]);
  }

  if (depth === arr.length) {
    return;
  }

  var visited = new Set();
  for (var i = 0; i < arr.length; i++) {
    if (idx[i] || visited.has(arr[i])) continue;

    visited.add(arr[i]);
    curr.push(arr[i]);
    idx[i] = true;

    dfs(arr, idx, curr, depth + 1, ans);

    curr.pop();
    idx[i] = false;
  }
}

var tiles = 'AAB';
numTilePossibilities(tiles)