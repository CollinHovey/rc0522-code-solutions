const express = require('express');
const app = express();
app.use(express.json());

let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  const sendGrades = [];
  for (const x in grades) {
    sendGrades.push(grades[x]);
  }
  res.json(sendGrades);
});

app.post('/api/grades', (req, res) => {
  const newStudent = req.body;
  newStudent.id = nextId;
  grades[nextId] = newStudent;
  nextId += 1;
  res.json(newStudent);
});

app.listen(3000, () => {
  // console.log('Express server is listening on port 3000');
});
