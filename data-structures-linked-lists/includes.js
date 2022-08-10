/* exported includes */

function includes(list, value) {
  let active = list.next
  let previous = list
  if (JSON.stringify(list.data) === JSON.stringify(value)) {
    return true
  }
  while (active) {
    previous = active
    if (JSON.stringify(previous.data) === JSON.stringify(value)) {
      return true
    }
    active = active.next
  }
  return false
}
