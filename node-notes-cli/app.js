const data = require('./data.json');
const fs = require('fs');
const action = process.argv[2];

const read = () => {
  for (const x in data.notes) {
    console.log(x + ':', data.notes[x]);
  }
};

const create = () => {
  data.notes[data.nextId] = process.argv[3];
  data.nextId += 1;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, 'utf8', err => {
    if (err) {
      console.error(err);
    }
    console.log('Added to Data');
  });
};

const remove = () => {
  const entryDelete = process.argv[3];
  delete data.notes[entryDelete];
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, 'utf8', err => {
    if (err) {
      console.error(err);
    }
    console.log('Deleted from Data');
  });
};

const update = () => {
  const updateEntry = process.argv[3];
  const updateText = process.argv[4];
  if (data.notes[updateEntry] !== undefined) {
    data.notes[updateEntry] = updateText;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        console.error(err);
      }
      console.log('Updated Data');
    });
  } else {
    console.log('There is no entry at', updateEntry);
  }
};

if (action === 'read') {
  read();
} else if (action === 'create') {
  create();
} else if (action === 'delete') {
  remove();
} else if (action === 'update') {
  update();
}
