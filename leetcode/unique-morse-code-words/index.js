var morses = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  if (!words || words.length === 0) return 0;
  return diff(words, 0, {}, 0);
};

function diff(words, i, visited, count) {
  if (i >= words.length) {
    return count;
  }
  var temp = transform(words[i], 0, '');
  if (!visited[temp]) {
    visited[temp] = true;
    count++;
  }
  return diff(words, i + 1, visited, count);
}

function transform(word, i, result) {
  if (i >= word.length) {
    return result;
  }
  var morseChar = morses[word[i].charCodeAt(0) - 'a'.charCodeAt(0)];
  return transform(word, i + 1, result + morseChar);
}

var words = ['gin', 'zen', 'gig', 'msg'];
var words = ['zocd', 'gjkl', 'hzqk', 'hzgq', 'gjkl'];

console.log(uniqueMorseRepresentations(words));
