var stringShift = function (s, shift) {
  var arrS = s.split('');

  for (var i = 0; i < shift.length; i++) {
    var count = 0;
    var { 0: direction, 1: amount } = shift[i];
    switch (direction) {
      // shift left
      case 0: {
        while (count < amount) {
          var item = arrS.shift();
          arrS.push(item);
          count++;
        }
      }
      // shift right
      case 1: {
        while (count < amount) {
          var item = arrS.pop();
          arrS.unshift(item);
          count++;
        }
      }
    }
  }
  return arrS.join('');
};

var s = 'abc';
var shift = [
  [0, 1],
  [1, 2],
];

var s = 'abcdefg';
var shift = [
  [1, 1],
  [1, 1],
  [0, 2],
  [1, 3],
];

console.log(stringShift(s, shift));
