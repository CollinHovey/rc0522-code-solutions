/* exported unique */
// create new empty array
// create a for loop to look through array
// create a for loop in that to look through new array
// if x in array equals y in new array, dont do anything
// if theey don't equal, push to new array
function unique(array) {
  var newArray = [];
  for (var x in array) {
    if (x === '0') {
      newArray.push(array[x]);
    }
    for (var y in newArray) {
      if (array[x] === newArray[y]) {
        var add = false;
        break;
      } else if (array[x] !== newArray[y]) {
        add = true;
      }
    }
    if (add === true) {
      newArray.push(array[x]);
    }
  }
  return newArray;
}
