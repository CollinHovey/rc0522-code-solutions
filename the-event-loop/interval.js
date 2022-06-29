let count = 3;
const stopCount = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(stopCount);
  } else {
    console.log(count);
    count -= 1;
  }
}, 1000)
