var isPrefixOfWord = function (sentence, searchWord) {
  sentence = sentence.split(' ');
  for (var i = 0; i < sentence.length; i++) {
    var valid = true;
    if (sentence[i].length < searchWord.length) continue;

    for (var k = 0; k < searchWord.length; k++) {
      if (sentence[i][k] !== searchWord[k]) {
        valid = false;
        break;
      }
    }

    if (valid) {
      return i + 1;
    }
  }

  return -1;
};

var sentence = 'i love eating burger';
var searchWord = 'burg';

var sentence = 'this problem is an easy problem';
var searchWord = 'pro';

var sentence = 'i am tired';
var searchWord = 'you';

var sentence = 'i use triple pillow';
var searchWord = 'pill';

var sentence = 'hello from the other side';
var searchWord = 'they';

console.log(isPrefixOfWord(sentence, searchWord));
