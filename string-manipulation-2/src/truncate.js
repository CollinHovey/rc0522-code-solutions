/* exported truncate */
// take first part of string and extract the length amount
// concatenate the new string with an elipses string
// return the new string
function truncate(length, string) {
  var firstPart = string.substring(0, length);
  return firstPart + '...';
}
