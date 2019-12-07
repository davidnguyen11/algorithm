/**
 * url: https://leetcode.com/problems/sentence-similarity-ii/
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;

  if (pairs.length === 0) {
    for (var i = 0; i < words1.length; i++) {
      if (words1[i] !== words2[i]) {
        return false;
      }
    }
    return true;
  }

  var flatPairs = [];
  var parent = [];
  var visited = {};
  var trackIndex = 0;

  for (var i = 0; i < pairs.length; i++) {
    var word1 = pairs[i][0];
    var word2 = pairs[i][1];

    if (visited[word1] === undefined) {
      flatPairs.push(word1);
      parent.push(trackIndex);
      visited[word1] = trackIndex;
      trackIndex++;
    }

    if (visited[word2] === undefined) {
      flatPairs.push(word2);
      parent.push(trackIndex);
      visited[word2] = trackIndex;
      trackIndex++;
    }
  }

  /**
   * findParent DFS version
   */
  function findParent(parent, i) {
    var stk = [parent[i]];
  
    while (stk.length > 0) {
      var index = stk.pop();
      if (parent[index] === visited[flatPairs[index]]) {
        return index;
      }
      stk.push(parent[index]);
    }
  }

  /**
   * Union 2 words
   */
  function union(parent, index1, index2) {
    var u = findParent(parent, index1);
    var v = findParent(parent, index2);
    parent[v] = u;
  }

  for (var i = 0; i < pairs.length; i++) {
    var idxWord1 = visited[pairs[i][0]];
    var idxWord2 = visited[pairs[i][1]];
    union(parent, idxWord1, idxWord2);
  }

  for (var i = 0; i < words1.length; i++) {
    var idxWord1 = findParent(parent, visited[words1[i]]);
    var idxWord2 = findParent(parent, visited[words2[i]]);

    if (idxWord1 !== idxWord2) {
      return false;
    }
  }
  return true;
}

// var words1 = ["great", "great", "acting"]; // true
// var words2 = ["fine", "cool", "drama"];
// var pairs = [["great", "good"], ["great", "cool"], ["fine", "good"], ["drama","acting"]];

// var words1 = ["great", "acting", "skills"]; // true
// var words2 = ["fine", "drama", "talent"];
// var pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]];

// var words1 = ["great"]; // true
// var words2 = ["great"];
// var pairs = [];

var words1 = ["great"];
var words2 = ["fine"];
var pairs = [];

// var words1 = ["great"]; // false
// var words2 = ["fine"];
// var pairs = [["great", "bad"], ["fine", "good"]];

// var words1 = ["great", "acting"]; // true
// var words2 = ["fine", "drama"];
// var pairs = [["great", "good"], ["fine", "good"], ["drama","acting"]];

// var words1 = ["great"];
// var words2 = ["doubleplus","good"];
// var pairs = [["great", "good"], ["fine", "good"], ["drama","acting"]];

// var words1 = ["this","summer","thomas","get","really","very","rich","and","have","any","actually","wonderful","and","good","truck","every","morning","he","drives","an","extraordinary","truck","around","the","nice","city","to","eat","some","extremely","extraordinary","food","as","his","meal","but","he","only","entertain","an","few","well","fruits","as","single","lunch","he","wants","to","eat","single","single","and","really","healthy","life"];
// var words2 = ["this","summer","thomas","get","very","extremely","rich","and","possess","the","actually","great","and","wonderful","vehicle","every","morning","he","drives","unique","extraordinary","automobile","around","unique","fine","city","to","drink","single","extremely","nice","meal","as","his","super","but","he","only","entertain","a","few","extraordinary","food","as","some","brunch","he","wants","to","take","any","some","and","really","healthy","life"];
// var pairs = [["good","nice"],["good","excellent"],["good","well"],["good","great"],["fine","nice"],["fine","excellent"],["fine","well"],["fine","great"],["wonderful","nice"],["wonderful","excellent"],["wonderful","well"],["wonderful","great"],["extraordinary","nice"],["extraordinary","excellent"],["extraordinary","well"],["extraordinary","great"],["one","a"],["one","an"],["one","unique"],["one","any"],["single","a"],["single","an"],["single","unique"],["single","any"],["the","a"],["the","an"],["the","unique"],["the","any"],["some","a"],["some","an"],["some","unique"],["some","any"],["car","vehicle"],["car","automobile"],["car","truck"],["auto","vehicle"],["auto","automobile"],["auto","truck"],["wagon","vehicle"],["wagon","automobile"],["wagon","truck"],["have","take"],["have","drink"],["eat","take"],["eat","drink"],["entertain","take"],["entertain","drink"],["meal","lunch"],["meal","dinner"],["meal","breakfast"],["meal","fruits"],["super","lunch"],["super","dinner"],["super","breakfast"],["super","fruits"],["food","lunch"],["food","dinner"],["food","breakfast"],["food","fruits"],["brunch","lunch"],["brunch","dinner"],["brunch","breakfast"],["brunch","fruits"],["own","have"],["own","possess"],["keep","have"],["keep","possess"],["very","super"],["very","actually"],["really","super"],["really","actually"],["extremely","super"],["extremely","actually"]];

console.log(areSentencesSimilarTwo(words1, words2, pairs));

