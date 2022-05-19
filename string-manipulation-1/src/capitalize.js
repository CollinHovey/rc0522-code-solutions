/* exported capitalize */
// take the first letter of the string and uppercase it
// take the rest of the letters and lowercase it
// concatanate the two satrings together
function capitalize(word) {
  var firstLetter = word.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  var otherLetters = word.slice(1, word.length);
  otherLetters = otherLetters.toLowerCase();
  return firstLetter + otherLetters;
}
