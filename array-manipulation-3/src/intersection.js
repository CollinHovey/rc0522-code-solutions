/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  for (var x in first) {
    for (var y in second) {
      if (first[x] === second[y]) {
        newArray.push(first[x]);
      }
    }
  }
  return newArray;
}
