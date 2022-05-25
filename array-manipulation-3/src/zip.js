/* exported zip */
// create a new array
// create a variable for how long each array is
// see which one is longer, and go the length of that one in for loop
// create a for loop to look through each array
// create new empty array
// add each item into new array
function zip(first, second) {
  var newArray = [];
  if (first.length === second.length) {
    var use = first;
  } else if (first.length > second.length) {
    use = second;
  } else {
    use = first;
  }
  if (use === first) {
    for (var x in first) {
      var pairArray = [];
      pairArray.push(first[x]);
      pairArray.push(second[x]);
      newArray.push(pairArray);
    }
  } else {
    for (x in second) {
      pairArray = [];
      pairArray.push(first[x]);
      pairArray.push(second[x]);
      newArray.push(pairArray);
    }
  }
  return newArray;
}
