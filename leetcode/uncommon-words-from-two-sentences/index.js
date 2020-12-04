// https://leetcode.com/problems/uncommon-words-from-two-sentences/
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  const arrA = A.split(' ');
  const arrB = B.split(' ');
  const result = [];

  if (A && arrA.length) {
    result.push(...helpers(arrA, arrB));
  }

  if (B && arrB.length) {
    result.push(...helpers(arrB, arrA));
  }

  return result;
};

function helpers(srcArray, targetArray) {
  let word;
  let key;
  const map = {};
  const set = new Set();

  for (let i = 0; i < srcArray.length; i++) {
    word = srcArray[i];
    map[word] = map[word] || 0;
    map[word]++;
  }

  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    if (map[key] === 1) {
      set.add(key);
    }
  }

  for (let i = 0; i < targetArray.length; i++) {
    word = targetArray[i];
    if (set.has(word)) {
      set.delete(word);
    }
  }
  return Array.from(set);
}

