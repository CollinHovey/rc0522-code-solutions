/* exported includesSeven */
function includesSeven(array) {
  var seven = 7
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 7) {
      continue;
    }
    seven = seven + array[i];
  }
  if ((seven % 2) === 0) {
    return true;
  } else {
    return false;
  }
}
