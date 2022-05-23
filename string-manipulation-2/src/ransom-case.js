/* exported ransomCase */
// i have no idea

function ransomCase(string) {
  var newString = '';
  for (let x = 0; x < string.length; x++) {
    if ((x % 2) === 0) {
      var even = string.charAt(x);
      even = even.toLowerCase();
      newString = newString + even;
    } else {
      var odd = string.charAt(x);
      odd = odd.toUpperCase();
      newString = newString + odd;
    }
  }
  return newString;
}

// i made an empty string with varibale newString
// create a for loop that
// goes through each letter in the string
// checks to see if it is an even or odd number
// if even it takes the letter at x and makes it lowercase
// adds the letter to the new string
// if odd takes the letter at x and makes it uppercase
// add the letter to the new string
// return new string
