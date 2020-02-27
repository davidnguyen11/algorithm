/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(s) {
  var result = '';
  var removeChar = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  };

  for (let i = 0; i < s.length; i++) {
    if (!removeChar[s[i]]) {
      result = result + s[i];
    }
  }
  return result;
};

var s = 'leetcodeisacommunityforcoders';
var s = 'aeiou';
var s = '';

console.log(removeVowels(s));
