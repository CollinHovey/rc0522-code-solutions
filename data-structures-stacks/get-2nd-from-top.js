/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const data = stack.print()
  if (data !== 'Stack { <empty> }') {
    const dataRemove = data.slice(8, (data.length - 2))
    const newData = dataRemove.split(' <- ')
    if (newData[1] !== undefined) {
      return JSON.parse(newData[1])
    }
  }
}
