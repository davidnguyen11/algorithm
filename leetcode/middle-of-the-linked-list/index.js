// var middleNode = function (node) {
//   var cloneNode = { ...node };

//   var size = sizeOf(cloneNode);
//   var mid = Math.round(sizeOf(node) / 2);
//   if (size % 2 !== 0) {
//     mid = mid - 1;
//   }

//   var count = 0;
//   while (cloneNode) {
//     if (count === mid) {
//       return cloneNode;
//     }
//     count++;
//     cloneNode = cloneNode.next;
//   }
//   return null;
// };

// function sizeOf(node) {
//   var cloneNode = { ...node };
//   var count = 0;

//   while (cloneNode) {
//     count++;
//     cloneNode = cloneNode.next;
//   }
//   return count;
// }

// Solution 2: Using tortoise & hare
var middleNode = function (node) {
  var tortoise = { ...node };
  var hare = { ...node };

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  return tortoise;
}

var node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
        },
      },
    },
  }
};

var node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6
          },
        },
      },
    },
  }
};

console.log(middleNode(node));
