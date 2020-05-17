var isPrime = function (n) {
  if (n === 2) return 1;

  for (var i = 2; i < n; i++) {
    if (n % i == 0) return i;
  }
  return 1;
};

var n = 2;
var n = 4;
var n = 24;
console.log(isPrime(n));
