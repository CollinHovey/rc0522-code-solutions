/* exported includes */
function includes(array, value) {
  var count = 0;
  for (let x = 0; x < array.length; x++) {
    if (array[x] === value) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
