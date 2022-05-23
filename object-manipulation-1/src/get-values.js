/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (const x in object) {
    newArray.push(object[x]);
  }
  return newArray;
}
