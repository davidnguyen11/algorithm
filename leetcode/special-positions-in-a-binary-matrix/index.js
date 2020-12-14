// https://leetcode.com/problems/special-positions-in-a-binary-matrix/
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let count = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1 && isSpecial(mat, i, j)) {
        count++;
      }
    }
  }
  return count;
};

function isSpecial(mat, row, col) {
  let validCol = true;
  let validRow = true;

  const colLength = mat[row].length;
  const rowLength = mat.length;

  for (let c = 0; c < colLength; c++) {
    if (c !== col && mat[row][c] === 1) {
      validCol = false;
      break;
    }
  }

  for (let r = 0; r < rowLength; r++) {
    if (r !== row && mat[r][col] === 1) {
      validRow = false;
      break;
    }
  }

  return validCol && validRow;
}