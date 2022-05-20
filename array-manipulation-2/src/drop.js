/* exported drop */
// create a new array
// create a for loop starting at the count
// the loop will take array at index and push to a new array
// return new array
function drop(array, count) {
  var newArray = [];
  for (let x = count; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}
