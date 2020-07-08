// https://leetcode.com/problems/diet-plan-performance/
var dietPlanPerformance = function (c, k, lower, upper) {
  var ans = 0;
  var sum = 0;
  var n = c.length;

  for (var i = 0; i < k; i++) {
    sum += c[i];
  }

  if (sum < lower) {
    ans -= 1;
  }

  if (sum > upper) {
    ans += 1;
  }

  for (var i = k; i < n; i++) {
    sum += c[i] - c[i - k];

    if (sum >= lower && sum <= upper) {
      continue;
    }

    if (sum < lower) {
      ans -= 1;
    }

    if (sum > upper) {
      ans += 1;
    }
  }

  return ans;
};

var c = [6, 5, 0, 0];
var k = 2;
var lower = 1;
var upper = 5;

var c = [1, 2, 3, 4, 5];
var k = 1;
var lower = 3;
var upper = 3;

var c = [3, 2];
var k = 2;
var lower = 0;
var upper = 1;


console.log(dietPlanPerformance(c, k, lower, upper));