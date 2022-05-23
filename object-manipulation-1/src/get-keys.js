/* exported getKeys */
// make empty array
// create for loop that adds each property to array
function getKeys(object) {
  var newArray = [];
  for (const x in object) {
    newArray.push(x);
  }
  return newArray;
}
