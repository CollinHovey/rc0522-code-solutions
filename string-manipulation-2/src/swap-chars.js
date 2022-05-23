/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var firstLetter = string.charAt(firstIndex);
  var secondLetter = string.charAt(secondIndex);
  if (firstIndex === 1) {
    var string1 = string.charAt(0);
  } else if (firstIndex > 1) {
    string1 = string.slice(0, firstIndex);
  } else {
    string1 = '';
  }
  var string2 = string.slice((firstIndex + 1), (secondIndex));
  var string3 = string.slice((secondIndex + 1), (string.length));
  if (string1 === '') {
    var newString = secondLetter + string2 + firstLetter + string3;
  } else {
    newString = string1 + secondLetter + string2 + firstLetter + string3;
  }
  return newString;
}
