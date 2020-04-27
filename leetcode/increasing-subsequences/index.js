var findSubsequences = function (nums) {
  var result = [];
  helper(nums, 0, [], result);
  return result;
};

function helper(nums, index, curr, ans) {
  if (curr.length >= 2) {
    ans.push([...curr]);
  }

  var visited = new Set();
  for (var i = index; i < nums.length; i++) {
    if (visited.has(nums[i])) {
      continue;
    }

    if (curr.length === 0 || curr[curr.length - 1] <= nums[i]) {
      visited.add(nums[i]);
      curr.push(nums[i]);

      helper(nums, i + 1, curr, ans);

      curr.pop();
    }
  }
}

var nums = [4, 6, 7, 7];
// var nums = [5, 1, 6, 9];
// var nums = [1, 1, 1, 1];

// var nums = [4, 3, 2, 1];
console.log('result', findSubsequences(nums));
