/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  const firstDequeue = queue.dequeue()
  if (queue.peek() === undefined) {
    return firstDequeue
  }
  const secondDequeue = queue.dequeue()
  if (firstDequeue < secondDequeue) {
    queue.enqueue(secondDequeue)
    return firstDequeue
  }
  if (firstDequeue === secondDequeue) {
    queue.enqueue(firstDequeue)
  }
  if (firstDequeue > secondDequeue) {
    queue.enqueue(firstDequeue)
  }
  return secondDequeue
}
