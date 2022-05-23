/* exported takeRight */
// take the count and subtract that from the length
// create a new empty array
// use new lengh as the starting point for the for loop
// have the for loop add the contents of the array to new array, starting from new point
// return the new array
function takeRight(array, count) {
  if (array === []) {
    return array;
  }
  var newCount = array.length - count;
  if (newCount < 0) {
    newCount = 0;
  }
  var newArray = [];
  for (let x = newCount; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}

// needed to add 2 if statements, 1 for empty array, 1 for when newCount was negative
