/* exported isVowel */
function isVowel(char) {
  var newChar = char.toLowerCase();
  if (newChar === 'a' || newChar === 'e' || newChar === 'i' || newChar === 'o' || newChar === 'u' || newChar === 'y') {
    return true;
  } else {
    return false;
  }
}
