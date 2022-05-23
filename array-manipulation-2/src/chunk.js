/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (let x = 0; x < array.length; x++) {
    if (newArray.length === 0) {
      newArray.push([]);
      newArray[0].push(array[x]);
    } else if (newArray[(newArray.length - 1)].length === size) {
      newArray.push([]);
      newArray[newArray.length - 1].push(array[x]);
    } else {
      newArray[newArray.length - 1].push(array[x]);
    }
  }
  return newArray;
}

// var chunkquantity = array.length / size;
// console.log(chunkquantity);
// if (array.length % size !== 0) {
//   Math.ceil(chunkquantity);
// }

// for (let x = 0; x < array.length; x++) {
//   if (newArray === []) {
//     var chunkArray = [];
//     chunkArray.push(array[x]);
//     console.log('new chunk array', chunkArray);
//     newArray.push(chunkArray);
//     console.log('Array After Push', newArray);
//   } else if (chunkArray.length === 2) {
//     var newChunkArray = [];
//     newChunkArray.push(array[x]);
//     console.log('new chunk array', newChunkArray);
//     newArray.push(newChunkArray);
//     console.log('Array After Push', newArray);
//   }
// }
// return newArray;
