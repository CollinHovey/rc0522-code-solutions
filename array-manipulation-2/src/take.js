/* exported take */
// make new array
// create a for loop, with a limit of the count
// push loop output to new array
// return new array
function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  var newArray = [];
  for (let x = 0; x < count; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}

// needed to add an if statement for empty array
