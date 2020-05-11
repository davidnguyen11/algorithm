// https://www.hackerrank.com/challenges/extra-long-factorials/problem
function extraLongFactorials(n) {
  if (n === 1 || n === 0) {
    console.log('1');
    return;
  }
  if (n === 2) {
    console.log('2');
    return;
  }

  if (n === 3) {
    console.log('6');
    return;
  }

  var result = [1, 2, 6];

  for (var i = 4; i <= n; i++) {
    var temp = BigInt(result[i - 1 - 1]) * BigInt(i);
    result.push(temp);
  }

  console.log(BigInt(result[result.length - 1]).toString());
}

console.log(extraLongFactorials(25));
