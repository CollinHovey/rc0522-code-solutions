/* exported initial */
function initial(array) {
  var newArray = [];
  for (let x = 0; x < (array.length - 1); x++) {
    newArray.push(array[x]);
  }
  return newArray;
}
