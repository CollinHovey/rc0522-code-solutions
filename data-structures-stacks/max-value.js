/* exported maxValue */

function maxValue(stack) {
  const data = stack.print()
  let count = -Infinity
  if (data !== 'Stack { <empty> }') {
    const dataRemove = data.slice(8, (data.length - 2))
    const newData = dataRemove.split(' <- ')
    count = 0
    if (!isNaN(parseInt(newData[0]))) {
      count = parseInt(newData[0])
    }
    for (let x = 1; x < newData.length; x++) {
      if (parseInt(newData[x]) > count && !isNaN(parseInt(newData[x]))) {
        count = parseInt(newData[x])
      }
    }
  }
  return count
}
