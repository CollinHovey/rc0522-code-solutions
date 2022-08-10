/* exported insertUnderTop */

function insertUnderTop(stack, value) {

  if (stack.print() !== 'Stack { <empty> }') {
    const top = stack.pop()
    stack.push(value)
    stack.push(top)
  }
}
