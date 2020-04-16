
var highFive = function (items) {
  items.sort(function (a, b) {
    return b[1] - a[1];
  });
  var obj = {};
  var item;
  var id;
  var score;

  for (var i = 0; i < items.length; i++) {
    item = items[i];
    id = item[0];
    score = item[1];

    if (obj[id] === undefined) {
      obj[id] = {
        score,
        count: 1
      };
    } else if (obj[id].count < 5) {
      obj[id].score = obj[id].score + score;
      obj[id].count++;
    }
  }
  var keys = Object.keys(obj);
  var result = [];

  for (var i = 0; i < keys.length; i++) {
    id = keys[i];
    item = obj[id];
    result.push([id, Math.trunc(item.score / 5)]);
  }

  return result;
};

var items = [[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]];

console.log(highFive(items));