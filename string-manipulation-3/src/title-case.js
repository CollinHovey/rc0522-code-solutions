/* exported titleCase */
function titleCase(string) {
  var newString = string.toLowerCase();
  var newArray = newString.split(' ');
  var finalString = '';
  for (var x = 0; x < newArray.length; x++) {
    if (newArray[x].charAt(newArray[x].length - 1) === ':') {
      var colonAt = x;
    }
    if (newArray[x] === 'javascript:') {
      newArray[x] = 'JavaScript:';
    } else if (newArray[x] === 'javascript') {
      newArray[x] = 'JavaScript';
    } else if (newArray[x] === 'api') {
      newArray[x] = 'API';
    } else {
      if (x > colonAt) {
        if (x === (colonAt + 1)) {
          var firstLetter = newArray[x].charAt(0).toUpperCase();
        } else if (newArray[x] === 'for' || newArray[x] === 'to') {
          firstLetter = newArray[x].charAt(0);
        } else {
          firstLetter = newArray[x].charAt(0).toUpperCase();
        }
      } else {
        if (newArray[x] !== 'in' && newArray[x] !== 'for' && newArray[x] !== 'of' && newArray[x] !== 'the' && newArray[x] !== 'and' && newArray[x] !== 'on' && newArray[x] !== 'to') {
          firstLetter = newArray[x].charAt(0).toUpperCase();
        } else if (x === 0) {
          firstLetter = newArray[x].charAt(0).toUpperCase();
        } else {
          firstLetter = newArray[x].charAt(0);
        }
      }
      var otherLetters = newArray[x].slice(1, (newArray[x].length));
      for (var y = 0; y < otherLetters.length; y ++) {
        if (otherLetters.charAt(y) === '-') {
          var beforeHyphen = otherLetters.slice(0, (y + 1));
          var afterHyphen = otherLetters.slice((y + 1), otherLetters.length);
          var afterHyphenFirstLetter = afterHyphen.charAt(0).toUpperCase();
          var afterHyphenOtherLetters = afterHyphen.slice(1, otherLetters.legnth);
          afterHyphen = afterHyphenFirstLetter + afterHyphenOtherLetters;
          otherLetters = beforeHyphen + afterHyphen;
        }
      }
      newArray[x] = firstLetter + otherLetters;
    }

  }
  for (var x = 0; x < newArray.length; x++) {
    if (x === 0) {
      finalString += newArray[x];
    } else {
      finalString += ' ' + newArray[x];
    }
  }
  return finalString;
}
