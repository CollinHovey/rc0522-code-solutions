/* exported maxValue */

function maxValue(stack) {
  let count = -Infinity
  if (stack.peek() !== undefined) {
    count = stack.peek()
    while (stack.peek() !== undefined) {
      number = stack.pop();
      if (number > count) {
        count = number
      }
    }
  }
  return count
}
