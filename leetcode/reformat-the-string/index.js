var reformat = function (s) {
  var arrS = s.split('');
  var alphabets = [];
  var numbers = [];
  for (var i = 0; i < arrS.length; i++) {
    if (isNaN(arrS[i])) {
      alphabets.push(arrS[i]);
    } else {
      numbers.push(arrS[i]);
    }
  }

  if (Math.abs(alphabets.length - numbers.length) > 1) {
    return '';
  }

  var result = '';
  var i = 0;
  var j = 0;
  var main;
  var second;

  if (alphabets.length > numbers.length) {
    main = alphabets;
    second = numbers;
  } else {
    main = numbers;
    second = alphabets;
  }

  while (i < main.length || j < second.length) {
    var char1 = main[i] || '';
    var char2 = second[j] || '';
    result += char1 + char2;
    i++;
    j++;
  }

  return result;
};

// var s = 'abc1';
// var s = 'leetcode';

// var s = 'covid2019';
// var s = 'a0b1c2';
// var s = '1229857369';
// var s = 'ab123';
console.log(reformat(s));
