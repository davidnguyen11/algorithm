// https://leetcode.com/problems/find-anagram-mappings/
var anagramMappings = function (a, b) {
  var map = {};

  for (var i = 0; i < b.length; i++) {
    map[b[i]] = i;
  }

  var result = [];

  for (var i = 0; i < a.length; i++) {
    result.push(map[a[i]]);
  }

  return result;
};

var a = [12, 28, 46, 32, 50];
var b = [50, 12, 32, 46, 28];

console.log(anagramMappings(a, b));
