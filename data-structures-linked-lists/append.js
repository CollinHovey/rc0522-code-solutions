/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let active = list.next
  let previous = list
  while (active) {
    previous = active
    active = active.next
  }
  return previous.next = new LinkedList('dirt')
}
