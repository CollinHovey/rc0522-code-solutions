/* exported getTail */

function getTail(list) {
  let active = list.next
  let previous = list
  while (active) {
    previous = active
    active = active.next
  }
  return previous.data
}
