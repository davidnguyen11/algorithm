var checkStraightLine = function (coordinates) {
  // Using "Slope of a Line"
  // (Coordinate Geometry)

  if (coordinates.length === 2) return true;

  var action = {
    x: function (p1, p2) {
      var x1 = p1[0];
      var x2 = p2[0];

      if (x1 !== x2) {
        return false;
      }
      return true;
    },
    y: function (p1, p2) {
      var y1 = p1[1];
      var y2 = p2[1];

      if (y1 !== y2) {
        return false;
      }
      return true;
    },
    xy: function (p1, p2, baseSlope) {
      var x1 = p1[0];
      var x2 = p2[0];

      var y1 = p1[1];
      var y2 = p2[1];

      var slope = (y1 - y2) / (x1 - x2);
      if (slope !== baseSlope) {
        return false;
      }
      return true;
    },
  };

  var type = 'xy';

  var [x1, y1] = coordinates[0];
  var [x2, y2] = coordinates[1];

  if (x1 === x2) {
    type = 'x';
  } else if (y1 === y2) {
    type = 'y';
  }

  var baseSlope = (y1 - y2) / (x1 - x2);

  // All points are on 1 line only if all slopes are equal
  for (var i = 1; i < coordinates.length - 1; i++) {
    if (!action[type](coordinates[i], coordinates[i + 1], baseSlope)) {
      return false;
    }
  }
  return true;
};

var coordinates = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];

var coordinates = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
];

var coordinates = [
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [7, 1],
];

var coordinates = [
  [2, 1],
  [4, 2],
  [6, 3],
];

var coordinates = [
  [0, 0],
  [0, 1],
  [0, -1],
];

console.log(checkStraightLine(coordinates));
