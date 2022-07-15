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
  const course = req.body.course;
  const name = req.body.name;
  const score = Number(req.body.score);
  if (!name || !course || !score) {
    res.status(400).json({
      error: '"name", "course", "score" are required fields'
    });
    return;
  }
  if (score < 0) {
    res.status(400).json({
      error: '"score" must be a positive integer'
    });
    return;
  }
  const sql = `
  insert into "grades" ("course", "name", "score")
  values ($1, $2, $3)
  returning *;
  `;
  const params = [course, name, score];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!gradeId || gradeId < 0) {
    res.status(400).json({
      error: '"gradeId", must be a positive integer'
    });
    return;
  }
  const course = req.body.course;
  const name = req.body.name;
  const score = Number(req.body.score);
  if (!course || !name || !score) {
    res.status(400).json({
      error: '"course", "name", and "score" are required fields'
    });
    return;
  }
  const sql = `
    update "grades"
      set  "course" = $1,
           "name" = $2,
           "score" = $3
      where "gradeId" = $4
      returning *;
    `;
  const params = [course, name, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${gradeId}`
        });
        return;
      }
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!gradeId || gradeId < 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
      where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `cannot find grade with gradeId ${gradeId}`
        });
        return;
      }
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // console.log('Express server is listening on port 3000');
});
