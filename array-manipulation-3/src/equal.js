/* exported equal */
// create a for loop to check through the first loop
// then see if that value is in the second loop
// if there is return true
// if there isn't return false
function equal(first, second) {
  for (var x in first) {
    if (first[x] !== second[x]) {
      return false;
    } else if (first.length !== second.length) {
      return false;
    }
  }
  return true;
}
