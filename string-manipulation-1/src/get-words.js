/* exported getWords */
function getWords(string) {
  if (string !== '') {
    return string.split(' ');
  } else {
    var noString = [];
    return noString;
  }
}
