// https://leetcode.com/problems/distance-between-bus-stops/
// using graph
// var distanceBetweenBusStops = function (distance, start, destination) {
//   // build graph
//   const g = {};
//   const d = {};
//   const n = distance.length;

//   for (let i = 0; i < n; i++) {
//     g[i] = g[i] || [];
//     const neighbor = (i + 1) % n;
//     g[neighbor] = g[neighbor] || [];
//     g[i].push(neighbor);
//     g[neighbor].push(i);

//     d[`${i}${neighbor}`] = distance[i];
//     d[`${neighbor}${i}`] = distance[i];
//   }

//   let s = start;
//   const stk = g[s];
//   const visited = { [s]: true };
//   let length = 0;
//   let min = Number.MAX_SAFE_INTEGER;

//   while (stk.length) {
//     const node = stk.pop();
//     if (visited[node]) continue;

//     length += d[`${s}${node}`];

//     if (node !== destination) {
//       const neighbors = g[node];
//       stk.push(...neighbors);
//       visited[node] = true;
//       s = node;
//     } else {
//       min = Math.min(length, min);
//       length = 0;
//       s = start;
//     }
//   }
//   return min;
// };

var distanceBetweenBusStops = function (distance, start, destination) {
  let n = distance.length;
  let c = 0; // clockwise
  let cc = 0; // counter clockwise

  for (let i = start; i % n != destination; i++) {
    c += distance[i % n];
  }

  for (let i = destination; i % n !== start; i++) {
    cc += distance[i % n];
  }

  return Math.min(c, cc);
}

var distance = [1, 2, 3, 4];
var start = 0;
var destination = 1;

// var distance = [1, 2, 3, 4];
// var start = 0;
// var destination = 2;

// var distance = [1, 2, 3, 4];
// var start = 0;
// var destination = 3;

// var distance = [1, 2];
// var start = 0;
// var destination = 1;

console.log(distanceBetweenBusStops(distance, start, destination));