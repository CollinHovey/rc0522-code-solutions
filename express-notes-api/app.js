const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
app.use(express.json());
const notIdError = {
  error: 'id must be a positive integer'
};

app.get('/api/notes', (req, res) => {
  const sendData = [];
  for (const x in data.notes) {
    sendData.push(data.notes[x]);
  }
  res.status(200).json(sendData);
});

app.get('/api/notes/:id', (req, res) => {
  const checkId = req.params.id;
  if (checkId < 1 || !Number.isInteger(checkId) || Number.isNaN(checkId)) {
    res.status(400).json(notIdError);
  } else if (data.notes[checkId] === undefined) {
    const noIdError = {
      error: `cannot find note with id ${checkId}`
    };
    res.status(404).json(noIdError);
  } else {
    const sendData = {};
    sendData[checkId] = data.notes[checkId];
    res.status(200).json(sendData[checkId]);
  }
});

app.post('/api/notes', (req, res) => {
  const nextId = data.nextId;
  const body = req.body;
  if (body.content === undefined || body.content === '') {
    const noContent = {
      error: 'content is a required field'
    };
    res.status(400).json(noContent);
  } else {
    data.notes[nextId] = {
      id: nextId,
      content: body.content
    };
    data.nextId += 1;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonData, err => {
      if (err) {
        const noContent = {
          error: 'An unexpected error occured.'
        };
        console.error(err);
        res.status(500).json(noContent);
      } else {
        res.status(201).json(data.notes[nextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const checkId = req.params.id;
  if (checkId < 1 || !Number.isInteger(checkId) || Number.isNaN(checkId)) {
    res.status(400).json(notIdError);
  } else if (data.notes[checkId] === undefined) {
    const noIdError = {
      error: `cannot find note with id ${checkId}`
    };
    res.status(404).json(noIdError);
  } else {
    delete data.notes[checkId];
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonData, err => {
      console.log('wrote file');
      if (err) {
        const noContent = {
          error: 'An unexpected error occured.'
        };
        console.error(err);
        res.status(500).json(noContent);
      } else {
        console.log('deleted');
        res.sendStatus(204);
      }
    });
  }
})

app.put('/api/notes/:id', (req, res) => {
  const checkId = req.params.id;
  const body = req.body;
  console.log(checkId);
  console.log(body);
  if (checkId < 1 || !Number.isInteger(checkId) || Number.isNaN(checkId)) {
    res.status(400).json(notIdError);
  } else if (body.content === undefined || body.content === '') {
    const noContent = {
      error: 'content is a required field'
    };
    res.status(400).json(noContent);
  } else if (data.notes[checkId] === undefined) {
    const noIdError = {
      error: `cannot find note with id ${checkId}`
    };
    res.status(404).json(noIdError);
  } else {
    data.notes[checkId].content = body.content;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonData, err => {
      if (err) {
        const noContent = {
          error: 'An unexpected error occured.'
        };
        console.error(err);
        res.status(500).json(noContent);
      } else {
        res.status(200).json(data.notes[checkId]);
      }
    });
  }
})

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
});
