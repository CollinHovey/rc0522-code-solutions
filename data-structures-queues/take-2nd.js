/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  const firstDequeue = queue.dequeue()
  if (queue.peek() === undefined) {
    return firstDequeue
  }
  const secondDequeue = queue.dequeue()
  queue.enqueue(firstDequeue)
  return secondDequeue
}
