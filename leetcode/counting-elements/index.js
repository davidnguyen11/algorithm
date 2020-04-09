var countElements = function (arr) {
  arr.sort(function (a, b) { return a - b; })
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {

      if (arr[j] - arr[i] === 1) {
        count++;
        break;
      }

      if (arr[j] - arr[i] > 1) {
        break;
      }
    }
  }
  return count;
};

var arr = [1, 2, 3];
var arr = [1, 1, 3, 3, 5, 5, 7, 7];
var arr = [1, 1, 2, 2];
var arr = [1, 1, 2];

console.log(countElements(arr));