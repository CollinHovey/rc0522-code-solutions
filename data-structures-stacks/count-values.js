/* exported countValues */

function countValues(stack) {
  let count = 0
  if (stack.peek() !== undefined) {
    while (stack.peek() !== undefined) {
      count += 1
      stack.pop()
    }
  }
  return count
}
