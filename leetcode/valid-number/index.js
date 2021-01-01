// https://leetcode.com/problems/valid-number
/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = function (s) {
  const newChar = s.trim();
  if (!newChar.length) return false;

  if (newChar.length === 1) {
    return isDigit(newChar[0]);
  }

  const chars = newChar.split('');
  const mapIndex = {};
  const mapCounter = {};

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];

    if (isAlpha(c)) return false;
    if (isDigit(c)) continue;
    if (!isValidChar(c)) return false;

    // if more than one "."
    if (c === '.' && mapIndex['.'] !== undefined) return false;
    // if more than one "e"
    if (c === 'e' && mapIndex['e'] !== undefined) return false;
    mapCounter[c] = mapCounter[c] || 0;
    mapIndex[c] = i;
    mapCounter[c]++;
  }

  // there is no way it has more than 2 sign
  if (mapCounter['-'] > 2 || mapCounter['+'] > 2) return false;

  const positionOfE = mapIndex['e'];
  const positionOfSign = mapIndex['-'] || mapIndex['+'];

  if (mapCounter['-'] === 1 || mapCounter['+'] === 1) {
    // if the sign is at the end of string: 6e1-
    if (positionOfSign === chars.length - 1) return false;

    // 6-1
    if (positionOfE === undefined && positionOfSign > 0) return false;
  }

  if (mapCounter['-'] === 2 || mapCounter['+'] === 2) {
    const prevChar = newChar[positionOfSign - 1];
    const nextChar = newChar[positionOfSign + 1];

    // --6
    if (prevChar === '-' || nextChar === '-') return false;

    // -6-
    if (nextChar === undefined) return false;

    // -6-1
    if (prevChar !== '' && prevChar !== 'e') return false;
  }

  // "." should be before "e"
  if (mapIndex['.'] !== undefined) {
    if (mapIndex['.'] > mapIndex['e']) return false;
    const indexOfDot = mapIndex['.'];
    const prevChar = newChar[indexOfDot - 1];
    const nextChar = newChar[indexOfDot + 1];
    if (!isDigit(prevChar) && !isDigit(nextChar)) return false;
  }

  if (mapIndex['e'] !== undefined) {
    const indexOfE = mapIndex['e'];
    const prevChar = newChar[indexOfE - 1];
    const nextChar = newChar[indexOfE + 1];

    if (!isDigit(prevChar) && prevChar !== '.') return false;

    // 992.e+5
    if (nextChar === '+' || nextChar === '-') {
      return isDigit(newChar[indexOfE + 2]);
    }

    return isDigit(nextChar);
  }

  return true;
};

function isDigit(c) {
  return c >= '0' && c <= '9';
}

function isAlpha(c) {
  return c >= 'a' && c <= 'z' && c !== 'e';
}

function isValidChar(c) {
  return c === '-' || c === '+' || c === '.' || c === 'e';
}

// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// " -90e3   " => true
// " 1e" => false
// "e3" => false
// " 6e-1" => true
// " 99e2.5 " => false
// "53.5e93" => true
// " --6 " => false
// "-+3" => false
// "95a54e53" => false
// "-."
// "-"
// "+"
// " 005047e+6"
// "46.e3"
// "4e+"
// "."
// " "
// "e+8"
// "46.e3"
