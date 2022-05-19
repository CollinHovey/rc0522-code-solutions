/* exported findIndex */
function findIndex(array, value) {
  var number = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      continue
    }
    number = number + i;
    break;
  }
  if (number > 0) {
    return number;
  } else {
    return -1;
  }
}
