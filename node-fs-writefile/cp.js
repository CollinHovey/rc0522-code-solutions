const fs = require('fs');

const fileToCopy = process.argv[2];
const copyName = process.argv[3];
let fileToCopyText = '';

fs.readFile(fileToCopy, 'utf8', (err, data) => {
  if (err) {
    console.error('Error', err);
  }
  fileToCopyText = data;
  fs.writeFile(copyName, fileToCopyText, err => {
    if (err) {
      console.error(err);
    }
  });
});
