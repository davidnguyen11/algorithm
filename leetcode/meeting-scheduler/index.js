// https://leetcode.com/problems/meeting-scheduler/
var minAvailableDuration = function (slots1, slots2, duration) {
  slots1.sort((a, b) => a[0] - b[0]);
  slots2.sort((a, b) => a[0] - b[0]);

  let slot1, start1, end1;
  let slot2, start2, end2;
  let minStart, maxStart, minEnd;
  let range;

  for (let i = 0; i < slots1.length; i++) {
    slot1 = slots1[i];
    start1 = slot1[0];
    end1 = slot1[1];

    for (let j = i; j < slots2.length; j++) {
      slot2 = slots2[j];

      if (isOutOfRange(slot1, slot2)) continue;

      start2 = slot2[0];
      end2 = slot2[1];

      if (
        start1 === start2 &&
        end1 === end2 &&
        isInRange(start1 + duration, slots1)
      ) {
        return [start1, start1 + duration];
      }

      minStart = Math.min(start1, start2);
      maxStart = Math.max(start1, start2);
      minEnd = Math.min(end1, end2);

      if (start1 === start2 && isInRange(start1 + duration, [start1, minEnd])) {
        return [start1, start1 + duration];
      }

      if (end1 === end2 && isInRange(minStart + duration, [maxStart, end1])) {
        return [maxStart, maxStart + duration];
      }

      range = getIntersect(slot1, slot2);
      if (range && range[0] + duration <= range[1]) {
        return [range[0], range[0] + duration];
      }
    }
  }
  return [];
};

function isInRange(value, range) {
  const start = range[0];
  const end = range[1];

  return value >= start && value <= end;
}

function getIntersect(slot1, slot2) {
  const start1 = slot1[0];
  const end1 = slot1[1];

  const start2 = slot2[0];
  const end2 = slot2[1];

  if (start2 > start1 && start2 < end1 && end1 > start2 && end1 < end2) {
    return [start2, end1];
  }

  if (start1 > start2 && start1 < end2 && end2 > start1 && end2 < end1) {
    return [start1, end2];
  }

  if (start1 < start2 && end2 < end1) {
    return slot2;
  }

  if (start2 < start1 && end1 < end2) {
    return slot1;
  }
}

function isOutOfRange(slot1, slot2) {
  const end1 = slot1[1];
  const start2 = slot2[0];

  const end2 = slot2[1];
  const start1 = slot1[0];

  return end1 < start2 || end2 < start1;
}

// var slots1 = [
//   [10, 50],
//   [60, 120],
//   [140, 210],
// ];

// var slots2 = [
//   [0, 15],
//   [60, 70],
// ];

// var duration = 8;

// var slots1 = [
//   [10, 50],
//   [60, 120],
//   [140, 210],
// ];
// var slots2 = [
//   [0, 15],
//   [60, 70],
// ];
// var duration = 12;

// var slots1 = [[0, 2]];
// var slots2 = [[1, 3]];
// var duration = 1;

// var slots1 = [
//   [0, 1],
//   [100, 1000100],
// ];
// var slots2 = [
//   [0, 2],
//   [90, 1000100],
// ];
// var duration = 1000000;

console.log(minAvailableDuration(slots1, slots2, duration));
