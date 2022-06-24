/* exported isAnagram */
// convert string 1 to no space string
// convert string 2 to no space string
// make a loop to see if each letter in string 1 is in string 2
function isAnagram(firstString, secondString) {
  var string1 = '';
  var string2 = [];
  for (var x = 0; x < firstString.length; x++) {
    if (firstString.charAt(x) !== ' ') {
      string1 += firstString.charAt(x);
    }
  }
  for (var x = 0; x < secondString.length; x++) {
    if (secondString.charAt(x) !== ' ') {
      string2.push(secondString.charAt(x));
    }
  }
  for (var x = 0; x < string1.length; x++) {
    for (var y = 0; y < string2.length; y++) {
      if (string1.charAt(x) === string2[y]) {
        string2.splice(y, 1);
        break;
      }
    }
  }
  if (string2.length === 0) {
    return true;
  } else {
    return false;
  }
}
