/**
 * https://www.geeksforgeeks.org/window-sliding-technique/
 * https://www.geeksforgeeks.org/longest-subarray-sum-elements-atmost-k/
 * https://www.geeksforgeeks.org/maximum-sum-subarray-sum-less-equal-given-sum/
 */
function maximumSumOfK(arr, k) {
  if (arr.length < k)
    return 0;

  var sum = 0;
  for (var i = 0; i < k; i++) {
    sum += arr[i];
  }
  var maxSum = sum;

  for (var i = 1; i <= arr.length - k; i++) {
    sum = sum + arr[k - 1 + i] - arr[i - 1];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

// var input = [100, 200, 300, 400]; // 700
// var k = 2;

// var input = [5, 2, -1, 0, 3]; // 6
// var k = 3

// var input = [1, 4, 2, 10, 23, 3, 1, 0, 20]; // 39
// var k = 4;

// var input = [1, 4, 2, 10, 2, 3, 1, 0, 20]; // 24
// var k = 4;

var input = [2, 3]; // 0 => invalid
var k = 3;

var result = maximumSumOfK(input, k);
console.log(result);