/**
 * url: https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  if (folder.length === 1) return folder;

  folder.sort();
  const parent = [];

  for (var i = 0; i < folder.length; i++) {
    parent.push(folder[i]);
  }

  var root = folder[0];
  var rootIdx = 0;
  var wordPos;

  for (var i = 1; i < folder.length; i++) {
    wordPos = folder[i].indexOf(`${root}/`);
    if (folder[i].length <= root.length || wordPos === -1) {
      root = folder[i];
      rootIdx = i;
    } else {
      if (wordPos > -1) {
        parent[i] = folder[rootIdx];
      }
    }
  }

  var set = new Set(parent);
  var result = [];

  set.forEach(function(value) {
    result.push(value);
  });
  return result;
};

var folder = ["/a/b"]; // ["/a/b"]
var folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]; // ["/a","/c/d","/c/f"]
var folder = ["/a", "/a/b/c", "/a/b/d"]; // ["/a"]
var folder = ["/a/b/c", "/a/b/ca", "/a/b/d"]; // ["/a/b/c","/a/b/ca","/a/b/d"]
var folder = ["/a/b", "/a/b/c", "/a/b/ca", "/c", "/c/d", "/c/d/e"]; // [ '/a/b', '/c' ]
var folder = ["/ah/al/am", "/ah/al"]; // ["/ah/al"]
var folder = ["/ap/ax/ay", "/ap/aq/au", "/aa/ab/af", "/aa/ai/am", "/ap/ax", "/ap/aq/ar"]; // ["/aa/ab/af","/aa/ai/am","/ap/aq/ar","/ap/aq/au","/ap/ax"]
var folder = ["/aa/ab/ac/ad","/aa/aq/ay","/bf/bv/cd/ch/cj","/bf/bg","/aa/aq/ar","/bf","/aa/ab/aj/an/ao","/aa/aq/ay/az","/aa/aq/ay/bc","/bf/bg/bh/bi/bj","/bf/bv/bw/ca/cc","/bf/bg/bh/bl"]; // ["/aa/ab/ac/ad","/aa/ab/aj/an/ao","/aa/aq/ar","/aa/aq/ay","/bf"]
var folder = ["/bf/bv/cd/ch/cj","/bf/bg","/bf","/bf/bg/bh/bi/bj","/bf/bv/bw/ca/cc","/bf/bg/bh/bl"]; // ["bf"]

console.log(removeSubfolders(folder));
