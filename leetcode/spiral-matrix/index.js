// https://leetcode.com/problems/spiral-matrix
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  function helper(rows, cols, r, c, visited, direction, ans) {
    if (visited[`${r}${c}`] || matrix[r] === undefined || matrix[r][c] === undefined) {
      return;
    }

    if (matrix[r][c] !== undefined && !visited[`${r}${c}`]) {
      ans.push(matrix[r][c]);
      visited[`${r}${c}`] = true;
    }

    if (direction === 'right' && (matrix[r][c + 1] === undefined || visited[`${r}${c + 1}`])) {
      direction = 'down';
    }

    if (direction === 'down' && (matrix[r + 1] === undefined || visited[`${r + 1}${c}`])) {
      direction = 'left';
    }

    if (direction === 'left' && (matrix[r][c - 1] === undefined || visited[`${r}${c - 1}`])) {
      direction = 'up';
    }

    if (direction === 'up' && visited[`${r - 1}${c}`]) {
      direction = 'right';
    }

    if (direction === 'right') {
      c++;
    } else if (direction === 'down') {
      r++;
    } else if (direction === 'left') {
      c--;
    } else if (direction === 'up') {
      r--;
    }

    helper(rows, cols, r, c, visited, direction, ans);
  }

  helper(rows, cols, 0, 0, {}, 'right', ans);
  return ans;
};

// [[1,2,3],[4,5,6],[7,8,9]]
// [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
// [[1]]
// [[1,2,3]]
// [[1],[2],[3],[4]]
// [[1,5],[2,6],[3,7],[4,8]]
