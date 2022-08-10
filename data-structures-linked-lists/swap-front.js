/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list
  }
  const first = list
  const second = list.next
  first.next = list.next.next
  second.next = first
  return second
}
