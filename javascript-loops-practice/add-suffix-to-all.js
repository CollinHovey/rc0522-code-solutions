/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (let x = 0; x < words.length; x++) {
    newWords.push(words[x] + suffix);
  }
  return newWords;
}
