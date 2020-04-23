// https://leetcode.com/problems/employee-importance/
var GetImportance = function (employees, id) {
  var map = {};

  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    map[employee.id] = employees[i];
  }

  var stack = [map[id]];
  var sum = 0;

  while (stack.length > 0) {
    var temp = stack.pop();
    sum += temp.importance;

    for (let i = 0; i < temp.subordinates.length; i++) {
      stack.push(map[temp.subordinates[i]]);
    }
  }
  return sum;
};


var employees = [
  {
    id: 1,
    importance: 5,
    subordinates: [2, 3]
  },
  {
    id: 2,
    importance: 3,
    subordinates: []
  },
  {
    id: 3,
    importance: 3,
    subordinates: []
  }
];
var id = 1

var employees = [[1, 5, [2]], [2, 10, [3]], [3, 5, []]];
var employees = [
  {
    id: 1,
    importance: 5,
    subordinates: [2]
  },
  {
    id: 2,
    importance: 10,
    subordinates: [3]
  },
  {
    id: 3,
    importance: 5,
    subordinates: []
  }
];
var id = 1

console.log(GetImportance(employees, id));
