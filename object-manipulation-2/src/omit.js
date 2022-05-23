/* exported omit */
// create a new empty object
// make a for in loop to check the values of the keys to the paramater key
// if they match do nothing, if they don't, add it to new object
function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

// found a method that just does everything but easier
