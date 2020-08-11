// https://leetcode.com/problems/sort-characters-by-frequency/
var frequencySort = function (s) {
  const counter = {};
  const n = s.length;

  for (let i = 0; i < n; i++) {
    counter[s[i]] = counter[s[i]] || 0;
    counter[s[i]]++;
  }

  const arrS = s.split('');

  arrS.sort((a, b) => {
    if (counter[b] === counter[a]) {
      if (a < b) {
        return -1;
      }
    }

    return counter[b] - counter[a];
  });

  return arrS.join('');
};

var s = 'tree';

console.log(frequencySort(s));
