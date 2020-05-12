// https://leetcode.com/problems/flood-fill/
var floodFill = function (image, r, c, newColor) {

  var startingColor = image[r][c];

  function dfs(image, r, c, visited, newColor) {
    if (image[r][c] === startingColor) {
      image[r][c] = newColor;
      visited[r][c] = true;
    }

    // top
    if (image[r - 1] && image[r - 1][c] === startingColor) {
      !visited[r - 1][c] && dfs(image, r - 1, c, visited, newColor);
    }

    // right
    if (image[r] && image[r][c + 1] === startingColor) {
      !visited[r][c + 1] && dfs(image, r, c + 1, visited, newColor);
    }

    // bottom
    if (image[r + 1] && image[r + 1][c] === startingColor) {
      !visited[r + 1][c] && dfs(image, r + 1, c, visited, newColor);
    }

    // left
    if (image[r] && image[r][c - 1] === startingColor) {
      !visited[r][c - 1] && dfs(image, r, c - 1, visited, newColor);
    }
  }

  var visited = [];
  for (var row = 0; row < image.length; row++) {
    visited.push([]);
    for (var col = 0; col < image[row].length; col++) {
      visited[row].push(false);
    }
  }

  dfs(image, r, c, visited, newColor);
  return image;
};

var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
var r = 1;
var c = 1;
var newColor = 2;

var image = [[0, 0, 0], [0, 0, 0]];
var r = 0;
var c = 0;
var newColor = 2;

// var image = [[0]];
// var r = 0;
// var c = 0;
// var newColor = 2;

console.log(floodFill(image, r, c, newColor));
