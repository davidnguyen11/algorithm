// var maxSubArray = function (nums) {
//   if (nums.length === 1) return nums[0];

//   var max = Number.NEGATIVE_INFINITY;

//   for (var i = 0; i < nums.length; i++) {
//     var sum = 0;
//     for (var j = i; j < nums.length; j++) {
//       sum += nums[j];
//       max = Math.max(sum, max);
//     }
//   }
//   return max;
// };

var maxSubArray = function (nums) {
  return helper(nums, 0, nums.length - 1);
};

function helper(nums, low, high) {
  if (low === high) {
    return nums[low];
  }

  var mid = Math.floor((low + high) / 2);

  var left = helper(nums, low, mid);
  var right = helper(nums, mid + 1, high);

  var max = Math.max(left, right);

  var cross = merge(nums, low, mid, high);

  return Math.max(max, cross);
}

function merge(nums, low, mid, high) {
  var maxLeft = Number.NEGATIVE_INFINITY;
  var sumLeft = 0;

  for (var i = mid; i >= low; i--) {
    sumLeft += nums[i];
    maxLeft = Math.max(maxLeft, sumLeft);
  }

  var maxRight = Number.NEGATIVE_INFINITY;
  var sumRight = 0;

  for (var i = mid + 1; i <= high; i++) {
    sumRight += nums[i];
    maxRight = Math.max(maxRight, sumRight);
  }

  return maxLeft + maxRight;
}


var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// var nums = [-2, 1, 2, 3];
// var nums = [-2, 1];
console.log(maxSubArray(nums));
