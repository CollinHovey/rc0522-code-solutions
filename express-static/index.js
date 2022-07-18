const express = require('express');
const app = express();
const path = require('path');

const directory = path.join(__dirname, 'public');

const expressThing = express.static(directory);

app.use(express.static(directory));

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
