// https://leetcode.com/problems/defuse-the-bomb/
var decrypt = function (code, k) {
  const len = code.length;
  const result = [];

  if (k === 0) {
    for (let i = 0; i < len; i++) {
      result.push(0);
    }
    return result;
  }

  let sum;
  let idx;
  const newK = Math.abs(k);
  const type = k > 0 ? 'positive' : 'negative';
  const action = handler(type);

  for (let i = 0; i < len; i++) {
    sum = 0;
    idx = 0;

    for (let j = 1; j <= newK; j++) {
      idx = action(i, j, len);
      sum += code[idx];
    }
    result.push(sum);
  }
  return result;
};

function handler(type) {
  return {
    negative: function (num1, num2, limit) {
      let idx = num1 - num2;

      if (idx < 0) {
        idx = idx + limit;
      }

      return idx;
    },
    positive: function (num1, num2, limit) {
      let idx = num1 + num2;

      if (idx >= limit) {
        idx = idx % limit;
      }

      return idx;
    },
  }[type];
}

var code = [5, 7, 1, 4];
var k = 4;

console.log(decrypt(code, k));
