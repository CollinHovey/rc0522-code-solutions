/* exported countValues */

function countValues(stack) {
  data = stack.print()
  let count = 0
  if (data !== 'Stack { <empty> }') {
    const newData = data.split('<-')
    count = newData.length
  }
  return count
}
