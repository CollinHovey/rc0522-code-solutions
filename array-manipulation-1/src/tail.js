/* exported tail */
// make a new array
// make a for loop to check all items in array
// make a if statement in for loop to skip first item
// in for loop push items into new array
// return new array
function tail(array) {
  var newArray = [];
  for (let x = 1; x < array.length; x++) {
    if (x === 0) {
      continue;
    }
    newArray.push(array[x]);
  }
  return newArray;
}
