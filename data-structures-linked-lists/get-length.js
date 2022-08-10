/* exported getLength */

function getLength(list) {
  let count = 1
  let active = list.next
  while (active) {
    count += 1;
    active = active.next
  }
  return count
}
