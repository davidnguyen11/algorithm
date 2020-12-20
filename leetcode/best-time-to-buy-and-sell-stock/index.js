// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function (prices) {
  const result = [];
  const length = prices.length;
  let buying;
  let selling;
  let maxVal;

  for (let i = 0; i < length; i++) {
    buying = prices[i];
    maxVal = -Infinity;

    for (let j = i + 1; j < length; j++) {
      selling = prices[j];
      maxVal = Math.max(maxVal, selling - buying);
    }
    result.push(maxVal);
  }

  const ans = Math.max(...result);
  return ans <= 0 ? 0 : ans;
};

var prices = [2, 4, 3, 1];
var prices = [7, 1, 5, 3, 6, 4];
var prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
