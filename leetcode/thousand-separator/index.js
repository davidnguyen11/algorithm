// https://leetcode.com/problems/thousand-separator/
var thousandSeparator = function (n) {
  if (n < 1000) return `${n}`;

  var startIndex = 0;
  var str = n.toString();
  var length = str.length;
  var result = '';

  if (length % 3 !== 0) {
    startIndex = length % 3;
  }

  for (var i = startIndex; i < length - 2; i += 3) {
    var temp = `${str[i]}${str[i + 1]}${str[i + 2]}`;

    if (i !== startIndex) {
      temp = `.${temp}`;
    }

    result += temp;
  }

  var prefix = '';
  if (startIndex > 0) {
    for (var i = 0; i < startIndex; i++) {
      prefix += str[i];
    }
    prefix = `${prefix}.`;
  }

  return `${prefix}${result}`;
};

// var n = 987;
// var n = 0;
var n = 123456789;
// var n = 1234;
// var n = 10123456789;

console.log(thousandSeparator(n));