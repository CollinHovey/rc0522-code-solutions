/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  let firstRem = queue.dequeue()
  if (queue.peek() === undefined) {
    return firstRem
  }
  let secondRem = queue.peek()
  while (secondRem < firstRem) {
    queue.enqueue(firstRem)
    firstRem = queue.dequeue()
    secondRem = queue.peek()
  }
  return firstRem

}
