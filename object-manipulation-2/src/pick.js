/* exported pick */
// make an new empty object
// make an empty string for comparison
// look through each property ofr the object
// check if the object key has the same value as the paramater key
// if so add to new object

function pick(source, keys) {
  var newObject = {};
  var string = '';
  for (const x in source) {
    string = x;
    for (let y = 0; y < keys.length; y++) {
      var keysName = keys[y];
      if (source[x] === undefined) {
        var isInObject = false;
      } else if (keysName === string) {
        isInObject = true;
        break;
      } else {
        isInObject = false;
      }
    }
    if (isInObject === true) {
      newObject[x] = source[x];
    }
  }
  return newObject;
}

// had to add a condition for undefined
