var displayTable = function (orders) {
  var info = {};
  var food = {};

  for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var tableNumber = order[1];
    var dishName = order[2];

    if (food[dishName] === undefined) {
      food[dishName] = true;
    }

    if (info[tableNumber] === undefined) {
      info[tableNumber] = {};
    }

    if (info[tableNumber][dishName] === undefined) {
      info[tableNumber][dishName] = 1;
    } else {
      info[tableNumber][dishName]++;
    }
  }

  var columns = ['Table'];
  var foods = Object.keys(food).sort();
  var columnIndex = {};
  for (var i = 0; i < foods.length; i++) {
    columnIndex[foods[i]] = i + 1; // except the first column "Table"
    columns.push(foods[i]);
  }

  var table = [columns];
  var rows = [];
  var infoArray = Object.keys(info);
  for (var i = 0; i < infoArray.length; i++) {
    var tableNumber = infoArray[i];
    rows = [tableNumber];
    for (var j = 1; j < columns.length; j++) {
      var number = info[tableNumber][columns[j]] || 0;
      rows[columnIndex[columns[j]]] = `${number}`;
    }
    table.push(rows);
  }
  return table;
};

var orders = [
  ['David', '3', 'Ceviche'],
  ['Corina', '10', 'Beef Burrito'],
  ['David', '3', 'Fried Chicken'],
  ['Carla', '5', 'Water'],
  ['Carla', '5', 'Ceviche'],
  ['Rous', '3', 'Ceviche'],
];

console.log(displayTable(orders));
