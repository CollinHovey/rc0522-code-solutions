/* exported reverseWord */
function reverseWord(string) {
  var newString = '';
  for (let x = (string.length - 1); x >= 0; x--) {
    newString = newString + string.charAt(x);
  }
  return newString;
}
