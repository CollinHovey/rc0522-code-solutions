/* exported compact */
function compact(array) {
  var newArray = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x] === false || array[x] === null || Number.isNaN(array[x]) || array[x] === 0 || array[x] === undefined || array[x] === '') {
      continue;
    }
    newArray.push(array[x]);
  }
  return newArray;
}
