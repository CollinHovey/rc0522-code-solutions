/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (let x = (array.length - 1); x > -1; x--) {
    newArray.push(array[x]);
  }
  return newArray;
}
