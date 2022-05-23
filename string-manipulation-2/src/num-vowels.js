/* exported numVowels */
function numVowels(string) {
  string = string.toLowerCase();
  var count = 0;
  for (let x = 0; x < string.length; x++) {
    if (string.charAt(x) === 'a' || string.charAt(x) === 'e' || string.charAt(x) === 'i' || string.charAt(x) === 'o' || string.charAt(x) === 'u') {
      count++;
    } else {
      continue;
    }
  }
  return count;
}
