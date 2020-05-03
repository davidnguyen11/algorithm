var destCity = function (paths) {
  var map = {};
  for (var i = 0; i < paths.length; i++) {
    var src = paths[i][0];
    var dst = paths[i][1];

    if (!map[src]) {
      map[src] = [dst];
    } else {
      map[src].push(dst);
    }
  }

  var stk = [paths[0][0]];
  var path;

  while (stk.length > 0) {
    path = stk.pop();
    if (!map[path]) {
      break;
    }
    for (var i = 0; i < map[path].length; i++) {
      stk.push(map[path][i]);
    }
  }
  return path;
};

var paths = [
  ['B', 'C'],
  ['D', 'B'],
  ['C', 'A'],
];

var paths = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];

var paths = [['A', 'Z']];

console.log(destCity(paths));
