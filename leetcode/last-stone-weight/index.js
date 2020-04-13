const { PriorityQueue } = require('./priority-queue');

var lastStoneWeight = function (stones) {
  var q = new PriorityQueue(stones);

  while (q.queue.length > 1) {
    var stone1 = q.pop();
    var stone2 = q.pop();

    var weight = stone1 - stone2;

    if (weight !== 0) {
      q.push(weight);
    }
  }

  return q.queue.length === 1 ? q.queue[0] : 0;
};

var stones = [2, 7, 4, 1, 8, 1];
var stones = [4, 3, 4, 3, 2];
var stones = [722, 512, 290, 559, 884, 608, 932, 781, 864, 398, 890, 574, 472, 125, 620, 728, 447, 150, 52, 116, 786, 717, 172, 549, 350, 268, 951, 315, 482, 170];

console.log(lastStoneWeight(stones));

// const q = new PriorityQueue(stones);
// console.log(q.queue);

// const max1 = q.pop();
// console.log('max1', max1);

// q.push(10);
// console.log(q.queue);

// q.push(11);
// console.log(q.queue);

// q.push(1);
// console.log(q.queue);

// q.push(5);
// console.log(q.queue);
