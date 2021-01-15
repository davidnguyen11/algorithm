// https://leetcode.com/problems/determine-if-string-halves-are-alike/
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  s = s.toLowerCase();
  const lengthOfHalf = s.length / 2;
  const vowels = {
    a: 'true',
    e: 'true',
    i: 'true',
    o: 'true',
    u: 'true',
  };

  let count1st = 0;
  let count2nd = 0;

  for (let i = 0; i < lengthOfHalf; i++) {
    const letterOf1st = s[i];
    const letterOf2nd = s[lengthOfHalf + i];

    if (vowels[letterOf1st]) {
      count1st++;
    }
    if (vowels[letterOf2nd]) {
      count2nd++;
    }
  }
  return count1st === count2nd;
};