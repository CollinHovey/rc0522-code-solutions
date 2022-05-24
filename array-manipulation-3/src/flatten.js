/* exported flatten */
// look through every item in the array
// look into the array if item is an array
// push each element to new array

function flatten(array) {
  var newArray = [];
  for (var x in array) {
    if (array[x].constructor === Array) {
      for (var y in array[x]) {
        newArray.push(array[x][y]);
      }
    } else {
      newArray.push(array[x]);
    }
  }
  return newArray;
}

// had to use array.constructor to actually check if the items in array were arrays
