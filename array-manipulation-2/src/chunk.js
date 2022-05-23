/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (let x = 0; x < array.length; x++) {
    if (newArray[(array.length - 1)].length === size || newArray === []) {
      newArray.push([]);
    }
    newArray[array.length - 1].push(array[x]);
  }
  return newArray;
}
