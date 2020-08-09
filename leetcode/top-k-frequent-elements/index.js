// https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var counter = {};
  var visited = {};
  var n = nums.length;
  var uniqueNums = [];

  for (var i = 0; i < n; i++) {
    var key = nums[i];
    counter[key] = counter[key] || 0;
    counter[key]++;

    if (visited[key] === undefined) {
      uniqueNums.push(key);
      visited[key] = true;
    }
  }

  uniqueNums.sort((a, b) => {
    return counter[b] - counter[a];
  });

  var ans = [];

  for (var i = 0; i < k; i++) {
    var key = uniqueNums[i];
    ans.push(key);
  }

  return ans;
};

var nums = [1, 1, 1, 2, 2, 3];
var k = 2;

console.log(topKFrequent(nums, k));
