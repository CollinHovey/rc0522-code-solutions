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
  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined || parseInt(req.body.score) < 0 || parseInt(req.body.score) > 100) {
    res.status(400).json({
      error: 'new grade must contain a valid name, course, and score where score is between 0-100'
    });
  } else {
    const course = req.body.course;
    const name = req.body.name;
    const score = req.body.score;
    const sql = `
    insert into "grades" ("course", "name", "score")
    values ('${course}', '${name}', '${score}')
    returning *;
    `;
    db.query(sql)
      .then(result => {
        res.json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined || parseInt(req.body.score) < 0 || parseInt(req.body.score) > 100) {
    res.status(400).json({
      error: 'new grade must contain a valid name, course, and score where score is between 0-100'
    });
  } else {
    const gradeId = req.params.gradeId;
    const course = req.body.course;
    const name = req.body.name;
    const score = req.body.score;
    const sql = `
    update "grades"
      set  "course" = ${course},
           "name" = ${name},
           "score" = ${score}
    where "gradeId" = ${gradeId}
    returning *;
    `;
    db.query(sql)
      .then(result => {
        res.json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
  // console.log(gradeId);
  // res.json(gradeId);
});

app.listen(3000, () => {
  // console.log('Express server is listening on port 3000');
});
