// var a = '1237';
// var b = '1287';
// 2524

// var a = '1111';
// var b = '2222';
// 3333

var a = '12945';
var b = '65';
// 13010

// var a = '1837';
// var b = '9287';
// 11124

/*
 * carry = 0;
 * 7 + 7 = 14
 * * 14 > 10 => carry = carry + 1 = 0 + 1 = 1
 * * 14 - 10 = 4
 * 3 + 8 = 11
 * * 11 > 10 => carry = 1 + 1 = 2
 * * 11 - 10 = 1 (AA)
 * * carry > 0 => (AA) + 1 = 1 + 1 = 2
 * * carry = carry - 1 = 2 - 1 = 1
 * 2 + 2 = 4
 * * 4 > 10 (N)
 * * Else
 * * * 4 + carry = 4 + 1 = 5
 * * * carry = carry - 1 = 1 - 1 = 0
 * 1 + 1 = 2
 */
// function sum(num1, num2) {
//   var arrayNum1 = num1.split('');
//   var arrayNum2 = num2.split('');
//   var result = [];
//   var carry = 0;
//   var length = num1.length;
//   var tail = 0;

//   if (length > num2.length) {
//     tail = length - num2.length; // use for access last element of the longer array
//     length = num2.length;
//   }
//   console.log('tail', tail);
//   var count = 0;
//   var i = num1.length - 1;
//   var j = num2.length - 1;

//   while (count < length) {
//     var k1 = parseInt(arrayNum1[i]);
//     var k2 = parseInt(arrayNum2[j]);
//     var sum = k1 + k2;

//     if (sum >= 10) {
//       if (count + 1 < length) {
//         sum = sum - 10;
//       }

//       if (carry > 0) {
//         sum = sum + carry;
//         carry = carry - 1;
//       }

//       carry = carry + 1;
//     } else {
//       sum = sum + carry;
//       carry = 0;
//     }
//     result.push(sum);
//     i--;
//     j--;
//     count++;
//   }
//   return result;
// }

function sum(num1, num2) {
  var arrayNum1 = num1.split('');
  var arrayNum2 = num2.split('');
  var result = [];
  var carry = 0;

  while (arrayNum1.length > 0 || arrayNum2.length > 0) {
    var k1 = arrayNum1.pop();
    var k2 = arrayNum2.pop();
  }

  return result;
}
console.log(sum(a, b));
