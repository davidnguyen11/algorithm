// 2 HashMap
// var canConstruct = function (ransomNote, magazine) {
//   var freqMagazine = {};
//   var l;

//   for (var i = 0; i < magazine.length; i++) {
//     l = magazine[i];
//     if (!freqMagazine[l]) {
//       freqMagazine[l] = 1;
//     } else {
//       freqMagazine[l]++;
//     }
//   }

//   var freqRansomNote = {};

//   for (var i = 0; i < ransomNote.length; i++) {
//     l = ransomNote[i];
//     if (!freqRansomNote[l]) {
//       freqRansomNote[l] = 1;
//     } else {
//       freqRansomNote[l]++;
//     }
//   }

//   for (var i = 0; i < ransomNote.length; i++) {
//     l = ransomNote[i];
//     if (!freqMagazine[l] || freqRansomNote[l] > freqMagazine[l]) {
//       return false;
//     }
//   }

//   return true;
// };

// 1 HashMap
var canConstruct = function (ransomNote, magazine) {
  var freqMagazine = {};
  var l;

  for (var i = 0; i < magazine.length; i++) {
    l = magazine[i];
    if (!freqMagazine[l]) {
      freqMagazine[l] = 1;
    } else {
      freqMagazine[l]++;
    }
  }

  for (var i = 0; i < ransomNote.length; i++) {
    l = ransomNote[i];
    if (freqMagazine[l] === 0 || !freqMagazine[l]) {
      return false;
    }
    freqMagazine[l]--;
  }

  return true;
};

var ransomNote = 'a';
var magazine = 'b';

var ransomNote = 'aa';
var magazine = 'ab';

var ransomNote = 'aa';
var magazine = 'aab';

var ransomNote = 'bg';
var magazine = 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj';

var ransomNote = 'cc';
var magazine = 'aab';

console.log(canConstruct(ransomNote, magazine));
