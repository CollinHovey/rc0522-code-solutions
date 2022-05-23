/* exported capitalizeWord */
// use substring to great a beggining letter and a rest of the letters variable
// use uppercase to make the first letter uppercase
// use lowercase to make the rest of the letters lowercase
// concatanate the two
function capitalizeWord(word) {
  var upperCase = word.charAt(0);
  upperCase = upperCase.toUpperCase();
  var lowerCase = word.substring(1);
  lowerCase = lowerCase.toLowerCase();
  var newWord = upperCase + lowerCase;
  if (newWord === 'Javascript') {
    newWord = newWord.replace('s', 'S');
  }

  return newWord;
}
