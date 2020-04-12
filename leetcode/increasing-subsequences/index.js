var findSubsequences = function (nums) {
  nums.sort(function (a, b) { return a - b });
  var result = [];

  helper(nums, 0, [], result);
  return result;
};

function helper(nums, i, temp, result) {


}

var nums = [4, 6, 7, 7];
console.log(findSubsequences(nums));

