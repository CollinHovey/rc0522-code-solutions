/* exported removeTail */

function removeTail(list) {
  let active = list.next
  let previous = list
  let second = previous
  while (active) {
    second = previous
    previous = active
    active = active.next
  }
  second.next = null
}
