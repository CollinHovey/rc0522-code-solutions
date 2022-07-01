let data = require('./data.json')
const fs = require('fs');
const action = process.argv[2];
console.log('Action: ', action);
// console.log('Data Object: ', data);

const read = () => {
  for (let x in data.notes) {
    console.log(x + ':', data.notes[x]);
  }
}

const create = () => {
  // console.log('Text to add: ', process.argv[3]);
  data.notes[data.nextId] = process.argv[3];
  data.nextId += 1;
  const newData = JSON.stringify(data, null, 2)
  fs.writeFile('data.json', newData, 'utf8', (err) => {
    if (err) {
      console.error(err);
    };
    console.log('Added to Data');
  });
}

const remove = () => {
  const entryDelete = process.argv[3];
  delete data.notes[entryDelete];
  const newData = JSON.stringify(data, null, 2)
  fs.writeFile('data.json', newData, 'utf8', (err) => {
    if (err) {
      console.error(err);
    };
    console.log('Deleted from Data');
  });
}

const update = () => {
  const updateEntry = process.argv[3];
  const updateText = process.argv[4];
  data.notes[updateEntry] = updateText;
  const newData = JSON.stringify(data, null, 2)
  fs.writeFile('data.json', newData, 'utf8', (err) => {
    if (err) {
      console.error(err);
    };
    console.log('Updated Data');
  });
}

if (action === 'read') {
  read();
} else if (action === 'create') {
  create();
} else if (action === 'delete') {
  remove();
} else if (action === 'update') {
  update();
}
