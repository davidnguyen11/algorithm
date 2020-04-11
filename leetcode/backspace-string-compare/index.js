var backspaceCompare = function (s, t) {
  function helper(str) {
    var arrS = str.split('');
    var result = [];
    while (arrS.length > 0) {
      var temp = arrS.shift();
      if (temp !== '#') {
        result.push(temp);
      } else {
        result.pop();
      }
    }
    return result;
  }

  var s1 = helper(s);
  var t1 = helper(t);

  if (s1.length !== t1.length) return false;

  for (var i = 0; i < s1.length; i++) {
    if (s1[i] !== t1[i]) return false;
  }

  return true;
};


var s = 'ab#c';
var t = 'ad#c';

var s = 'ab##';
var t = 'c#d#';

var s = 'a##c';
var t = '#a#c';

var s = 'a#c';
var t = 'b';

var s = 'b';
var t = 'b';

console.log(backspaceCompare(s, t));