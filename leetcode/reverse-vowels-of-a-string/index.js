// https://leetcode.com/problems/reverse-vowels-of-a-string
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (!s.length) return s;
  const arrS = s.split('');
  let l = 0;
  let r = s.length - 1;

  const vowels = new Set(['u', 'e', 'o', 'a', 'i', 'U', 'E', 'O', 'A', 'I']);

  while (l < r) {
    if (vowels.has(arrS[l]) && !vowels.has(arrS[r])) {
      r--;
    } else if (!vowels.has(arrS[l]) && vowels.has(arrS[r])) {
      l++;
    }

    if (vowels.has(arrS[l]) && vowels.has(arrS[r])) {
      const temp = arrS[l];
      arrS[l] = arrS[r];
      arrS[r] = temp;
      l++;
      r--;
    }

    if (!vowels.has(arrS[l]) && !vowels.has(arrS[r])) {
      l++;
      r--;
    }
  }

  return arrS.join('');
};