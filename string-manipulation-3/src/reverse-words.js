/* exported reverseWords */
function reverseWords(string) {
  var originalArray = string.split(' ');
  var newArray = [];
  for (var x in originalArray) {
    for (var y = originalArray[x].length; y >= 0; y--) {
      var newString = originalArray[x].charAt(y);
      newArray.push(newString);
    }
  }
  var endString = '';
  for (var x = 1; x < newArray.length; x++) {
    if (newArray[x] === '') {
      endString = endString.concat(' ', newArray[x]);
    } else {
      endString += newArray[x];
    }

  }
  return endString;
}
