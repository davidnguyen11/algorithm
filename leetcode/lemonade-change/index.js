/**
 * url: https://leetcode.com/problems/lemonade-change/submissions/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (bills.length === 0) return true;

  var change = {
    5: 0,
    10: 0,
    20: 0,
  };

  var count = 0;

  for (var i = 0; i < bills.length; i++) {
    switch (bills[i] - 5) {
      case 0: {
        change[5]++;
        count++;
      } break;
      case 5: {
        if (change[5] > 0) {
          change[5]--;
          change[10]++;
          count++;
        }
      } break;
      case 15: {
        if (change[5] > 0) {
          if (change[10] > 0) {
            change[5]--;
            change[10]--;
            change[20]++;
            count++;
          } else if (change[5] > 0 && change[5] * 5 >= 15) {
            change[5] = change[5] - 3;
            count++;
          }
        }
      } break;
    }
  }
  if (count === bills.length)
    return true;
  return false;
};

var bills = [5, 5, 5, 10, 20]; // true
// var bills = [5, 5, 5, 20]; // true
// var bills = [5, 5, 10]; // true
// var bills = [10, 10]; // false
// var bills = [5, 5, 10, 10, 20]; // false
// var bills = [];
// var bills = [5];
// var bills = [10];
// var bills = [20]; // false
// var bills = [5, 5, 5, 5, 20, 20, 5, 5, 20, 5]; // false

console.log(lemonadeChange(bills));
