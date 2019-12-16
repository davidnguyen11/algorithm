/**
 * https://www.geeksforgeeks.org/maximum-length-chain-of-pairs-dp-20/
 */
var maxLengthChain = function(pairs) {
  pairs.sort(function(pair1, pair2) {
    if (pair1[0] < pair2[0]) return -1;
    if (pair1[0] > pair2[0]) return 1;
    return 0;
  });

  var M = [];
  for (let i = 0; i < pairs.length; i++) {
    M.push(1);
  }

  for (let i = 1; i < pairs.length; i++) {
    let pair2 = pairs[i];

    for (let j = 0; j < i; j++) {
      let pair1 = pairs[j];
      if (pair1[1] < pair2[0] && M[i] < M[j] + 1) {
        M[i] = M[j] + 1;
      }
    }
  }

  let max = M[0];
  for (let i = 0; i < M.length; i++) {
    if (M[i] > max) {
      max = M[i];
    }
  }
  return max;
};

var pairs = [[5, 24], [39, 60], [15, 28], [27, 40], [50, 90]];
// var pairs = [[6, 8], [3, 4]];

console.log(maxLengthChain(pairs));