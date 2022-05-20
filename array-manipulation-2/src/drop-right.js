/* exported dropRight */
function dropRight(array, count) {
  if (array === []) {
    return array;
  }
  var newArray = [];
  var newLength = array.length - count;
  for (let x = 0; x < newLength; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}
