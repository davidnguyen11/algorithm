/**
 * Url: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
 */
function climbingLeaderboard(scores, alice) {
  var boardRanks = {};
  var currentRank = 0;

  for (var i = 0; i < scores.length; i++) {
    if (boardRanks[scores[i]] === undefined) {
      currentRank++;
      boardRanks[scores[i]] = currentRank;
    }
  }

  var i = 0;
  var j = scores.length - 1;
  var alicesRanks = [];

  while (i <= alice.length - 1) {
    if (alice[i] < scores[j]) {
      var currentRank = boardRanks[scores[j]] + 1;
      alicesRanks.push(currentRank);
      i++;
    }

    if (alice[i] === scores[j]) {
      var currentRank = boardRanks[scores[j]];
      alicesRanks.push(currentRank);
      i++;
    }

    if (alice[i] > scores[j]) {
      j--;
    }

    if (j < 0)  {
      var currentRank = boardRanks[scores[0]];
      alicesRanks.push(currentRank);
    }

    if (alicesRanks.length === alice.length) {
      break;
    }
  }

  return alicesRanks;
}

// var scores = [100, 100, 50, 40, 40, 20, 10];
// var alices = [5, 25, 50, 120]; // Output: 6 4 2 1

// var scores = [100, 90, 90, 80, 75, 60];
// var alices = [50, 65, 77, 90, 102]; // Output: 6 5 4 2 1

// var scores = [100, 100, 50, 40, 40, 20, 10];
// var alices = [5, 6, 25, 50]; // Output: 6 6 4 2

// var scores = [100, 100, 50, 40, 40, 20, 10];
// var alices = [25, 25, 50]; // Output: 4 4 2

// var scores = [100, 100, 50, 40, 40, 20, 10];
// var alices = [120]; // Output: 1

// var scores = [100, 100, 50, 40, 40, 20, 10];
// var alices = [4]; // Output: 6

// var scores = [100, 100, 50, 40, 40, 20, 10];
// var alices = [55]; // Output: 2

var scores = [120, 100, 50, 40, 40, 20, 10];
var alices = [50, 65, 77, 90, 102]; // Output: [ 3, 3, 3, 3, 2 ]

// var scores = [70, 60, 50, 40, 30, 20, 10];
// var alices = [11, 20, 21, 22, 30, 40, 50 , 80, 100, 120]; // Output: [ 6, 6, 5, 4, 3, 1, 1, 1, 1, 1 ]

console.log(climbingLeaderboard(scores, alices));
