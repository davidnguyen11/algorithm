// https://leetcode.com/problems/robot-bounded-in-circle/
var isRobotBounded = function (instructions) {
  var point = [0, 0];
  var direction = 'north';
  var count = 0;

  var directions = {
    north: {
      L: 'west',
      R: 'east',
    },
    west: {
      L: 'south',
      R: 'north',
    },
    south: {
      L: 'east',
      R: 'west',
    },
    east: {
      L: 'north',
      R: 'south'
    }
  };

  var updatePoint = function () {
    switch (direction) {
      case 'north':
        point[1]++;
        break;
      case 'west':
        point[0]--;
        break;
      case 'south':
        point[1]--;
        break;
      case 'east':
        point[0]++;
        break;
    }
  }

  while (count < instructions.length * 2) {
    for (var i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case 'L':
          direction = directions[direction]['L'];
          break;
        case 'R':
          direction = directions[direction]['R'];
          break;
        case 'G':
          updatePoint();
          break;
      }

      // need to complete the whole instruction
      // like this case "GLGLGGLGL" => after completing the instruction, it doesn't meet (0, 0)
      // so it must return false
      if (i === instructions.length - 1 && point[0] === 0 && point[1] === 0) return true;
    }
    count++;
  }

  return false;
};


// var instructions = 'GGLLGG';
// var instructions = 'GG';
// var instructions = 'GL';
var instructions = 'GLGLGGLGL';

console.log(isRobotBounded(instructions));

