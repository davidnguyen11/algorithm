/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var result = [];
  helper(strs, 0, {}, result);
  return result;
};

function helper(strs, i, map, result) {
  if (i === strs.length) {
    return;
  }

  var chars = strs[i].split('');
  chars.sort();
  key = chars.join('');

  if (map[key] !== undefined) {
    result[map[key]].push(strs[i]);
  } else {
    map[key] = result.length;
    result.push([strs[i]]);
  }

  helper(strs, i + 1, map, result);
}

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
