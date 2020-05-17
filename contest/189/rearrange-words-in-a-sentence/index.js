var arrangeWords = function (text) {
  var letters = text.split(' ');
  if (letters.length === 1) return text;

  var l = [];

  for (var i = 0; i < letters.length; i++) {
    l.push({ length: letters[i].length, index: i });
  }

  l.sort(function (a, b) {
    if (a.length === b.length) {
      return a.index - b.index;
    }
    return a.length - b.length;
  });

  var firstLetter = letters[l[0].index];
  var result = [firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1)];

  for (var i = 1; i < letters.length; i++) {
    result.push(letters[l[i].index].toLowerCase());
  }

  return result.join(' ');
};

var text = 'Leetcode is cool'; // Leetcode is cool

var text = 'Leetcode is cool good';

var text = 'Google';

var text = 'Keep calm and code on'; // On and keep calm code

var text = 'To be or not to be'; // To be or to be not

// Gbo ops jgi jry jtik ojkew rjazc ufvledv bomoeqt titttcu zdhvbpbb hrzrvhbmk cfhmiqwonj zczmepdfpm
var text =
  'Jtik hrzrvhbmk gbo cfhmiqwonj ojkew ufvledv bomoeqt ops jgi zdhvbpbb zczmepdfpm jry rjazc titttcu';

console.log(arrangeWords(text));
