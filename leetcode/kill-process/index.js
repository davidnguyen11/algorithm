// https://leetcode.com/problems/kill-process/
var killProcess = function (pid, ppid, kill) {

  // build graph by loop throught "ppid"
  // using bfs

  var map = {};
  var parent;
  var child;

  for (var i = 0; i < ppid.length; i++) {
    parent = ppid[i];
    child = pid[i];

    if (parent === 0) continue;
    if (!map[parent]) {
      map[parent] = [];
    }
    map[parent].push(child);
  }
  var children = map[kill];

  if (!children) {
    return [kill];
  }

  var result = [kill];

  while (children.length) {
    var temp = children.shift();
    if (map[temp]) {
      children.push(...map[temp]);
    }
    result.push(temp);
  }

  return result;
};

var pid = [1, 3, 10, 5];
var ppid = [3, 0, 5, 3];
var kill = 3;

console.log(killProcess(pid, ppid, kill));