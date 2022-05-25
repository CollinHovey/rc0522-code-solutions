/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (var x in first) {
    for (var y in second) {
      if (first[x] === second[y]) {
        var add = false;
        break;
      } else {
        add = true;
      }
    }
    if (add === true) {
      newArray.push(first[x]);
    }
  }
  for (var a in second) {
    for (var b in first) {
      if (second[a] === first[b]) {
        add = false;
        break;
      } else {
        add = true;
      }
    }
    if (add) {
      newArray.push(second[a]);
    }
  }
  return newArray;
}
