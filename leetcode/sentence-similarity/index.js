/**
 * url: https://leetcode.com/problems/sentence-similarity/
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;

  if (pairs.length === 0) {
    for (let i = 0; i < words1.length; i++) {
      if (words1[i] !== words2[i]) {
        return false;
      }
    }
    return true;
  }

  let count = 0;

  for (let i = 0; i < words1.length; i++) {
    const w1 = words1[i];
    const w2 = words2[i];
    if (w1 === w2) {
      count++;
    } else {
      for (let j = 0; j < pairs.length; j++) {
        const item1 = pairs[j][0];
        const item2 = pairs[j][1];
  
        if (
          (item1 === w1 && item2 === w2) ||
          (item2 === w1 && item1 === w2)
        ) {
          count++;
          break;
        }
      }
    }
  }

  if (count === words1.length) {
    return true;
  }
  return false;
};

// var words1 = ['great', 'great', 'acting', 'fine']; // true
// var words2 = ['fine', 'cool', 'drama', 'great'];
// var pairs = [
//   ['great', 'fine'],
//   ['great', 'cool'],
//   ['fine', 'great'],
//   ['acting','drama']
// ];

// var words1 = ["great", "acting", "skills"]; // false
// var words2 = ["fine", "drama", "talent"];
// var pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]];

// var words1 = ["great"]; // true
// var words2 = ["great"];
// var pairs = [];

// var words1 = ["great"]; // false
// var words2 = ["fine"];
// var pairs = [["great", "bad"], ["fine", "good"]];

// var words1 = ["great"]; // false
// var words2 = ["doubleplus","good"];
// var pairs = [["great", "good"], ["fine", "good"], ["drama","acting"]];

// var words1 = ["this","summer","thomas","get","really","very","rich","and","have","any","actually","wonderful","and","good","truck","every","morning","he","drives","an","extraordinary","truck","around","the","nice","city","to","eat","some","extremely","extraordinary","food","as","his","meal","but","he","only","entertain","an","few","well","fruits","as","single","lunch","he","wants","to","eat","single","single","and","really","healthy","life"]; // false
// var words2 = ["this","summer","thomas","get","very","extremely","rich","and","possess","the","actually","great","and","wonderful","vehicle","every","morning","he","drives","unique","extraordinary","automobile","around","unique","fine","city","to","drink","single","extremely","nice","meal","as","his","super","but","he","only","entertain","a","few","extraordinary","food","as","some","brunch","he","wants","to","take","any","some","and","really","healthy","life"];
// var pairs = [["good","nice"],["good","excellent"],["good","well"],["good","great"],["fine","nice"],["fine","excellent"],["fine","well"],["fine","great"],["wonderful","nice"],["wonderful","excellent"],["wonderful","well"],["wonderful","great"],["extraordinary","nice"],["extraordinary","excellent"],["extraordinary","well"],["extraordinary","great"],["one","a"],["one","an"],["one","unique"],["one","any"],["single","a"],["single","an"],["single","unique"],["single","any"],["the","a"],["the","an"],["the","unique"],["the","any"],["some","a"],["some","an"],["some","unique"],["some","any"],["car","vehicle"],["car","automobile"],["car","truck"],["auto","vehicle"],["auto","automobile"],["auto","truck"],["wagon","vehicle"],["wagon","automobile"],["wagon","truck"],["have","take"],["have","drink"],["eat","take"],["eat","drink"],["entertain","take"],["entertain","drink"],["meal","lunch"],["meal","dinner"],["meal","breakfast"],["meal","fruits"],["super","lunch"],["super","dinner"],["super","breakfast"],["super","fruits"],["food","lunch"],["food","dinner"],["food","breakfast"],["food","fruits"],["brunch","lunch"],["brunch","dinner"],["brunch","breakfast"],["brunch","fruits"],["own","have"],["own","possess"],["keep","have"],["keep","possess"],["very","super"],["very","actually"],["really","super"],["really","actually"],["extremely","super"],["extremely","actually"]];

// var words1 = ["great","acting","skills"] // true
// var words2 = ["fine","drama","talent"]
// var pairs = [["great","fine"],["drama","acting"],["skills","talent"]]

var words1 = ["great","acting","skills", "one"] // true
var words2 = ["fine","drama","talent", "one"]
var pairs = [["great","fine"],["drama","acting"],["skills","talent"]]

console.log(areSentencesSimilar(words1, words2, pairs));
