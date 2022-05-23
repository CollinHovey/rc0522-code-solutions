/* exported capitalizeWords */
// make an array with all the words of the string
// make a variable with an empty string to add to
// make a for loop that
// takes the first letter of a word in the variable and assigns it to a new variable
// takes the rest of the letters of the word and assigns it its own variable
// make the first letter uppercase
// make the other letters lowercase
// concatanate the first letter and rest letters into a new word
// make an if statement for
// if its the first word just add the word to final string
// if its any other word add a space between it and the final string
// return new string
function capitalizeWords(string) {
  var words = string.split(' ');
  var newString = '';
  for (let x = 0; x < words.length; x++) {
    var firstL = words[x].charAt(0);
    var restL = words[x].slice(1);
    firstL = firstL.toUpperCase();
    restL = restL.toLowerCase();
    var newWord = firstL + restL;
    if (x === 0) {
      newString = newString + newWord;
    } else {
      newString = newString + ' ' + newWord;
    }
  }
  return newString;
}
