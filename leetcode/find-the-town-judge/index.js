var findJudge = function (N, trust) {
  if (N === 1) return 1;

  var g = {};
  var pair, n1, n2;
  var points = [];

  for (var i = 0; i < trust.length; i++) {
    pair = trust[i];
    n1 = pair[0];
    n2 = pair[1];
    points[n1 - 1] = 0;
    points[n2 - 1] = 0;

    if (g[n1] === undefined) {
      g[n1] = [n2];
    } else {
      g[n1].push(n2);
    }
  }

  var keys = Object.keys(g);
  var maxIndex = 0;
  var key, index;

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    for (var j = 0; j < g[key].length; j++) {
      index = g[key][j] - 1;
      points[index]++;

      if (points[maxIndex] < points[index]) {
        maxIndex = index;
      }
    }
  }

  if (g[maxIndex + 1] || points[maxIndex] !== N - 1) {
    return -1;
  }

  return maxIndex + 1;
};

var N = 4;
var trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];

var N = 1;
var trust = [];

console.log(findJudge(N, trust));
