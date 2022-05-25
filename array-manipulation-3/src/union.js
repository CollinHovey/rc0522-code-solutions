/* exported union */
function union(first, second) {
  var newArray = [];
  for (var x in first) {
    newArray.push(first[x]);
  }
  for (var y in second) {
    for (x in first) {
      if (first[x] === second[y]) {
        var add = false;
        break;
      } else if (first[x] !== second[y]) {
        add = true;
      }
    }
    if (add) {
      newArray.push(second[y]);
    }
  }
  return newArray;
}
