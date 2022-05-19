/* exported oddOrEven */
function oddOrEven(numbers) {
  var evenOrOdd = []
  for (let x = 0; x < numbers.length; x++) {
    if ((numbers[x] % 2) === 0) {
      evenOrOdd.push('even');
    } else {
      evenOrOdd.push('odd');
    }
  }
  return evenOrOdd;
}
