const fs = require('fs');
console.log(process.argv)

for (var x = 2; x < process.argv.length; x++) {
  fs.readFile(process.argv[x], 'utf8', (err, data) => {
    console.log(data);
  });
}
