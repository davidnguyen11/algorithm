/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  if (!str) return '';

  var result = '';
  var temp;

  for (var i = 0; i < str.length; i++) {
    temp = str[i];
    if (temp.charCodeAt(0) >= 65 && temp.charCodeAt(0) <= 90) {
      result += String.fromCharCode(temp.charCodeAt(0) + 32);
    } else {
      result += temp;
    }
  }

  return result;
};

var str = 'Hello';
var str = 'LOVELY';
var str = 'here';
var str = null;
console.log(toLowerCase(str));
