var findComplement = function (num) {
  var bit = num.toString(2);
  var result = [];

  for (var i = 0; i < bit.length; i++) {
    result.push(bit[i] ^ '1');
  }
  return parseInt(result.join(''), 2);
};

var num = 5;

console.log(findComplement(num));
