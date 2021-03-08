// https://leetcode.com/problems/design-a-leaderboard
var Leaderboard = function () {
  this.table = {};
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  if (!this.table[playerId]) {
    this.table[playerId] = score;
  } else {
    this.table[playerId] += score;
  }
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  const arr = Object.keys(this.table).map(key => {
    return { id: key, score: this.table[key] }
  });
  arr.sort((a, b) => b.score - a.score);

  let sum = 0;

  for (let i = 0; i < K; i++) {
    sum += arr[i].score;
  }

  return sum;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  delete this.table[playerId];
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */