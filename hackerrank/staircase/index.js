// https://www.hackerrank.com/challenges/staircase/problem
function staircase(n) {
  function helper(k) {
    if (k > n) {
      return;
    }

    var spaces = n - k;

    for (var i = 0; i < spaces; i++) {
      process.stdout.write(' ');
    }

    for (var i = 0; i < k; i++) {
      process.stdout.write('#');
    }
    console.log();

    helper(k + 1);
  }

  helper(1);
}

var n = 4;
var n = 6;
staircase(n);
