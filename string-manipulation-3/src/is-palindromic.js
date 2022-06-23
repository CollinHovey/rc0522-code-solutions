/* exported isPalindromic */
// function will take the input string and make an new string
// it will reverse the string with loop starting from the end
// compare the two and return either true or false

function isPalindromic(string) {
  var reverseString = '';
  var originalString = '';

  for (var x = (string.length - 1); x >= 0; x--) {
    if (string.charAt(x) !== ' ') {
      reverseString += string.charAt(x);
    }
  }
  for (var x = 0; x < string.length; x++) {
    if (string.charAt(x) !== ' ') {
      originalString += string.charAt(x);
    }
  }
  if (originalString === reverseString) {
    return true;
  } else {
    return false;
  }
}
