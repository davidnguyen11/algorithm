/**
 * @url https://leetcode.com/problems/replace-words/submissions/
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  const words = sentence.split(' ');
  const mappingIndex = [];
  for (let i = 0; i < words.length; i++) {
    mappingIndex[i] = -1;
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < dict.length; j++) {
      // root words only appear at the beginning of the succesor word
      if (words[i].indexOf(dict[j]) === 0) {
        if ((mappingIndex[i] === -1) || (dict[j].length < dict[mappingIndex[i]].length)) {
          mappingIndex[i] = j;
        }
      }
    }
  }

  const result = [];
  for (let i = 0; i < mappingIndex.length; i++) {
    let word = words[i];
    if (mappingIndex[i] !== -1) {
      word = dict[mappingIndex[i]];
    }
    result.push(word);
  }
  return result.join(' ');
};

// the cat was rat by the bat
// [-1, 0, -1, 2, -1, -1, 1]
// var dict = ["cat", "bat", "rat"];
// var sentence = "the cattle was rattled by the battery";

// var dict = ["rat", "ratt"];
// var sentence = "rattled"; // [0]

// var dict = ["ratt", "rat"];
// var sentence = "rattled"; // [1]

// a a b c
var dict = ["a", "b", "c"];
var sentence = "aadsfasf absbs bbab cadsfafs";


console.log(replaceWords(dict, sentence));
