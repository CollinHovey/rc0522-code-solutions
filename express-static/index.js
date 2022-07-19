const express = require('express');
const app = express();
const path = require('path');

const directory = path.join(__dirname, 'public');

const staticMiddleware = express.static(directory);

app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
