var buildArray = function (target, n) {
  var o = [];
  var a = [];
  var idx = 0;

  for (var i = 1; i <= n; i++) {
    a.push(i);
    if (!target[idx]) break;

    if (a[i - 1] === target[idx]) {
      o.push('Push');
      idx++;
    } else {
      o.push('Push', 'Pop');
    }
  }
  return o;
};

// var target = [1, 3];
// var n = 3;

var target = [1, 2, 3];
var n = 3;

// var target = [1, 2];
// var n = 4;

// ['Push', 'Pop', 'Push', 'Push', 'Push'];
// var target = [2, 3, 4];
// var n = 4;

console.log(buildArray(target, n));
