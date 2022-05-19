/* exported countdown */
function countdown(number) {
  var numbers = [];
  while (number > -1) {
    numbers.push(number);
    number = number - 1;
  }
  return numbers;
}
