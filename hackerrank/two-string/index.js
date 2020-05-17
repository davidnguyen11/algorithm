var commonSubstring = function (a, b) {
  for (var i = 0; i < a.length; i++) {
    if (twoStrings(a[i], b[i])) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
};

function checkCommon(s1, s2) {
  var map = {};

  for (var i = 0; i < s1.length; i++) {
    map[s1[i]] = true;
  }

  for (var i = 0; i < s2.length; i++) {
    if (map[s2[i]]) return true;
  }

  return false;
}

var a = ['ab', 'cd', 'ef'];
var b = ['af', 'ee', 'ef'];

commonSubstring(a, b);
