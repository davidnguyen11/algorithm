/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (!name && !typed) return true;
  if (!name && typed) return false;
  if (name && !typed) return false;

  var nameFreq = [1];
  var nameTempIndex = 0;
  for (var i = 1; i < name.length; i++) {
    if (name[i] === name[i - 1]) {
      nameFreq[nameTempIndex]++;
    } else {
      nameTempIndex++;
      nameFreq.push(1);
    }
  }

  var typedFreq = [1];
  var typedTempIndex = 0;
  for (var i = 1; i < typed.length; i++) {
    if (typed[i] === typed[i - 1]) {
      typedFreq[typedTempIndex]++;
    } else {
      typedTempIndex++;
      typedFreq.push(1);
    }
  }

  if (typedFreq.length !== nameFreq.length) return false;

  for (var i = 0; i < nameFreq.length; i++) {
    if (typedFreq[i] < nameFreq[i]) {
      return false;
    }
  }
  return true;
};

// true
var name = 'alex';
var typed = 'aaleex';

// true
// var name = 'alex';
// var typed = 'alex';

// false
// var name = 'saeed';
// var typed = 'ssaaedd';

// true
// var name = null;
// var typed = null;

// true
// var name = 'leelee';
// var typed = 'lleeelee';

var name = 'adidddas';
var typed = 'aidddiidsa';

console.log(isLongPressedName(name, typed));
