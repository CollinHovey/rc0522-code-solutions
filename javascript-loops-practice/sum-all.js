/* exported sumAll */
function sumAll(numbers) {
  var sum = 0
  for ( var x in numbers) {
    sum = sum + numbers[x];
  }
  return sum
}
