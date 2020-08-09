// https://leetcode.com/problems/k-closest-points-to-origin/submissions/
var kClosest = function (points, k) {
  points.sort((pointA, pointB) => {
    var xA = Math.pow(pointA[0], 2);
    var yA = Math.pow(pointA[1], 2);

    var xB = Math.pow(pointB[0], 2);
    var yB = Math.pow(pointB[1], 2);

    var distanceA = Math.sqrt(xA + yA);
    var distanceB = Math.sqrt(xB + yB);

    return distanceA - distanceB;
  });

  var ans = [];

  for (var i = 0; i < k; i++) {
    ans.push(points[i]);
  }
  return ans;
};

var points = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
var k = 2;

console.log(kClosest(points, k));
