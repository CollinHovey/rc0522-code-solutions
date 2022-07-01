const express = require('express');
const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
});
