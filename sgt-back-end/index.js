const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const test = req.body;
  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined) {
    console.log(test);
    res.status(400).json({
      error: 'new grade must contain a valid name, course, and score where score is between 0-100'
    });
  } else {
    console.log(test);
    res.json(test);
  }
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
});
