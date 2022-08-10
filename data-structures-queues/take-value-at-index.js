/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined
  }
  for (let x = 0; x <= index; x++) {
    const front = queue.dequeue()
    if (x === index) {
      return front
    }
    queue.enqueue(front)
  }
}
