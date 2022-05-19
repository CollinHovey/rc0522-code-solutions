/* exported isUpperCased */
// make a new variable that is the word upercased
// create an if statement, if uppercased word = word, output true
function isUpperCased(word) {
  var upperCase = word.toUpperCase();
  if (word === upperCase) {
    return true;
  } else {
    return false;
  }
}
